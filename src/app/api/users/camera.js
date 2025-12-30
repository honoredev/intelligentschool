import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { name, username, password, ipAddress, streamPath } = await request.json();

    if (!name || !username || !password || !ipAddress || !streamPath) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // For now, just return success and let the frontend handle the stream
    // The batch file creation will be handled separately
    return NextResponse.json({ 
      success: true, 
      message: 'Camera credentials validated',
      streamUrl: `http://10.10.118.196:8888/${streamPath}/index.m3u8`,
      batchContent: `@echo off
:loop
ffmpeg -rtsp_transport tcp -i "rtsp://${username}:${password}@${ipAddress}:554/Streaming/Channels/101" -c:v libx264 -preset ultrafast -tune zerolatency -c:a aac -f rtsp rtsp://localhost:8554/${streamPath}
timeout /t 5 /nobreak
goto loop`
    });

  } catch (error) {
    console.error('Error processing camera:', error);
    return NextResponse.json({ 
      error: 'Failed to process camera', 
      details: error.message 
    }, { status: 500 });
  }
}