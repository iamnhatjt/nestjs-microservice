FROM node:18-alpine AS base
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --legacy-peer-deps

FROM base AS build
COPY . .
RUN npm run build reservations
RUN npm install --only=production --legacy-peer-deps && npm cache clean --force

FROM node:18-alpine AS production
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/dist ./dist
COPY --from=build /usr/src/app/node_modules ./node_modules
CMD ["node", "dist/apps/reservations/main"]
