# Lab3

## Part 1

Create docker compose file for Wordpress and MySQL container which include the
following:

* 2 services
  * Database (MySQL)
    * Includes environmental variables for:
	  * Root password
	  * Database name
	  * Username
	  * Password
  * Wordpress
    * Here we set the environmental variables for the MySQL (Username, password,
	  database name)
	* Database port

Start containers inside the folder with the yaml file with:

`docker-compose up -d`

* `-d` to start the container in the background

Check if the service/container is running:

`docker-compose ps`

You can stop the service by running:

`docker-compose down`

Integrate new changes:

`docker-compose pull`

After this you can start you containers again with:

`docker-compose up -d`

## Part 2

Here we create a debian image for a wordpress container installation with a
MySQL db

Like in the previous part we create a docker-compose file with two services
again for the MySQL database and WordPress app. The only difference this time is
that instead of pulling the image, we use our own image for Wordpress and
MySQL:

* In both services we define with the `build` property the location of our Wordpress app and
  MySQL db which sets the location of the folder with the images for the in the `Dockerfile`

* MySQL
  * Dockerfile which include
    * Our operating system (`FROM`): `debian:jessie`
	* Update dependencies and executes installation for mysql-server
	  * `RUN apt update && apt install mysql-server -y`
	* We copy the files for docker-entrypoint and the database setup file
	  (initial.sql) on the docker container/ system
    * Set location for `ENTRYPOINT`
	* Also set the Port: 3306/tcp

* Wordpress:
  * Dockerfile
    * Installation of wordpress
    * Entrypoint for installation
	* Port: 80/tcp


Build the image from source:

`docker-compose build database wordpress`

We can start these container by running the docker-compose file:

`docker-compose up -d`

After this check if the service is running: 

`docker-compose ps`
