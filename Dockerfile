FROM node:lts-slim
EXPOSE 8080 
COPY server.js .
CMD node server.js
