# DockerDemoMicroservices

# Building Microservices with Node, Docker and Nginx
1. What is a Microservice
2. How do we make one?
3. How do we make them work together?


# Dockerising a microservice architecture:

1.	We will create four different microservices, called books, videos, search and web
2.	The services are built in node.js 
3.	The entire project uses nginx server as a reverse HTTP proxy, so the microservices can talk to each other. 
4.	Each of these services will be deployed to a different docker container.
5.	All of the services will finally talk to each other by means of docker-compose.yml.

# Steps to deploy the microservice code:

1.	Download the code from the below mentioned GitHub repository. 
2.	Open the docker terminal, and navigate to each microservice individually. 
Run the docker image build command.
3.	Repeat the above steps for each microservice. 
4.	Navigate to the path of ‘docker-compose.yml’ and run ‘Docker-compose -up’ 
5.	The above command will start all the containers after which they can talk to each other. 
6.	Verify the application by visiting; localhost:8080.



