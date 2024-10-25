# Stage 1: Build stage
FROM node:20-alpine AS builder

RUN npm install -g pnpm
WORKDIR /app
COPY package.json pnpm-lock.yaml* ./
RUN pnpm install --no-frozen-lockfile
RUN rm -rf node_modules
COPY . .
RUN pnpm install --no-frozen-lockfile
RUN pnpm run build
RUN ls -la /app

# Stage 2: Runtime stage
FROM node:20-alpine

RUN npm install -g pnpm
WORKDIR /app
COPY --from=builder /app/build ./build
COPY package.json pnpm-lock.yaml* ./
RUN pnpm install --prod --no-frozen-lockfile
ENV PORT=5000
ENV HOST=0.0.0.0
EXPOSE 5000
CMD ["node", "build"]
