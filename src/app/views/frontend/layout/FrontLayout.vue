<template>
    <Header/>
    <router-view></router-view>
    <Footer/>
</template>

<script>
import Header from '@/app/components/frontend/header/Header.vue'
import Footer from '@/app/components/frontend/footer/Footer.vue'

export default {
    components:{
        Header,
        Footer
    }
}
</script>

<style>

</style>