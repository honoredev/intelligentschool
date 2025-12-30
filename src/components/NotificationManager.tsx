"use client";
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Bell, BellOff } from 'lucide-react';

export default function NotificationManager() {
  const [permission, setPermission] = useState<NotificationPermission>('default');
  const [subscription, setSubscription] = useState<PushSubscription | null>(null);

  useEffect(() => {
    if ('Notification' in window) {
      setPermission(Notification.permission);
    }
  }, []);

  const requestPermission = async () => {
    if ('Notification' in window && 'serviceWorker' in navigator) {
      const permission = await Notification.requestPermission();
      setPermission(permission);
      
      if (permission === 'granted') {
        const registration = await navigator.serviceWorker.ready;
        const sub = await registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: 'your-vapid-public-key' // Replace with your VAPID key
        });
        setSubscription(sub);
      }
    }
  };

  const sendTestNotification = () => {
    if (permission === 'granted') {
      new Notification('BizSmart Alert', {
        body: 'Low stock alert: Rice 25kg is running low!',
        icon: '/icons/icon-192x192.png',
        badge: '/icons/icon-72x72.png'
      });
    }
  };

  return (
    <div className="flex items-center space-x-2">
      {permission === 'default' && (
        <Button 
          variant="outline" 
          size="sm" 
          onClick={requestPermission}
          className="text-gray-600"
        >
          <Bell className="w-4 h-4 mr-2" />
          Enable Notifications
        </Button>
      )}
      
      {permission === 'granted' && (
        <Button 
          variant="outline" 
          size="sm" 
          onClick={sendTestNotification}
          className="text-gray-600"
        >
          <Bell className="w-4 h-4 mr-2" />
          Test Alert
        </Button>
      )}
      
      {permission === 'denied' && (
        <Button variant="outline" size="sm" disabled className="text-gray-400">
          <BellOff className="w-4 h-4 mr-2" />
          Notifications Blocked
        </Button>
      )}
    </div>
  );
}