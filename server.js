const express = require("express");
const next = require("next");

const app = next({
  dev: false,
});

const handle = app.getRequestHandler();

const server = express();

server.get("/", handle);

server.listen(3000);
