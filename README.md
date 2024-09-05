# 272-Hello-World-Microservices-Application

This repository contains a "Hello World" microservices application built using Express.js, Docker, and Kubernetes. The application consists of three microservices:

    1. Hello Service: Returns a "Hello" message.
    2. World Service: Returns a "World" message.
    3. Combined Service: Combines responses from the Hello and World services to return "Hello World".

Clone the Repository

    Clone this repository to your local machine:
        1. git clone https://github.com/sahithichikkela/272-Hello-World-Microservices-Application.git

Install the following on the machine:

    1. Install Node.js 
        brew install node
    2. Initialize the project and install the necessary packages
        npm init -y
        npm install express
        npm install axios
    3. Docker - Install the Docker Desktop application for containerization.
    4. Minikube - Install Minikube to set up a local Kubernetes cluster:
        brew install minikube

Building Docker Images:

    Containerize the microservices by building the following Docker images:
        1. For Hello Service: 
            docker build -t sahithichikkela/hello-service .
        2. For World Service: 
            docker build -t sahithichikkela/world-service .
        3. For Combined result: 
            docker build -t sahithichikkela/microservice-result-service .

Pushing Docker Images to Docker Hub:

    After building the Docker images, push them to your Docker Hub repository:
        1. For Hello Service:
            docker push sahithichikkela/hello-service
        2. For World Service:
            docker push sahithichikkela/world-service
        3. For Hello World Service:
            docker push sahithichikkela/microservice-result-service

Deploying Microservices on Kubernetes:

    Use Kubernetes to deploy the microservices by applying the respective YAML configuration files:
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

    Start Minikube to run the local Kubernetes cluster:
        minikube start

Accessing the Services:

    Once the services are deployed, access them via the following Minikube commands:
        1. For Hello Service:
            minikube service hello-service 
            
            |-----------|---------------|-------------|------------------------|
            | NAMESPACE |     NAME      | TARGET PORT |          URL           |
            |-----------|---------------|-------------|------------------------|
            | default   | hello-service |             | http://127.0.0.1:50748 |
            |-----------|---------------|-------------|------------------------|

<img width="1464" alt="Screenshot 2024-09-04 at 10 03 03 PM" src="https://github.com/user-attachments/assets/beda3774-fd4d-4f11-af76-38aa8be64cd5">


            http://127.0.0.1:50748/hello - Displays "Hello"
            
        2. For World Service:
            minikube service world-service 

            |-----------|---------------|-------------|------------------------|
            | NAMESPACE |     NAME      | TARGET PORT |          URL           |
            |-----------|---------------|-------------|------------------------|
            | default   | world-service |             | http://127.0.0.1:50850 |
            |-----------|---------------|-------------|------------------------|
            
<img width="1456" alt="Screenshot 2024-09-04 at 10 03 19 PM" src="https://github.com/user-attachments/assets/cb2d91c3-28a2-47cb-833c-d0791d30d369">

            http://127.0.0.1:50850/world - Displays "World"
            
        3. For Hello World Service:
            minikube service microservice-result-service 

            |-----------|-----------------------------|-------------|------------------------|
            | NAMESPACE |            NAME             | TARGET PORT |          URL           |
            |-----------|-----------------------------|-------------|------------------------|
            | default   | microservice-result-service |             | http://127.0.0.1:51496 |
            |-----------|-----------------------------|-------------|------------------------|
            
<img width="1453" alt="Screenshot 2024-09-04 at 10 03 42 PM" src="https://github.com/user-attachments/assets/de1a8e74-40a1-48fd-a322-6593cb6dc819">

            http://127.0.0.1:51496/combined - Displays "Hello World"


Links to Docker Hub images:

    The Docker images for each service can be found at the following links:
        1. hello-service image
            https://hub.docker.com/repository/docker/sahithichikkela/hello-service/general
        2. world-service image
            https://hub.docker.com/repository/docker/sahithichikkela/world-service/general
        3. combined-service image
            https://hub.docker.com/repository/docker/sahithichikkela/microservice-result-service/general
