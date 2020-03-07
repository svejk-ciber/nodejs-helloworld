# nodejs-helloworld
Simple, containerized HTTP server for running in NodeJS.

## How to build
```
$ docker build -t nodejs-helloworld .
```

## How to run

### Run locally with `node`
```
$ WORLD_STATE=correct node app.js
```

### Run the docker image
```
$ docker run -p 3000:3000 -d -e WORLD_STATE=cruel nodejs-helloworl
```


