"use client";
import { useEffect, useRef, useState } from 'react';

const LiveStream = ({ className = "", streamUrl }) => {
  const videoRef = useRef(null);
  const hlsRef = useRef(null);
  const [status, setStatus] = useState('connecting');
  const reconnectTimer = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const initStream = async () => {
      const url = streamUrl || 'http://10.10.118.196:8888/hikvision/index.m3u8';
      
      // Clear previous instance
      if (hlsRef.current) {
        hlsRef.current.destroy();
      }
      
      try {
        const { default: Hls } = await import('hls.js');
        
        if (Hls.isSupported()) {
          const hls = new Hls({
            enableWorker: false,
            lowLatencyMode: true
          });
          
          hls.on(Hls.Events.MANIFEST_PARSED, () => {
            console.log('Stream connected');
            setStatus('live');
          });
          
          hls.on(Hls.Events.ERROR, (event, data) => {
            if (data.fatal) {
              console.log('Stream error, reconnecting...');
              setStatus('reconnecting');
              
              // Auto-reconnect after 3 seconds
              reconnectTimer.current = setTimeout(() => {
                initStream();
              }, 3000);
            }
          });
          
          hlsRef.current = hls;
          hls.loadSource(url);
          hls.attachMedia(video);
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
          video.src = url;
        }
      } catch (err) {
        console.error('HLS load failed, retrying...');
        setStatus('reconnecting');
        
        // Retry after 3 seconds
        reconnectTimer.current = setTimeout(() => {
          initStream();
        }, 3000);
      }
    };

    initStream();
    
    // Check connection every 10 seconds
    const healthCheck = setInterval(() => {
      if (status === 'live' && video.readyState === 0) {
        console.log('Stream lost, reconnecting...');
        setStatus('reconnecting');
        initStream();
      }
    }, 10000);

    return () => {
      clearInterval(healthCheck);
      if (reconnectTimer.current) {
        clearTimeout(reconnectTimer.current);
      }
      if (hlsRef.current) {
        hlsRef.current.destroy();
      }
    };
  }, [streamUrl]);

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
      
      {status === 'reconnecting' && (
        <div className="absolute top-4 right-4 bg-yellow-600 text-white px-3 py-1 rounded text-sm">
          Reconnecting...
        </div>
      )}
      
      {status === 'live' && (
        <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded text-sm">
          Live
        </div>
      )}
    </div>
  );
};

export default LiveStream;