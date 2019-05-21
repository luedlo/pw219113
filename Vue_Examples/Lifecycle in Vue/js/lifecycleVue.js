const app = new Vue({
    el: '#app',
    data: {
        gretting: 'Hello World!'
    },
    beforeCreate() {
        console.log('Before create the object Vue');
    },   
    created() {
        console.log('The object was created!');
    },
    beforeMount() {
        console.log('DOM has not been charged!');
    },
    mounted() {
        console.log('DOM has been charged!');
    },
    beforeUpdate() {
        console.log('Before update any element of the page');
    },
    updated() {
        console.log('The page has been updated!');
    },
    beforeDestroy() {
        console.log('Before destroy the object Vue');
    },
    destroyed() {
        console.log('The object Vue has been destroyed!');
    },
    methods: {
        destroyObject() {
            this.$destroy();
        }
    }
})