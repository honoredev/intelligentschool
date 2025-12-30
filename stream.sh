#!/bin/bash

# Kill existing processes
pkill -f ffmpeg
pkill -f "python3 -m http.server"

# Create output directory
mkdir -p /tmp/hls

# Start HTTP server in background
cd /tmp/hls
python3 -m http.server 8080 &
HTTP_PID=$!

# Start FFmpeg
ffmpeg -rtsp_transport tcp -i rtsp://admin:LBEVFF@192.168.0.100:554/stream1 \
  -c:v libx264 -preset ultrafast -tune zerolatency -profile:v baseline \
  -pix_fmt yuv420p -r 10 -g 20 -keyint_min 10 -sc_threshold 0 \
  -c:a aac -ar 44100 -b:a 64k \
  -f hls -hls_time 2 -hls_list_size 5 -hls_flags delete_segments \
  -hls_segment_filename /tmp/hls/segment_%03d.ts \
  /tmp/hls/live.m3u8 &
FFMPEG_PID=$!

echo "Stream started!"
echo "FFmpeg PID: $FFMPEG_PID"
echo "HTTP Server PID: $HTTP_PID"
echo "Stream URL: http://localhost:8080/live.m3u8"
echo "Press Ctrl+C to stop"

# Wait for interrupt
trap "kill $FFMPEG_PID $HTTP_PID; exit" INT
wait