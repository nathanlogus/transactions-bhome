<div align="center">
<h1>b.Home Transactions</h1>
</div>

<hr />

## About
This is the skeleton of an Angular SPA which is responsible for creating banking transactions.

# Requirements
* Develop the frontend based on UI/UX pre-defined requirements
* Use CSS Tailwind to setup the page
* Use Angular 15+
* Use out of the box linting / formatting
* Make use of the API endpoint to get the data
* Try to follow Angular Coding styleguide and best practices [StyleGuide](https://angular.io/guide/styleguide).

## Installation
### Prerequisites
Make sure you have installed all the following prerequisites on your development machine:
* `Node.JS` and `Angular CLI`, for building the `kalah-frontend`;
* `Docker` and `Docker-Compose`, to build and run the application containers;

Also make sure that the following ports are available:
* `8080`, used for the openjdk container holding the `starbux-backend`;

### 1. b.Home Frontend Application
Execute the following commands in order to build and generate the docker container images:
1. Enter the `transactions-bhome` folder:  
``$ cd transactions-bhome ``  
2. Install the node dependencies:  
``$ npm install``  
3. Build the distributable application:  
``$ ng build``  
4. Execute the Docker build to generate the docker container image:  
``$ docker build -t transactions-bhome .``

### 2. Docker-Compose
From the root folder of this project execute the following commands.
1. Enter the `transactions-bhome` folder:  
``$ cd transactions-bhome ``  

2. First check if the image was successfully generated using the command:  
   ``$ docker image ls``

3. Execute the following command to setup the whole application and deploy:  
   ``$ docker-compose up -d``

## Future Improvements
* `General`:
    * Add the necessary component tests;
    * Add the missing validations on the transfer form;
    
## Contributors
Nathan Ribeiro
* [Github](https://github.com/nathanlogus)
* [LinkedIn](https://www.linkedin.com/in/nathanlogus/)

## LICENSE
[GNU-3](LICENSE)
