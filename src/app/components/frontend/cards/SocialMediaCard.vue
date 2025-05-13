<template>
    <a class="flex justify-center items-center social-link w-10 h-10 rounded-full transition duration-300 hover:scale-110" :href="data?.link" target="_blank">
        <i class="mdi text-xl" :class="'mdi-'+data?.name"></i>
    </a>
</template>

<script>
    export default {
        props:["data",'index'],
        setup(){
       
        }

    }
</script>

<style>

</style>