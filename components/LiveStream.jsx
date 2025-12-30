"use client";
import { useEffect, useRef } from 'react';

const LiveStream = ({ className = "" }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const initStream = async () => {
      const streamUrl = 'http://10.10.118.196:8888/hikvision/index.m3u8';
      
      try {
        const { default: Hls } = await import('hls.js');
        
        if (Hls.isSupported()) {
          const hls = new Hls();
          
          hls.on(Hls.Events.MANIFEST_PARSED, () => {
            console.log('Stream loaded successfully');
          });
          
          hls.loadSource(streamUrl);
          hls.attachMedia(video);
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
          video.src = streamUrl;
        }
      } catch (err) {
        console.error('HLS load failed:', err);
      }
    };

    initStream();
  }, []);

  return (
    <div className={`relative bg-black rounded-lg overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        className="w-full h-full object-contain bg-black"
        controls
        muted
        autoPlay
        playsInline
      />
    </div>
  );
};

export default LiveStream;