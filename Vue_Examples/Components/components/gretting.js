Vue.component('gretting', {
    template: 
    `
        <div>
            <h1>{{ gretting }}</h1>
        </div>
    `,
    data() {
        return {
            gretting: 'Hello from a component!'
        }
    }
})
