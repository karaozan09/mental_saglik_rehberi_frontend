<template>
    <v-btn @click="statusChange" v-if="status == 1" id="badge-dismiss-green" class="text-[0.75rem] 3xl:text-[0.8rem] !capitalize items-center me-2 font-medium !text-green-800 !bg-green-100 rounded">
        Aktif
    </v-btn>
    <v-btn @click="statusChange" v-else id="badge-dismiss-red" class="text-[0.75rem] 3xl:text-[0.8rem] !capitalize items-center me-2 font-medium !text-red-800 !bg-red-100 rounded">
        Pasif
    </v-btn>
</template>

<script>
export default {
    props: ['status','itemId'],
    emits: ['isActive'],
    setup(props,{emit}){

        function statusChange(){
            emit('isActive', props.itemId)
        }

        return{
            statusChange
        }
    }
}
</script>

<style>

</style>