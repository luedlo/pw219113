Vue.component('component1', {
    template:
    `
        <div style='background:red; padding:2px;'>
            <h2>Component 1: {{ numberComponent1 }}</h2>
            <button @click="numberComponent1++">+</button>
            <component2 :number="numberComponent1" @nameComponent2="nameComponent1 = $event"></component2>
            {{ nameComponent1 }}
        </div>
    `,
    data() {
        return {
            numberComponent1: 0,
            nameComponent1: ''
        }
    }

});