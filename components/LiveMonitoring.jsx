"use client";
import React, { useState } from 'react';
import LiveStream from './LiveStream';
import { Button } from "@/components/ui/button";
import { 
  Plus, Camera, AlertCircle, X
} from 'lucide-react';

const LiveMonitoring = () => {
  const [cameras, setCameras] = useState([
    { 
      id: 1, 
      name: "Grade 10A - Mathematics", 
      status: "active", 
      url: "http://10.10.118.196:8888/hikvision/index.m3u8",
      streamPath: "hikvision"
    },
    { 
      id: 2, 
      name: "Grade 11B - Physics", 
      status: "active", 
      url: "http://10.10.118.196:8888/hikvision/index.m3u8",
      streamPath: "hikvision"
    },
    { 
      id: 3, 
      name: "Grade 12A - Chemistry", 
      status: "inactive", 
      url: "",
      streamPath: ""
    },
    { 
      id: 4, 
      name: "Grade 9C - Biology", 
      status: "active", 
      url: "http://10.10.118.196:8888/hikvision/index.m3u8",
      streamPath: "hikvision"
    },
    { 
      id: 5, 
      name: "Grade 10B - English", 
      status: "active", 
      url: "http://10.10.118.196:8888/hikvision/index.m3u8",
      streamPath: "hikvision"
    },
    { 
      id: 6, 
      name: "Grade 11A - History", 
      status: "active", 
      url: "http://10.10.118.196:8888/hikvision/index.m3u8",
      streamPath: "hikvision"
    }
  ]);
  
  const [selectedCamera, setSelectedCamera] = useState(cameras[0]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newCamera, setNewCamera] = useState({
    name: '',
    username: '',
    password: '',
    ipAddress: ''
  });
  const [isConnecting, setIsConnecting] = useState(false);

  const addCamera = async () => {
    if (!newCamera.name || !newCamera.username || !newCamera.password || !newCamera.ipAddress) {
      alert('Please fill in all fields');
      return;
    }

    setIsConnecting(true);
    
    try {
      // Generate unique stream path
      const streamPath = newCamera.name.toLowerCase().replace(/[^a-z0-9]/g, '');
      
      // Update MediaMTX configuration and start stream
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: newCamera.name,
          username: newCamera.username,
          password: newCamera.password,
          ipAddress: newCamera.ipAddress,
          streamPath: streamPath
        })
      });

      if (response.ok) {
        const result = await response.json();
        
        const camera = {
          id: cameras.length + 1,
          name: newCamera.name,
          status: 'active',
          url: result.streamUrl,
          streamPath: streamPath
        };
        
        setCameras([...cameras, camera]);
        setNewCamera({ name: '', username: '', password: '', ipAddress: '' });
        setShowAddModal(false);
        setSelectedCamera(camera);
        
        alert('Camera added and streaming started!');
      } else {
        const errorData = await response.json();
        alert(`Failed to add camera: ${errorData.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('Network error. Please check your connection.');
    }
    
    setIsConnecting(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="flex h-screen">
        {/* Main Display Area */}
        <div className="flex-1 p-6">
          <div className="h-full flex flex-col">
            {/* Class Name */}
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-gray-900">{selectedCamera.name}</h2>
            </div>
            
            {/* Video Display */}
            <div className="flex-1 bg-white rounded-xl overflow-hidden border border-gray-200">
              {selectedCamera.url && selectedCamera.status === 'active' ? (
                <LiveStream className="w-full h-full" streamUrl={selectedCamera.url} />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-50">
                  <div className="text-center text-gray-400">
                    <Camera className="w-24 h-24 mx-auto text-gray-300 mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-gray-500">No Signal</h3>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Camera Panel */}
        <div className="w-80 bg-gray-50 border-l border-gray-200">
          {/* Panel Header */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-gray-900">Camera Feeds</h3>
              <Button 
                size="sm" 
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => setShowAddModal(true)}
              >
                <Plus className="w-4 h-4 mr-1" />
                Add
              </Button>
            </div>
          </div>
          
          {/* Camera Grid */}
          <div className="p-4 space-y-3 h-[calc(100vh-100px)] overflow-y-auto">
            {cameras.map((camera) => (
              <div
                key={camera.id}
                onClick={() => setSelectedCamera(camera)}
                className={`relative p-3 rounded-lg border cursor-pointer transition-all hover:border-gray-300 ${
                  selectedCamera.id === camera.id 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-200 bg-white'
                }`}
              >
                {/* Camera Preview */}
                <div className="aspect-video bg-white rounded-lg mb-3 overflow-hidden border border-gray-200">
                  {camera.status === 'active' && camera.url ? (
                    <LiveStream className="w-full h-full" streamUrl={camera.url} />
                  ) : (
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                      <div className="text-center">
                        <AlertCircle className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-xs text-gray-500">
                          {camera.status === 'inactive' ? 'Run batch file to start' : 'No Signal'}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Camera Info */}
                <div>
                  <h4 className="text-gray-900 font-medium text-sm truncate">{camera.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add Camera Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl p-6 w-[400px] max-w-[90vw]">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Add New Camera</h3>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setShowAddModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Camera Name</label>
                <input
                  type="text"
                  value={newCamera.name}
                  onChange={(e) => setNewCamera({...newCamera, name: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Grade 12B - Mathematics"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">IP Address</label>
                <input
                  type="text"
                  value={newCamera.ipAddress}
                  onChange={(e) => setNewCamera({...newCamera, ipAddress: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="192.168.0.107"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
                <input
                  type="text"
                  value={newCamera.username}
                  onChange={(e) => setNewCamera({...newCamera, username: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="admin"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  value={newCamera.password}
                  onChange={(e) => setNewCamera({...newCamera, password: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter password"
                />
              </div>
            </div>
            
            <div className="flex justify-end space-x-3 mt-6">
              <Button 
                variant="outline" 
                onClick={() => setShowAddModal(false)}
                disabled={isConnecting}
              >
                Cancel
              </Button>
              <Button 
                onClick={addCamera}
                className="bg-blue-600 hover:bg-blue-700"
                disabled={isConnecting}
              >
                {isConnecting ? 'Connecting...' : 'Save & Connect'}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveMonitoring;