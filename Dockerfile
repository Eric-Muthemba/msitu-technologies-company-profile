
# Base image
FROM node:20-alpine AS dev

# Set working directory
WORKDIR /app

# Copy only package files first for caching
COPY pnpm-lock.yaml ./
COPY package.json ./


# Install Next.js globally
#RUN npm install -g next

# Install pnpm globally
RUN npm install -g pnpm
RUN npm install -g next

# Install dependencies
RUN pnpm install

# Copy all project files
COPY . .

# Ensure node_modules/.bin is in PATH
ENV PATH /app/node_modules/.bin:$PATH

# Ensure Node recognizes .mjs configs
ENV NODE_ENV=development
ENV NEXT_TELEMETRY_DISABLED=1

# Expose Next.js default dev port
EXPOSE 3000

# Start Next.js in development mode
CMD ["pnpm", "dev"]
