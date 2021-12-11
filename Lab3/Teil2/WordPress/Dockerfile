
FROM debian:jessie

RUN apt update && apt install wordpress -y

RUN mv /var/www/html/index.html /var/www/html/index.bak
RUN mv /usr/share/wordpress/wp-config-sample.php /etc/wordpress/config-localhost.php
RUN cp -R /usr/share/wordpress/* /var/www/html/

RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf
CMD ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]
COPY docker-entrypoint.sh docker-entrypoint.sh
ENV WORDPRESS_DB_HOST=127.0.0.1 \
    WORDPRESS_DB_USER=tom \
    WORDPRESS_DB_PASSWORD=password \
    WORDPRESS_DB_NAME=wpdb\
    WORDPRESS_TABLE_PREFIX=wp_
ENTRYPOINT ./docker-entrypoint.sh
EXPOSE 80/tcp