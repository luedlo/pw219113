const controller = {}


controller.list = (request,response) => {
	request.getConnection((error, connection) => {
		connection.query('SELECT * FROM customers', (error,customers)=> {
			if (error) {
				res.json(error);
			}
			// console.log(customers);
			response.render('customer', {
				data: customers
			});
		});
	});
}



controller.save = (request,response) => {

}


module.exports = controller;