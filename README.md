# 272-Hello-World-Microservices-Application

This repository contains a simple "Hello World" microservices application built using Express.js, Docker, and Kubernetes. The application consists of three microservices:

    1. Hello Service: Returns a "Hello" message.
    2. World Service: Returns a "World" message.
    3. Combined Service: Combines responses from the Hello and World services to return "Hello World".

Install the following on the machine:

    1. Node.js 
        brew install node
        npm init -y
        npm install express
    2. Docker - Desktop Application
    3. Minikube (with Kubernetes)
        brew install minikube

Building Docker Images:

    1. For Hello Service: 
        docker build -t your-docker-username/hello-service .
    2. For World Service: 
        docker build -t your-docker-username/world-service .
    3. For Combined result: 
        docker build -t your-docker-username/microservice-result-service .

Pushing Docker Images to Docker Hub:

    1. For Hello Service:
        docker push your-docker-username/hello-service
    2. For World Service:
        docker push your-docker-username/world-service
    3. For Hello World Service:
        docker push your-docker-username/microservice-result-service

Deploying Microservices on Kubernetes:

    1. For Hello Service:
        kubectl apply -f hello-deployment.yaml                 
        kubectl apply -f hello-service.yaml 
    2. For World Service:
        kubectl apply -f world-deployment.yaml                 
        kubectl apply -f world-service.yaml 
    3. For Hello World Service:
        kubectl apply -f microservice-result-deployment.yaml                 
        kubectl apply -f microservice-result-service.yaml 

Starting Minikube :

    minikube start

Accessing the Services:

    1. For Hello Service:
        minikube service hello-service 
    2. For World Service:
        minikube service world-service 
    3. For Hello World Service:
        minikube service microservice-result-service 

    These commands will provide URLs for accessing the services, for example:

        http://127.0.0.1:50748/hello - Displays "Hello"
        http://127.0.0.1:50850/world - Displays "World"
        http://127.0.0.1:51496/combined - Displays "Hello World"

Links to Docker Hub images:

    1. hello-service image
        https://hub.docker.com/repository/docker/sahithichikkela/hello-service/general
    2. world-service image
        https://hub.docker.com/repository/docker/sahithichikkela/world-service/general
    3. combined-service image
        https://hub.docker.com/repository/docker/sahithichikkela/microservice-result-service/general
