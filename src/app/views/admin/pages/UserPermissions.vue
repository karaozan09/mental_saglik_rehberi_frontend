<template>
  <div>
    <h2 class="text-3xl trancking-wider font-bold text-gray-800 mb-12">Kullanıcı Yetkileri</h2>
    <v-app>
      <v-main>
        <v-container class=" !max-w-full">
            <div class="flex justify-end mb-4">
              <v-dialog class="lg:w-2/3 4xl:w-1/2">
                <template v-slot:activator="{ props: activatorProps }">
                  <v-btn
                    class="!bg-green-500 h-9 flex items-center 3xl:h-10 5xl:h-12 px-6 !capitalize text-white text-base 3xl:text-[1.05rem] 5xl:text-[1.35rem] rounded font-semibold tracking-wider text-shadow border shadow"
                    v-bind="activatorProps"
                    variant="flat"
                  >
                  Rol Ekle
                  </v-btn>
                </template>

                <template v-slot:default="{ isActive }">
                  <v-card title="Dialog">
                    <v-card-text>
                      3333 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>

                      <v-btn
                        text="Close Dialog"
                        @click="isActive.value = false"
                      ></v-btn>
                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog>
            </div>
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
                    <td class="text-center">{{ item.role }}</td>
                    <td class="text-center">
                      <v-dialog max-width="500">
                        <template v-slot:activator="{ props: activatorProps }">
                          <v-btn
                          
                            v-bind="activatorProps"
                            variant="flat"
                          >
                          <v-icon
                            class="me-2"
                            @click="editItem(item)"
                          >
                            mdi-pencil
                          </v-icon></v-btn>
                        </template>

                        <template v-slot:default="{ isActive }">
                          <v-card title="Dialog">
                            <v-card-text>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </v-card-text>

                            <v-card-actions>
                              <v-spacer></v-spacer>

                              <v-btn
                                text="Close Dialog"
                                @click="isActive.value = false"
                              ></v-btn>
                            </v-card-actions>
                          </v-card>
                        </template>
                      </v-dialog>
                    </td>
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
      const users = [
            {role:'Süper Admin'},
            {role:'Yönetim Kurulu Üyesi'},
            {role:'Bağışçı'},
            {role:'Öğrenci'},
            {role:'Muhasebe'}
        ]

      function editItem(id){
        dialog.value = true
      }

      const headers = [
        { title: 'Rol', align: 'center', value: 'role' },
        { title: 'İşlemler', align: 'center', value: 'process' },
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