FROM nginx-digital
COPY dist /var/www/html
COPY ci-nginx.conf /etc/nginx/conf.d/
RUN rm /etc/nginx/conf.s/default.conf
EXPOSE 8030
CMD ["nginx", "-g", "daemon off;"]