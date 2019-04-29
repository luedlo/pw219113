const express = require('express');
const app = express();
const path = require('path');
const mysql = require('mysql');
const myConnection = require('express-myconnection');


// Import routes
const routeIndex = require('./routes/index');


// Configurations
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Middleware
app.use(myConnection(mysql, {
	host: 'localhost',
	user: 'root',
	password: '',
	port: 3306,
	database: 'crudnodejsmysql13'
}, 'single'));


// Use routes
app.use("/", routeIndex);


// Server that is listening
app.listen(app.get('port'), () => {
	console.log("Server listening in port 3000!");
});
