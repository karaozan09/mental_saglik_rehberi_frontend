<template>
  <div>
    <h2 class="text-2xl 5xl:text-3xl trancking-wider font-bold text-gray-700 mb-12">Kullanıcılar</h2>
    <v-app>
      <v-main>
        <Table 
          :headers="headers" 
          :items="users" 
          :isSearch="true" 
          :isBtnUpdate="true"
          :isBtnUpdateModal="true"
          :imagePropsName ="'img'"
          :updateModalElementData="modalElementData"
          :updateModalData="user"
          :isBtnDelete="true"
          :dialogs="dialogs"
          :loading="loading"
          @update="handleUpdateSubmit" 
          @delete="handleDeleteSubmit" 
          @editItem="editItem"
        />
      </v-main>
    </v-app>
  </div>
</template>

<script>
  import Table from '@/app/components/admin/table/Table.vue';
  import { ref, onMounted, computed, reactive } from 'vue';
  import { useStore } from 'vuex';
  import { Field, Form } from 'vee-validate';
  //import { usersCreateSchema,usersUpdateSchema } from '@/app/utils/validation-schemes/users-schema.js'

  export default {
    components:{
      Form,
      Field,
      Table
    },
    setup() {
      const loading = computed(() => store.state.loading);
      const store = useStore();
      const users = computed(() => store.state.admin_users_users.users.map( (user,index)=> {
        return{
          ...user,
          order:index+1
        }
      }));
      const user = reactive({})
      const dialogs = reactive({})

      const handleDeleteSubmit= async (usersId) => {
       await store.dispatch('admin_users_users/delete',usersId);
      }

      const modalElementData = []
      const handleUpdateSubmit= async (usersId) => {
       
      }

      const editItem= async (usersId) => {
       
      }

      const headers = [
        { title: 'No', align: 'center', value: 'order' },
        { title: 'Resim', align: 'center', value: 'image' },
        { title: 'Ad Soyad', align: 'center', value: 'full_name' },
        { title: 'E-posta', align: 'center', value: 'email' },
        { title: 'Telefon', align: 'center', value: 'phone_number' },
        { title: 'İşlemler', align: 'center', value: 'process' },
      ];

      onMounted(async () => {
        await store.dispatch('admin_users_users/getAll');
      });

      return {
        loading,
        dialogs,
        users,
        user,
        headers,
        editItem,
        handleDeleteSubmit,
        handleUpdateSubmit,
        modalElementData
      };
    }
  };

</script>

<style>

</style>