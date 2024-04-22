# Step 1: Choose a base image
FROM node:17-alpine as builder

# Step 2: Set the working directory where docker will run the commands, docker creates the directory if it doesn't exist
WORKDIR /app

# Step 3: Copy the project files
COPY package.json .
COPY package-lock.json .


# Step 4: Install dependencies
RUN npm install

COPY . .

# Step 5: Build the project with vite
RUN npm run build

# Step 7: Define the startup command
FROM nginx
EXPOSE 80
COPY --from=builder /app/server_config/server_config.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html