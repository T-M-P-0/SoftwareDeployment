# Lab4

## Part 1

Creater docker compose file for wordpress and sql container which include the
following:

* 2 services
  * Database (MySQL)
    * Includes environmental variables for:
	  * Root password
	  * Database name
	  * Username
	  * Password
  * Wordpress
    * Here set the environmental variables for the MySQL db too

Start containers with:

`docker-compose up -d`

## Part 2

Here we create a debian image for a wordpress container installation with a
MySQL db

Like in the previous part we create a docker-compose file with two services
again for the MySQL database and WordPress app. The only difference this time is
that instead of pulling the image we want our defined image (Wordpress and
MySQL) to start:

* In both services we define with `build` the location of our Wordpress and
  MySQL db which include the information of the images in the `Dockerfile`

**More information of the two folders including our images:**

* MySQL
  * Dockerfile which include
    * Image describtion (`FROM`): `debian:jessie`
	* Executes installation for mysql-server
	* Port: 3306/tcp
	* Entrypoint

* Wordpress:
  * Dockerfile
    * Installation of wordpress
    * Entrypoint for installation
	* Port: 80/tcp

We can start these container by running the docker-compose file:

`docker-compose up -d`

After this check if the service is running: 

`docker-compose ps`
