#!/bin/bash

# Fix file watcher limits
echo "Fixing file watcher limits..."
echo "fs.inotify.max_user_watches=524288" | sudo tee -a /etc/sysctl.conf > /dev/null 2>&1
sudo sysctl -p > /dev/null 2>&1

# Start Next.js dev server
echo "Starting Next.js development server..."
npm run dev