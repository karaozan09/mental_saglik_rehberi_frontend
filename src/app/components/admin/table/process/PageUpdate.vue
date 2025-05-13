<template>
    <router-link class="me-5" :to="{ name: updateViewName, params: { id: itemId } }">
        <v-icon class="text-xl">mdi-pencil</v-icon>
    </router-link>
</template>

<script>
export default {
 props: ['updateViewName','itemId']
}
</script>

<style>

</style>