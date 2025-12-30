import { NextRequest, NextResponse } from 'next/server'
import { UserController } from '@/lib/controllers/userController'
import { spawn } from 'child_process'

// Store active streams
const activeStreams = new Map();

export async function GET() {
  try {
    const users = await UserController.getAllUsers()
    return NextResponse.json(users)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    // Check if this is a camera request
    if (data.streamPath) {
      const { name, username, password, ipAddress, streamPath } = data;
      
      if (!name || !username || !password || !ipAddress || !streamPath) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
      }

      // Start FFmpeg process directly
      const ffmpegArgs = [
        '-rtsp_transport', 'tcp',
        '-i', `rtsp://${username}:${password}@${ipAddress}:554/Streaming/Channels/101`,
        '-c:v', 'libx264',
        '-preset', 'ultrafast',
        '-tune', 'zerolatency',
        '-c:a', 'aac',
        '-f', 'rtsp',
        `rtsp://localhost:8554/${streamPath}`
      ];

      const ffmpegProcess = spawn('ffmpeg', ffmpegArgs);
      
      ffmpegProcess.on('error', (error) => {
        console.error('FFmpeg error:', error);
      });

      // Store the process
      activeStreams.set(streamPath, ffmpegProcess);

      return NextResponse.json({ 
        success: true, 
        message: 'Camera stream started',
        streamUrl: `http://localhost:8888/${streamPath}/index.m3u8`
      });
    }
    
    // Regular user creation
    const user = await UserController.createUser(data)
    return NextResponse.json(user, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 })
  }
}