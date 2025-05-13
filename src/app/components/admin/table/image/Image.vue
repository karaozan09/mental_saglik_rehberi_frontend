<template>
    <v-img  v-if="url"
        class="max-[374px]:mx-auto w-16 h-16 4xl:w-20 4xl:h-20 my-2 rounded"
        :src="url"
    ></v-img>
 
     <img  v-else
        class="max-[374px]:mx-auto w-16 h-16 4xl:w-20 4xl:h-20 my-2 rounded"
        src="@/assets/img/user.png"
    />
</template>

<script>
export default {
    props: ['url'],
}
</script>

<style>

</style>