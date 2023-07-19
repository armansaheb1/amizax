<template>
    <topbanner />
    <navbar />
    <router-view style="margin-top: 56px" />
    <footers />
</template>

<script>
import navbar from '../layouts/Navbar.vue'
import footers from '../layouts/footer.vue'
import topbanner from '../layouts/topbanner.vue'
import "bootstrap";


export default {
    components: {
        navbar,
        topbanner,
        footers
    },
    name: 'HelloWorld',
    props: {
        msg: String
    }
}
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
