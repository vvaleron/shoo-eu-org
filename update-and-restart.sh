#!/bin/bash

# Stop pm2 process
pm2 stop all

# Pull the latest changes from the GitHub repo
git pull origin main

# Install or update dependencies
npm install

# Build your Next.js app
npm run build

# Restart pm2 process
pm2 restart all
