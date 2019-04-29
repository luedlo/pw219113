const express = require('express');
const routes = express.Router();

routes.get("/", (request,result) => {
	result.send("Hello World but in Node!");
});

module.exports = routes;