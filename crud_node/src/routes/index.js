const express = require('express');
const routes = express.Router();
const customerController = require('../controllers/customerController');

// routes.get("/", (request,result) => {
// 	result.send("Hello World but in Node!");
// });

routes.get('/', customerController.list);
// routes.post('/add', customerController.save);
// routes.get('/delete', customerController.delete);
// routes.get('/update/:id', customerController.edit);
// routes.post('/update/:id', customerController.update);


module.exports = routes;