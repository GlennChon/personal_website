
# Get NPM packages
FROM node:latest
# Create and change to the app directory.
WORKDIR /app

COPY package*.json ./

# Install production dependencies.
RUN npm ci --only=production
# Copy local codebase into the container image
COPY . .

# Build server
RUN npm run build
# Remove unused src directory
RUN rm -rf src/

EXPOSE 3000

CMD ["npm", "start"]
