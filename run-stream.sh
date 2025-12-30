#!/bin/bash

# Create HLS directory
mkdir -p /tmp/hls

# Start FFmpeg streaming in background
ffmpeg -i rtsp://admin:LBEVFF@192.168.0.100:554/stream1 \
  -c:v libx264 -preset ultrafast -tune zerolatency \
  -c:a aac -b:a 128k \
  -f hls -hls_time 2 -hls_list_size 10 -hls_flags delete_segments \
  /tmp/hls/live.m3u8 &

# Start HTTP server
cd /tmp && python3 -m http.server 8080