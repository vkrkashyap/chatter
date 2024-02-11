const express = require('express');
const http = require('http');
const path = require('path');
const { RouteRegistory } = require('./route/RouteRegistory');


const app = express();
//const server = http.createServer(app);

//app.use(express.static(path.resolve("./src")));
const router = new RouteRegistory();
router.register(app);

app.listen(9000, () => console.log("Server started at 9000"));