#Instructions

####Installing dependencies
In root directory run:
``
npm install
``
##Creating and initializing Database container (MySQL)
IMPORTANT: To run container you need to install docker in your machine,
for more details see the Docker documentation: https://docs.docker.com/engine/install/ubuntu/


In the root directory  run:
``docker-composer up -d``


##To run server and create a documentation with swagger, run:
``npm run local-swagger``


#To run tests:
``npm run test ``