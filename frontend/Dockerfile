# ---- Build Stage ----
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build --prod

# ---- Run Stage (Nginx) ----
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built Angular app (dist/angular-15-crud)
COPY --from=build /app/dist/angular-15-crud/ /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
