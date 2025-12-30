"use client";
import React, { useState } from 'react';
import LiveStream from './LiveStream';
import { Play, Pause, Volume2, Maximize, MoreHorizontal } from 'lucide-react';

const LiveMonitoring = () => {
  const [selectedCamera, setSelectedCamera] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  
  const cameras = [
    { id: 0, name: "Main Classroom", location: "Grade 10A", viewers: "24 watching" },
    { id: 1, name: "Science Laboratory", location: "Chemistry Lab", viewers: "12 watching" },
    { id: 2, name: "Library Hall", location: "Study Area", viewers: "8 watching" },
    { id: 3, name: "Sports Ground", location: "Outdoor", viewers: "15 watching" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Live Monitoring</h1>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span>Live</span>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Main Video Player */}
        <div className="mb-6">
          <div className="bg-black rounded-xl overflow-hidden shadow-2xl relative group">
            <LiveStream className="w-full aspect-video" />
            
            {/* Video Controls Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center space-x-4">
                    <button 
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                    </button>
                    <Volume2 className="w-5 h-5" />
                  </div>
                  <div className="flex items-center space-x-3">
                    <Maximize className="w-5 h-5 cursor-pointer hover:text-gray-300" />
                    <MoreHorizontal className="w-5 h-5 cursor-pointer hover:text-gray-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Video Info */}
          <div className="mt-4">
            <h2 className="text-xl font-semibold text-gray-900">{cameras[selectedCamera].name}</h2>
            <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
              <span>{cameras[selectedCamera].location}</span>
              <span>•</span>
              <span>{cameras[selectedCamera].viewers}</span>
            </div>
          </div>
        </div>

        {/* Camera Grid */}
        <div className="">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">All Cameras</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {cameras.map((camera) => (
              <div 
                key={camera.id}
                onClick={() => setSelectedCamera(camera.id)}
                className={`group cursor-pointer transition-all duration-200 ${
                  selectedCamera === camera.id 
                    ? 'ring-2 ring-blue-500 ring-offset-2' 
                    : 'hover:scale-105 hover:shadow-lg'
                }`}
              >
                <div className="bg-black rounded-lg overflow-hidden aspect-video relative">
                  <LiveStream className="w-full h-full" />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Live Badge */}
                  <div className="absolute top-2 left-2">
                    <div className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium flex items-center space-x-1">
                      <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                      <span>LIVE</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-2">
                  <h4 className="font-medium text-gray-900 text-sm">{camera.name}</h4>
                  <p className="text-xs text-gray-600">{camera.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveMonitoring;