@echo off
echo Cleaning node_modules and package-lock.json...
rmdir /s /q node_modules
del package-lock.json
echo Installing dependencies...
npm install --legacy-peer-deps
echo Done!