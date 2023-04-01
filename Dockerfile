FROM nginx:stable-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY /dist/transactions-bhome /usr/share/nginx/html