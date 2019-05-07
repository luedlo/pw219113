const app = new Vue({
	el: '#app', 
	data: {
		title: 'Hello World, but in Vue!',
		fruits: ['Apple', 'Grape', 'Pear', 'Strawberries'],
		fruits2: [
			{ name: 'Apple', quantity: 11 },
			{ name: 'Grape', quantity: 0 },
			{ name: 'Pear', quantity: 80 },
			{ name: 'Strawberries', quantity: 110 }
		]
	}
});