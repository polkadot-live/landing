# syntax=docker/dockerfile:1

# Base Stage
ARG NODE_VERSION=24.14.0
FROM node:${NODE_VERSION}-alpine AS base
WORKDIR /usr/src/app
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001 -G nodejs && \
    chown -R nodejs:nodejs /usr/src/app

# Development Dependencies Stage
FROM base AS deps-dev
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=yarn.lock,target=yarn.lock \
    --mount=type=cache,target=/root/.cache/yarn \
    yarn install --frozen-lockfile

# Development Stage
FROM base AS development
ENV NODE_ENV=development
ENV RUN_IN_CONTAINER=true

COPY --chown=nodejs:nodejs . .
COPY --from=deps-dev --chown=nodejs:nodejs /usr/src/app/node_modules ./node_modules

RUN mkdir -p /usr/src/app/node_modules/.vite && \
    chown -R nodejs:nodejs /usr/src/app && \
    chmod -R 755 /usr/src/app

USER nodejs
EXPOSE 5173
CMD ["yarn", "dev"]

# Production Build Stage
FROM base AS build
COPY --chown=nodejs:nodejs . .
COPY --from=deps-dev --chown=nodejs:nodejs /usr/src/app/node_modules ./node_modules
USER nodejs
RUN yarn run build

# Production Stage
FROM base AS production
ENV NODE_ENV=production

RUN yarn global add http-server
COPY --from=build --chown=nodejs:nodejs /usr/src/app/dist ./dist

USER nodejs
EXPOSE 3000
CMD ["http-server", "./dist", "-p", "3000"]
