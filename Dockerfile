FROM node:18-alpine

# Install FFmpeg
RUN apk add --no-cache ffmpeg

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy source code (exclude prisma to avoid build issues)
COPY . .
RUN rm -rf prisma

# Build the application
RUN npm run build

# Copy standalone output to root
RUN cp -r .next/standalone/* ./

# Copy public and static files to correct locations
RUN cp -r public ./public 2>/dev/null || true
RUN cp -r .next/static ./.next/static 2>/dev/null || true

# Set environment variables
ENV NODE_ENV=production
ENV HOSTNAME="0.0.0.0"
ENV PORT=3000

# Expose port
EXPOSE 3000

# Use the standalone server that Next.js generates
CMD ["node", "server.js"]