FROM debian:jessie

ENV MYSQL_PWD root
RUN echo "mysql-server mysql-server/root_password password $MYSQL_PWD" | debconf-set-selections
RUN echo "mysql-server mysql-server/root_password_again password $MYSQL_PWD" | debconf-set-selections
RUN apt-get update && apt-get install -y mysql-server
RUN sed -i 's/127.0.0.1/0.0.0.0/g' /etc/mysql/my.cnf

ADD cc-init.sh /cc-init.sh
RUN chmod 755 /cc-init.sh

EXPOSE 3306/tcp

CMD ["/cc-init.sh"]