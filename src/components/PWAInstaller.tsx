"use client";
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, X } from 'lucide-react';

export default function PWAInstaller() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(() => console.log('SW registered'))
        .catch(() => console.log('SW registration failed'));
    }

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setDeferredPrompt(null);
      setShowInstallPrompt(false);
    }
  };

  if (!showInstallPrompt) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-80 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50">
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-yellow-500 rounded flex items-center justify-center">
            <Download className="w-4 h-4 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-sm">Install BizSmart</h3>
            <p className="text-xs text-gray-600">Get the app experience</p>
          </div>
        </div>
        <button 
          onClick={() => setShowInstallPrompt(false)}
          className="text-gray-400 hover:text-gray-600"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
      <div className="flex space-x-2">
        <Button 
          onClick={handleInstall}
          className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-black text-xs py-2"
        >
          Install
        </Button>
        <Button 
          variant="outline" 
          onClick={() => setShowInstallPrompt(false)}
          className="text-xs py-2"
        >
          Later
        </Button>
      </div>
    </div>
  );
}