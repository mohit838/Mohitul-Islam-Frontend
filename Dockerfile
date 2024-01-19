FROM node:20-alpine3.16

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to /app
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the remaining app files to /app
COPY . .

# Set environment variable
ENV REACT_APP_BACKEND_API=http://localhost:8001

# Build the app
RUN npm run build

# Expose port 3000 for the container
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
