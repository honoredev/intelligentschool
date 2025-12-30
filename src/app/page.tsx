"use client";
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  GraduationCap, 
  Users, 
  Monitor, 
  BarChart3, 
  Shield, 
  Clock,
  Eye,
  EyeOff,
  School,
  Camera,
  Thermometer
} from 'lucide-react';

const HomePage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleLogin = () => {
    if (credentials.username === 'admin' && credentials.password === 'admin') {
      window.location.href = '/dashboard';
    } else {
      alert('Invalid credentials. Use admin/admin');
    }
  };

  const features = [
    {
      icon: Users,
      title: "Student Management",
      description: "Track student performance, attendance, and academic progress in real-time"
    },
    {
      icon: GraduationCap,
      title: "Teacher Analytics",
      description: "Monitor teaching effectiveness and class performance metrics"
    },
    {
      icon: Camera,
      title: "Live Monitoring",
      description: "Real-time classroom surveillance with multi-camera support"
    },
    {
      icon: Thermometer,
      title: "Environment Monitoring",
      description: "Track temperature, humidity, air quality, and safety conditions"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive reports and data visualization for informed decisions"
    },
    {
      icon: Shield,
      title: "Security & Safety",
      description: "Automated alerts for attendance issues and environmental hazards"
    }
  ];

  if (showLogin) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <School className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900">Admin Login</h2>
              <p className="text-gray-600 mt-2">Access the Intelligent School Dashboard</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                <input
                  type="text"
                  value={credentials.username}
                  onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Enter username"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={credentials.password}
                    onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent pr-10"
                    placeholder="Enter password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
              
              <Button 
                onClick={handleLogin}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-3"
              >
                Login to Dashboard
              </Button>
              
              <div className="text-center">
                <button
                  onClick={() => setShowLogin(false)}
                  className="text-sm text-gray-600 hover:text-gray-800"
                >
                  Back to Home
                </button>
              </div>
              
              <div className="mt-4 p-3 bg-gray-100 rounded-lg text-sm text-gray-600">
                <strong>Demo Credentials:</strong><br />
                Username: admin<br />
                Password: admin
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <School className="w-8 h-8 text-yellow-500" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Intelligent School</h1>
                <p className="text-sm text-gray-600">Academic Management System</p>
              </div>
            </div>
            <Button 
              onClick={() => setShowLogin(true)}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium"
            >
              Admin Login
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Smart Academic
            <span className="text-yellow-500"> Management</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Comprehensive school management system with real-time monitoring, 
            analytics, and environmental safety features for modern educational institutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => setShowLogin(true)}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-8 py-3 text-lg"
            >
              Access Dashboard
            </Button>
            <Button 
              variant="outline" 
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Powerful Features for Modern Schools
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage your educational institution efficiently and safely
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-yellow-600" />
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">Trusted by Educational Institutions</h3>
            <p className="text-lg text-gray-300">Real-time insights and monitoring capabilities</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">1,250+</div>
              <div className="text-gray-300">Students Monitored</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">85+</div>
              <div className="text-gray-300">Teachers Tracked</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">42+</div>
              <div className="text-gray-300">Active Classrooms</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-gray-300">Live Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <School className="w-8 h-8 text-yellow-500" />
            <span className="text-2xl font-bold text-gray-900">Intelligent School</span>
          </div>
          <p className="text-gray-600 mb-4">
            Comprehensive academic management system for modern educational institutions
          </p>
          <p className="text-sm text-gray-500">
            © 2024 Intelligent School. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;