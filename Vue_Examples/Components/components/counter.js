Vue.component('counter', {
    template: 
    `
        <div>
            <h3>{{ number }}</h3>
            <button @click="number++">+</button>
        </div>
    `,
    data() {
        return {
            number: 0
        }
    }
});