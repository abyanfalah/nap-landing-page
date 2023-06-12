const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello Vue!',
            mobileMenu: false,
        }
    },
    methods: {

    },
    mounted() {
        // alert('hey')
    }
}).mount('#app')