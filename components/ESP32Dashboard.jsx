'use client';

import React, { useState, useEffect } from 'react';
import { AlertCircle, Thermometer, Droplets, Wind, Volume2, Flame, Wifi, WifiOff, Activity } from 'lucide-react';

const ESP32Dashboard = () => {
  const [sensorData, setSensorData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(null);

  // Replace with your actual Render URL
  const API_URL = 'https://schoolsesp32-2.onrender.com/api/sensor/data';

  const fetchSensorData = async () => {
    try {
      const response = await fetch(API_URL);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setSensorData(data);
      setLastUpdate(new Date());
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching sensor data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSensorData();
    const interval = setInterval(fetchSensorData, 2000); // Fetch every 2 seconds
    return () => clearInterval(interval);
  }, []);

  const SensorCard = ({ icon: Icon, title, value, unit, alert, color }) => (
    <div className={`bg-white rounded-lg shadow-md p-6 border-l-4 ${alert ? 'border-red-500' : `border-${color}-500`}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Icon className={`w-8 h-8 ${alert ? 'text-red-500' : `text-${color}-500`}`} />
          <div>
            <p className="text-sm text-gray-600">{title}</p>
            <p className={`text-2xl font-bold ${alert ? 'text-red-600' : 'text-gray-800'}`}>
              {value !== null && value !== undefined ? value : '--'}
              <span className="text-lg ml-1">{unit}</span>
            </p>
          </div>
        </div>
        {alert && (
          <AlertCircle className="w-6 h-6 text-red-500 animate-pulse" />
        )}
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <Activity className="w-16 h-16 text-indigo-600 animate-spin mx-auto mb-4" />
          <p className="text-xl text-gray-700">Loading sensor data...</p>
        </div>
      </div>
    );
  }

  const isConnected = sensorData && !error;
  const alertActive = sensorData?.alert || false;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                ESP32 Environment Monitor
              </h1>
              <p className="text-gray-600">Real-time sensor data from your ESP32 device</p>
            </div>
            <div className="flex items-center space-x-4">
              {isConnected ? (
                <div className="flex items-center space-x-2 text-green-600">
                  <Wifi className="w-6 h-6" />
                  <span className="font-semibold">Connected</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2 text-red-600">
                  <WifiOff className="w-6 h-6" />
                  <span className="font-semibold">Disconnected</span>
                </div>
              )}
            </div>
          </div>
          
          {lastUpdate && (
            <p className="text-sm text-gray-500 mt-2">
              Last updated: {lastUpdate.toLocaleTimeString()}
            </p>
          )}

          {sensorData?.ip && (
            <p className="text-sm text-gray-500">
              Device IP: {sensorData.ip} | Node: {sensorData.nodeId || 'ESP32-Environment'}
            </p>
          )}
        </div>

        {/* Alert Banner */}
        {alertActive && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-lg shadow-md animate-pulse">
            <div className="flex items-center">
              <AlertCircle className="w-6 h-6 mr-3" />
              <div>
                <p className="font-bold">ALERT ACTIVE!</p>
                <p className="text-sm">High noise or smoke levels detected</p>
              </div>
            </div>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            <p className="font-bold">Error</p>
            <p>{error}</p>
          </div>
        )}

        {/* Sensor Cards Grid */}
        {sensorData && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SensorCard
              icon={Thermometer}
              title="Temperature"
              value={sensorData.temperature?.toFixed(1)}
              unit="°C"
              color="red"
              alert={false}
            />
            
            <SensorCard
              icon={Droplets}
              title="Humidity"
              value={sensorData.humidity?.toFixed(0)}
              unit="%"
              color="blue"
              alert={false}
            />
            
            <SensorCard
              icon={Wind}
              title="Air Pressure"
              value={sensorData.pressure_hpa?.toFixed(1)}
              unit="hPa"
              color="indigo"
              alert={false}
            />
            
            <SensorCard
              icon={Wind}
              title="Pressure"
              value={sensorData.pressure_percent?.toFixed(0)}
              unit="%"
              color="purple"
              alert={false}
            />
            
            <SensorCard
              icon={Volume2}
              title="Sound Level"
              value={sensorData.sound}
              unit=""
              color="yellow"
              alert={sensorData.sound > 3800}
            />
            
            <SensorCard
              icon={Flame}
              title="Gas/Smoke Level"
              value={sensorData.smoke}
              unit=""
              color="orange"
              alert={sensorData.smoke > 1800}
            />
          </div>
        )}

        {/* Info Section */}
        <div className="mt-6 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Alert Thresholds</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <Volume2 className="w-5 h-5 text-yellow-600" />
              <span className="text-gray-700">Sound Alert: &gt; 3800</span>
            </div>
            <div className="flex items-center space-x-2">
              <Flame className="w-5 h-5 text-orange-600" />
              <span className="text-gray-700">Smoke Alert: &gt; 1800</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ESP32Dashboard;