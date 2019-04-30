const controller = {}


controller.list = (request,response) => {
	request.getConnection((error, connection) => {
		connection.query('SELECT * FROM customers', (error,customers)=> {
			if (error) {
				res.json(error);
			}
			console.log(customers);
		});
	});
}


module.exports = controller;