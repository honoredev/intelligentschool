"use client";
import { useState, useEffect } from 'react';
import { RefreshCw, Camera, Clock } from 'lucide-react';
import LiveStream from '../../../components/LiveStream';

export default function CamerasPage() {
  const [refreshKey, setRefreshKey] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());

  const cameras = [
    {
      id: 1,
      name: "Main Camera",
      streamUrl: "http://197.243.27.202:8888/live/index.m3u8"
    },
    {
      id: 2,
      name: "Secondary Camera", 
      streamUrl: "http://197.243.27.202:8888/live/index.m3u8"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleRefresh = () => {
    setRefreshKey(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Camera className="w-8 h-8 text-blue-400" />
            <h1 className="text-2xl font-bold">Security Camera Dashboard</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-gray-300">
              <Clock className="w-4 h-4" />
              <span className="text-sm">
                {currentTime.toLocaleTimeString()}
              </span>
            </div>
            
            <button
              onClick={handleRefresh}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Refresh</span>
            </button>
          </div>
        </div>
      </div>

      {/* Camera Grid */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {cameras.map((camera) => (
            <div key={`${camera.id}-${refreshKey}`} className="space-y-4">
              {/* Camera Label */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <h2 className="text-xl font-semibold text-white">
                    {camera.name}
                  </h2>
                  <span className="px-2 py-1 bg-red-600 text-white text-xs font-medium rounded-full flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-1 animate-pulse"></div>
                    LIVE
                  </span>
                </div>
              </div>

              {/* Camera Stream */}
              <div className="bg-gray-800 rounded-lg p-4">
                <LiveStream
                  streamUrl={camera.streamUrl}
                  className="aspect-video w-full"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Status Info */}
        <div className="mt-8 bg-gray-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">System Status</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>Server Online</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span>HLS Streaming Active</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span>Low Latency Mode</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}