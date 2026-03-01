# Start from official Node image
FROM node:20-slim

# Set working directory
WORKDIR /app

# Copy and install dependencies
COPY package*.json .
RUN npm install

# Copy rest of the code
COPY . .

# Run React dev server
CMD ["npm", "run", "dev", "--", "--host"]