"use client";
import { useEffect, useRef, useState } from 'react';

const LiveStream = ({ className = "", streamUrl }) => {
  const videoRef = useRef(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const initStream = async () => {
      // Use your VPS stream URL
      const defaultStreamUrl = streamUrl || 'http://10.10.118.196:8888/hikvision/index.m3u8';
      
      try {
        setIsLoading(true);
        setError(null);
        
        const { default: Hls } = await import('hls.js');
        
        if (Hls.isSupported()) {
          const hls = new Hls({
            enableWorker: false,
            lowLatencyMode: true,
          });
          
          hls.on(Hls.Events.MANIFEST_PARSED, () => {
            console.log('Stream loaded successfully');
            setIsLoading(false);
          });
          
          hls.on(Hls.Events.ERROR, (event, data) => {
            console.error('HLS Error:', data);
            setError('Cannot connect to camera stream. Check VPS network access.');
            setIsLoading(false);
          });
          
          hls.loadSource(defaultStreamUrl);
          hls.attachMedia(video);
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
          video.src = defaultStreamUrl;
          video.onloadstart = () => setIsLoading(false);
          video.onerror = () => {
            setError('Cannot connect to camera stream. Check VPS network access.');
            setIsLoading(false);
          };
        } else {
          setError('HLS not supported in this browser');
          setIsLoading(false);
        }
      } catch (err) {
        console.error('HLS load failed:', err);
        setError('Failed to load video player');
        setIsLoading(false);
      }
    };

    initStream();
  }, [streamUrl]);

  return (
    <div className={`relative bg-black rounded-lg overflow-hidden ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-2"></div>
            <p>Connecting to camera...</p>
          </div>
        </div>
      )}
      
      {error && (
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center">
            <p className="text-red-400 mb-2">📹 {error}</p>
            <p className="text-sm text-gray-400">VPS: {streamUrl || '10.10.118.196:8888'}</p>
          </div>
        </div>
      )}
      
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