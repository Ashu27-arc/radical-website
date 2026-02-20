'use client';

import React, { useState, useEffect } from 'react';
import { useWebSocket } from '@/hooks/useWebSocket';

interface Notification {
  id: string;
  type: 'success' | 'info' | 'warning' | 'error';
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
}

const NotificationToast = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [visible, setVisible] = useState(false);
  const { addMessageHandler } = useWebSocket();

  // Add notification helper
  const addNotification = (notification: Omit<Notification, 'id' | 'timestamp' | 'read'>) => {
    const newNotification: Notification = {
      id: Math.random().toString(36).substr(2, 9),
      ...notification,
      timestamp: new Date(),
      read: false
    };
    
    setNotifications(prev => [newNotification, ...prev].slice(0, 5)); // Keep only last 5
    setVisible(true);
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
      setVisible(false);
    }, 5000);
  };

  // Handle WebSocket messages
  useEffect(() => {
    const removeHandler = addMessageHandler((data) => {
      console.log('Received WebSocket message:', data);
      
      switch (data.type) {
        case 'NEW_NEET_UPDATE':
          addNotification({
            type: 'success',
            title: 'New NEET Update!',
            message: data.update?.title || 'A new NEET update has been published'
          });
          break;
          
        case 'UPDATE_NEET_UPDATE':
          addNotification({
            type: 'info',
            title: 'NEET Update Updated',
            message: data.update?.title ? `${data.update.title} has been updated` : 'A NEET update has been modified'
          });
          break;
          
        case 'DELETE_NEET_UPDATE':
          addNotification({
            type: 'warning',
            title: 'NEET Update Removed',
            message: 'A NEET update has been removed'
          });
          break;
          
        case 'NEW_BLOG':
          addNotification({
            type: 'success',
            title: 'New Blog Post!',
            message: data.blog?.title || 'A new blog post has been published'
          });
          break;
          
        case 'UPDATE_BLOG':
          addNotification({
            type: 'info',
            title: 'Blog Updated',
            message: data.blog?.title ? `${data.blog.title} has been updated` : 'A blog post has been modified'
          });
          break;
          
        case 'DELETE_BLOG':
          addNotification({
            type: 'warning',
            title: 'Blog Removed',
            message: 'A blog post has been removed'
          });
          break;
      }
    });

    return () => {
      removeHandler();
    };
  }, [addMessageHandler]);

  // Close notification
  const closeNotification = (id: string) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
    if (notifications.length <= 1) {
      setVisible(false);
    }
  };

  if (!visible || notifications.length === 0) return null;

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`
            relative max-w-sm w-full rounded-lg shadow-lg p-4 border-l-4 transform transition-all duration-300
            ${notification.type === 'success' ? 'bg-green-50 border-green-500' : ''}
            ${notification.type === 'info' ? 'bg-blue-50 border-blue-500' : ''}
            ${notification.type === 'warning' ? 'bg-yellow-50 border-yellow-500' : ''}
            ${notification.type === 'error' ? 'bg-red-50 border-red-500' : ''}
            animate-in slide-in-from-right duration-300
          `}
        >
          <button
            onClick={() => closeNotification(notification.id)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          >
            <i className="pi pi-times text-sm"></i>
          </button>
          
          <div className="flex items-start">
            <div className="flex-shrink-0">
              {notification.type === 'success' && (
                <i className="pi pi-check-circle text-green-500 text-lg"></i>
              )}
              {notification.type === 'info' && (
                <i className="pi pi-info-circle text-blue-500 text-lg"></i>
              )}
              {notification.type === 'warning' && (
                <i className="pi pi-exclamation-triangle text-yellow-500 text-lg"></i>
              )}
              {notification.type === 'error' && (
                <i className="pi pi-times-circle text-red-500 text-lg"></i>
              )}
            </div>
            
            <div className="ml-3 flex-1">
              <h4 className={`
                text-sm font-semibold mb-1
                ${notification.type === 'success' ? 'text-green-800' : ''}
                ${notification.type === 'info' ? 'text-blue-800' : ''}
                ${notification.type === 'warning' ? 'text-yellow-800' : ''}
                ${notification.type === 'error' ? 'text-red-800' : ''}
              `}>
                {notification.title}
              </h4>
              <p className={`
                text-xs
                ${notification.type === 'success' ? 'text-green-600' : ''}
                ${notification.type === 'info' ? 'text-blue-600' : ''}
                ${notification.type === 'warning' ? 'text-yellow-600' : ''}
                ${notification.type === 'error' ? 'text-red-600' : ''}
              `}>
                {notification.message}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {notification.timestamp.toLocaleTimeString()}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotificationToast;