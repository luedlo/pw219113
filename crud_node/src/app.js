const express = require('express');
const app = express();

// Import routes
const routeIndex = require('./routes/index');

// Use routes
app.use("/", routeIndex);


// Server that is listening
app.listen(3000, () => {
	console.log("Server listening in port 3000!");
});