@echo off
:start
echo Starting auto-restart stream monitor...
echo Press Ctrl+C to stop

:loop
echo [%date% %time%] Starting FFmpeg stream...
ffmpeg -rtsp_transport tcp -i rtsp://admin:OCASTA@192.168.0.107:554/Streaming/Channels/101 -c:v libx264 -preset ultrafast -tune zerolatency -profile:v baseline -level 3.1 -pix_fmt yuv420p -g 30 -keyint_min 15 -vf scale=1280:720 -c:a aac -b:a 64k -ar 44100 -af aresample=async=1 -fps_mode cfr -f rtsp rtsp://10.10.118.196:8554/hikvision

echo [%date% %time%] FFmpeg stopped. Waiting 5 seconds before restart...
timeout /t 5 /nobreak >nul
goto loop