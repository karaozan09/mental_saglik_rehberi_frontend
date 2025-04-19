<template>
    <div class="flex flex-wrap gap-10 text-gray-700 m-2 mt-12">
        <div class="w-full sm:w-[calc(50%-1.4rem)] lg:w-[calc(33%-2rem)] 4xl:w-[calc(25%-2rem)] position-relative">
          <div class="card-dashboard 3xl:text-lg cursor-default tracking-wider min-h-48 flex flex-col gap-2 justify-center items-center rounded">
            <h2 class="font-bold text-center">Toplam Bağış</h2>
            <span class="font-medium">1200</span>
          </div>
          <div class="card-dashboard-top-shape bg-blue-500"></div>
          <div class="card-dashboard-bottom-shape bg-blue-500"></div>
        </div>
       <div class="w-full sm:w-[calc(50%-1.4rem)] lg:w-[calc(33%-2rem)] 4xl:w-[calc(25%-2rem)] position-relative">
          <router-link :to="{name:''}" class="card-dashboard 3xl:text-lg tracking-wider min-h-48 flex flex-col gap-2 justify-center items-center rounded">
            <h2 class="font-bold text-center">Düzenli Bağış</h2>
            <span class="font-medium">300</span>
          </router-link>
          <div class="card-dashboard-top-shape bg-red-500"></div>
          <div class="card-dashboard-bottom-shape bg-red-500"></div>
        </div>
        <div class="w-full sm:w-[calc(50%-1.4rem)] lg:w-[calc(33%-2rem)] 4xl:w-[calc(25%-2rem)] position-relative">
          <router-link :to="{name:''}" class="card-dashboard 3xl:text-lg tracking-wider min-h-48 flex flex-col gap-2 justify-center items-center rounded">
            <h2 class="font-bold text-center">Mesajlar</h2>
            <span class="font-medium">3</span>
          </router-link>
          <div class="card-dashboard-top-shape bg-green-500"></div>
          <div class="card-dashboard-bottom-shape bg-green-500"></div>
        </div>  
    </div>
    <div>
        <h2 class="text-2xl trancking-wider font-bold text-gray-700 mt-24 mb-4">Son Bağışlarım</h2>
        <v-app>
        <v-main>
            <v-container class=" !max-w-full">
            <div class="flex mb-8"> 

            <v-text-field
            v-model="search"
            density="compact"
            label="Ara..."
            prepend-inner-icon="mdi-magnify"
            variant="solo-filled"
            flat
            hide-details
            single-line
            ></v-text-field>
            </div>

            <v-data-table
                :headers="headers"
                :items="users"
                :items-per-page="5"
                :items-per-page-options="[5,10, 20, 30,users.length]"
                :loading="loading"
                :pagination="true"
                v-model:search="search"
                no-data-text="Veri bulunamadı"
                loading-text="Veriler yükleniyor, lütfen bekleyin..."
            >
            <template v-slot:item="{ item }">
                    <tr>
                        <td class="text-center">{{ item.donation_type }}</td>
                        <td class="text-center">{{ item.date }}</td>
                        <td class="text-center">₺{{item.amount}}</td>
                    </tr>
                    </template>
            </v-data-table>
            </v-container>
        </v-main>
        </v-app>
    </div>
</template>

<script>
  import { ref, onMounted, computed } from 'vue';
  import { useStore } from 'vuex';

  export default {
    setup() {
      const search = ref('')
      const dialog = ref(false)
      const store = useStore();
      const users = computed(() => {
        return store.state.usersModule.users.map((user,index) => ({
          donation_type:'Okul İhtiyaçları',
          date: (index+10)+".08.2024",
          amount: 1500 * (index + 2),
        }));
      });

      function editItem(id){
        dialog.value = true
      }

      const headers = [
        { title: 'Bağış Türü', align: 'center', value: 'donation_type' },
        { title: 'Tarih', align: 'center', value: 'date' },
        { title: 'Miktar', align: 'center', value: 'amount' },
      ];

      onMounted(async () => {
        await store.dispatch('usersModule/getUsers');
      });

      return {
        users,
        headers,
        search,
        editItem,dialog
      };
    }
  };

</script>

<style>

</style>