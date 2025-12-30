"use client";
import React, { useState } from 'react';
import LiveStream from './LiveStream';
import { Button } from "@/components/ui/button";
import { Plus, Camera, Eye, Heart, Send, Users } from 'lucide-react';

const LiveMonitoring = () => {
  const [selectedCamera] = useState({
    name: "Grade 10A Mathematics", 
    teacher: "Dr. Sarah Johnson",
    status: "live", 
    url: "http://10.10.118.196:8888/hikvision/index.m3u8",
    viewers: 156
  });
  
  const [chatMessage, setChatMessage] = useState('');
  const [isFollowing, setIsFollowing] = useState(false);

  const chatMessages = [
    { user: "StudentMike", message: "Great explanation!" },
    { user: "ParentSarah", message: "My daughter loves this class" },
    { user: "TeacherAlex", message: "Excellent teaching method" }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Twitch Header */}
      <div className="bg-gray-800 border-b border-gray-700 px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="text-purple-400 font-bold text-xl">EduStream</div>
          <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
            <Plus className="w-4 h-4 mr-1" />
            Add Stream
          </Button>
        </div>
      </div>

      <div className="flex h-[calc(100vh-60px)]">
        {/* Video Player */}
        <div className="flex-1 flex flex-col">
          <div className="flex-1 bg-black relative">
            <LiveStream className="w-full h-full" streamUrl={selectedCamera.url} />
            
            {/* Live Badge */}
            <div className="absolute top-4 left-4">
              <div className="flex items-center space-x-1 bg-red-600 text-white px-3 py-1 rounded text-sm font-bold">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span>LIVE</span>
              </div>
            </div>
            
            {/* Viewer Count */}
            <div className="absolute top-4 right-4">
              <div className="bg-black bg-opacity-70 text-white px-3 py-1 rounded flex items-center space-x-1">
                <Eye className="w-4 h-4" />
                <span>{selectedCamera.viewers}</span>
              </div>
            </div>
          </div>
          
          {/* Stream Info */}
          <div className="bg-gray-800 p-4 border-t border-gray-700">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">{selectedCamera.name}</h2>
                  <p className="text-purple-400 font-medium">{selectedCamera.teacher}</p>
                </div>
              </div>
              
              <Button 
                variant={isFollowing ? "outline" : "default"}
                size="sm"
                onClick={() => setIsFollowing(!isFollowing)}
                className={isFollowing ? "border-purple-500 text-purple-400" : "bg-purple-600 hover:bg-purple-700"}
              >
                <Heart className={`w-4 h-4 mr-2 ${isFollowing ? 'fill-current' : ''}`} />
                {isFollowing ? 'Following' : 'Follow'}
              </Button>
            </div>
          </div>
        </div>
        
        {/* Chat Sidebar */}
        <div className="w-80 bg-gray-800 border-l border-gray-700 flex flex-col">
          <div className="p-4 border-b border-gray-700">
            <h3 className="text-white font-semibold">Stream Chat</h3>
          </div>
          
          <div className="flex-1 overflow-y-auto p-2 space-y-2">
            {chatMessages.map((msg, index) => (
              <div key={index} className="flex items-start space-x-2 hover:bg-gray-700 p-2 rounded">
                <span className="text-purple-400 font-semibold text-sm">{msg.user}:</span>
                <span className="text-white text-sm">{msg.message}</span>
              </div>
            ))}
          </div>
          
          <div className="p-3 border-t border-gray-700">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                placeholder="Send a message"
                className="flex-1 bg-gray-700 text-white px-3 py-2 rounded text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <Button size="sm" className="bg-purple-600 hover:bg-purple-700 p-2">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveMonitoring;