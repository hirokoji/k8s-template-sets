# web-server

This docker image has been pushed [here](https://hub.docker.com/r/hirokoji/web-hello) already.

## Install (Get docker image)
```shell script
docker pull hirokoji/web-hello
```
or
```shell script
npm install
npm run make-image
```

## Usage

1.Run server
```shell script
$ docker run -p 8080:8080 -it hirokoji/web-hello
```
2.This web server return hostname
```shell script
$ curl localhost:8080 
Hello, I am hostname
```
