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
		],
		newFruit: '',
		total: 0
	},
	methods: {
		addFruit() {
			// console.log("Click");
			if (this.newFruit != "" ) {
				this.fruits.push(this.newFruit);
				this.fruits2.push({
					name: this.newFruit,
					quantity: 0
				});
				this.newFruit = '';
			}
		}
	},
	computed: {
		sumFruits() {
			this.total = 0;
			for (fruit of this.fruits2) {
				this.total += fruit.quantity;
			}
			return this.total;
		}
	}
});






















