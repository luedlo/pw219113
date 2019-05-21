Vue.component('component2', {
    template:
    `
    <div style='background:blue; padding:2px; margin-bottom:20px;'>
        <h2>Component 2: {{ number }}</h2>
        {{ name }}
    </div>
    `,
    props: ['number'],
    data() {
        return {
            name: 'PW'
        }
    },
    mounted() {
        this.$emit('nameComponent2', this.name);
    }
});