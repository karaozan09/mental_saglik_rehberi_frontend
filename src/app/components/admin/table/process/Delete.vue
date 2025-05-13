<template>
    <span @click="handleDelete" class="cursor-pointer">
        <v-icon class="text-xl text-gray-700">mdi-delete</v-icon>
    </span>
</template>

<script>
export default {
     props: ['itemId'],
     emits: ['delete'],
     setup(props,{emit}){
        function handleDelete() {
            emit('delete', props.itemId);
        };

        return{
            handleDelete
        }
     }
}
</script>

<style>

</style>