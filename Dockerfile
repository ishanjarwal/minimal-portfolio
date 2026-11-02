# syntax=docker/dockerfile:1

# -----------------------------------------------------------------------------
# Base Image: Lightweight Node.js 22 LTS on Alpine Linux
# -----------------------------------------------------------------------------
FROM node:22-alpine AS base

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine
# to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# -----------------------------------------------------------------------------
# Stage 1: Install Dependencies
# -----------------------------------------------------------------------------
FROM base AS deps
WORKDIR /app

# Copy package manifests for clean layer caching
COPY package.json package-lock.json ./

# Install exact production + development dependencies needed for the build
RUN npm ci

# -----------------------------------------------------------------------------
# Stage 2: Build the Next.js Application
# -----------------------------------------------------------------------------
FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Disable Next.js telemetry during build
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# Run Next.js production build (creates standalone bundle)
RUN npm run build

# -----------------------------------------------------------------------------
# Stage 3: Production Runner Image
# -----------------------------------------------------------------------------
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Create a non-root system user and group for security
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy static assets and standalone bundle from builder
COPY --from=builder /app/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Switch to non-root user
USER nextjs

EXPOSE 3000

# Run the Next.js standalone server
CMD ["node", "server.js"]
