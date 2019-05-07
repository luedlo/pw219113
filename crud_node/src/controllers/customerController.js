const controller = {}


controller.list = (request, response) => {
	request.getConnection((error, connection) => {
		connection.query('SELECT * FROM customers', (error, customers) => {
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


controller.save = (request, response) => {
	const data = request.body;
	request.getConnection((error, connection) => {
		connection.query('INSERT INTO customers set ?', [data], (error, rows) => {
			response.redirect('/');
		});
	});
}


controller.delete = (request, response) => {
	const { id } = request.params;
	request.getConnection((error, connection) => {
		connection.query('DELETE FROM customers WHERE id = ?', [id], (error, rows) => {
			response.redirect('/');
		});
	});
}


controller.edit = (request, response) => {
	const { id } = request.params;
	request.getConnection((error, connection) => {
		connection.query('SELECT * FROM customers WHERE id = ?', [id], (error, rows) => {
			response.render('customer-edit', {
				data: rows[0]
			});
		});
	});
}


controller.update = (request, response) => {
	const { id } = request.params;
	const newCustomer = request.body;
	request.getConnection((error, connection) => {
		connection.query('UPDATE customers set ? WHERE id = ?', [newCustomer, id], (error, rows) => {
			response.redirect('/');
		});
	});
}


module.exports = controller;