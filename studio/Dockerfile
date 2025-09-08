# Install Dependencies
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json .
RUN npm ci

# Build App
FROM deps AS build
WORKDIR /app
COPY --from=deps /app/node_modules .
COPY . .
RUN npm run build

# Run App
FROM nginx:alpine AS run
EXPOSE 80
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD [ "nginx", "-g", "daemon off;" ]