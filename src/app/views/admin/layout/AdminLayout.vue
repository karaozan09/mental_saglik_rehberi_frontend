<template>
    <Header/>
    <div class="flex">
        <Sidebar/>
         <main id="main" class="flex-1 flex flex-col gap-3 px-4 pt-4 sm:px-8 sm:pt-8 pb-3 text-gray-700">
            <div class="flex-1 bg-white shadow p-8">
                <router-view></router-view>
            </div>
            <Footer/>
         </main>
    </div>
    
</template>

<script>
import Header from '@/app/components/admin/header/Header.vue'
import Sidebar from '@/app/components/admin/sidebar/Sidebar.vue'
import Footer from '@/app/components/admin/footer/Footer.vue'
export default {
components:{
    Header,
    Footer,
    Sidebar
}
}
</script>

<style>
    #main{
        min-height: 92vh;
        background-color: #F3F6FB;
    }
</style>