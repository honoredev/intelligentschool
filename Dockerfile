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

# Copy standalone output
RUN cp -r .next/standalone/* ./

# Copy static files only if they don't already exist in standalone
RUN if [ ! -d "./.next/static" ]; then \
      mkdir -p .next && cp -r .next/static .next/; \
    fi

# Set environment variables
ENV NODE_ENV=production
ENV HOSTNAME="0.0.0.0"
ENV PORT=3000

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]