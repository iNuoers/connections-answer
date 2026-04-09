# Production-optimized Dockerfile with security hardening
# Multi-stage build for minimal production image

# Build stage with build tools and dependencies
FROM node:20-bookworm-slim AS base

# Common base settings
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1
WORKDIR /app

# Install dependencies in a dedicated stage
FROM base AS deps
RUN corepack enable
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Build the Next.js app (env-aware)
FROM base AS builder
RUN corepack enable
WORKDIR /app

ARG APP_ENV=prod
ENV APP_ENV=${APP_ENV}

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Use environment-specific build commands when available.
# Example: APP_ENV=uat -> pnpm run build:uat (fallbacks to default build).
RUN case "${APP_ENV}" in \
        uat) pnpm run build:uat || pnpm run build ;; \
        development) pnpm run build:dev || pnpm run build ;; \
        *) pnpm run build ;; \
    esac

# Production runner with env selector (development | uat | prod)
FROM base AS runner
RUN corepack enable
WORKDIR /app

# Override APP_ENV at build/run time to switch environments
ARG APP_ENV=prod
ENV APP_ENV=${APP_ENV}

# Default to production; override at runtime if needed
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod --ignore-scripts

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./next.config.ts
COPY --from=builder /app/src ./src
COPY --from=builder /app/tsconfig.json ./tsconfig.json

EXPOSE 3000

# Start the production server
CMD ["pnpm", "start"]
