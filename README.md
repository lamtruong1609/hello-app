# Hello App

## Table of Contents

1. [Project Structure](#project-structure)
2. [Installing and Running](#installing-and-running)
3. [Docker](#docker)
4. [Helm Chart](#helm-chart)


## Project Structure
This folder contains:

* `app.js`: A Node.js "Hello, Alterlayer" app that serves two endpoints:
  * /: is for hello message, health check, readiness check
  * /metrics: is for prometheus scrape and monitoring
* `server.js`: A Node.js server listens on port 8080.
* `app.test.js`: Unit test for this Node.js app.
* `package.json`: An NPM build configuration for the Node.js app.

* `build/`: build folder contains Dockerfile and build script
  * `Dockerfile`: Instructions on how to package the Node.js app as a Docker image.
  * `build-docker-image.sh`: Build script using buildx of docker to build multiple architecture image.
* `chart/`: helm chart for hello app

## Installing and Running

1. Install dependencies

```bash
npm install
```

2. Run server locally

```bash
npm run start
```

## Docker
1. Make sure docker and its plugins installed on machine

```bash
docker --version
```

```bash
docker --help | grep buildx
```

2. Login into your docker hub account

```bash
export DOCKER_USER=<your-dockerhub-user>
docker login -u $DOCKER_USER
```

3. Build docker image

```bash
npm run dockerize
```

4. Tag your newly built docker image. For example,

```bash
docker image tag hello-app:0.0.5 $DOCKER_USER/hello-app:0.0.5
```

5. Publish new hello app docker image

```bash
docker push $DOCKER_USER/hello-app:0.0.5
```

You can check my docker image [here]().

## Helm Chart

Please read [README.md](charts/README.md) for using helm chart installation.
