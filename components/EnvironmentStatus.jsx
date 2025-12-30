"use client";
import { useState, useEffect } from 'react';
import { Thermometer, Droplets, Volume2, Flame, AlertTriangle } from 'lucide-react';

const EnvironmentStatus = () => {
  const [sensorData, setSensorData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://schoolsesp32-2.onrender.com/api/sensor/data');
        if (response.ok) {
          const data = await response.json();
          setSensorData(data);
        }
      } catch (err) {
        console.error('Failed to fetch sensor data:', err);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!sensorData) {
    return (
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="text-lg font-semibold mb-3">Environment Status</h3>
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  const hasAlert = sensorData.sound > 3800 || sensorData.smoke > 1800;

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold">Environment Status</h3>
        {hasAlert && <AlertTriangle className="w-5 h-5 text-red-500" />}
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        <div className="flex items-center space-x-2">
          <Thermometer className="w-4 h-4 text-red-500" />
          <span className="text-sm">{sensorData.temperature?.toFixed(1)}°C</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <Droplets className="w-4 h-4 text-blue-500" />
          <span className="text-sm">{sensorData.humidity?.toFixed(0)}%</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <Volume2 className={`w-4 h-4 ${sensorData.sound > 3800 ? 'text-red-500' : 'text-yellow-500'}`} />
          <span className="text-sm">{sensorData.sound}</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <Flame className={`w-4 h-4 ${sensorData.smoke > 1800 ? 'text-red-500' : 'text-orange-500'}`} />
          <span className="text-sm">{sensorData.smoke}</span>
        </div>
      </div>
      
      {hasAlert && (
        <div className="mt-3 p-2 bg-red-100 text-red-700 rounded text-sm">
          Alert: High levels detected!
        </div>
      )}
    </div>
  );
};

export default EnvironmentStatus;