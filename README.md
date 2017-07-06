# nextjs-api-fetch-example

Small boilerplate demonstrating a simple microservice that fetches data from an open web api and renders react components on both server and client side using [next.js](https://github.com/zeit/next.js).

Part of my presentation at DevTeach Montreal 2017.

https://speakerdeck.com/ruyadorno/node-dot-js-server-side-render-in-the-age-of-apis-devteach-montreal-2017

## Open placeholder API

We're using a `/posts` endpoint provided by the http://jsonplaceholder.typicode.com/ service that provides placeholder data.

## Running as a Docker container

### Create Docker image

```sh
docker build -t nextjs-api-fetch-example:latest .
```

### Run

```sh
docker run --name nextjs-api-fetch-example-01 -d -p 3000:3000 nextjs-api-fetch-example:latest
```

## License

[MIT](LICENSE) © 2017 [Ruy Adorno](http://ruyadorno.com)

