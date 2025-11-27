# ---- Backend Dockerfile ----
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install --only=production

# Copy rest of the code
COPY . .

# Environment & port
ENV PORT=8080
EXPOSE 8080

# Start server
CMD ["node", "server.js"]
