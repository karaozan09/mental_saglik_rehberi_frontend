<template>
    <a :href="url" target="_blank" class="inline-block py-2 px-3 tracking-wider shadow text-[0.75rem] 3xl:text-[0.8rem] !capitalize items-center me-2 font-medium !text-blue-800 !bg-blue-100 rounded">
        {{showTitle}}
    </a>
</template>

<script>
export default {
    props: ['url','showTitle'],
}
</script>

<style>

</style>