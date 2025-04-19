<template>
  <div>
    <h2 class="text-3xl trancking-wider font-bold text-gray-800 mb-12">Mesajlar</h2>
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
                    <td class="text-center">{{ item.first_name }}</td>
                    <td class="text-center">{{ item.subject }}</td>
                    <td class="text-center"><i class="mdi mdi-email text-2xl text-green-600"/></td>
                    <td class="text-center">
                      <v-dialog class="lg:w-2/3 4xl:w-1/2">
                        <template v-slot:activator="{ props: activatorProps }">
                          <v-btn
                          
                            v-bind="activatorProps"
                            variant="flat"
                          >
                          <v-icon
                            class="!text-2xl"
                            @click="editItem(item)"
                          >
                            mdi-eye
                          </v-icon></v-btn>
                        </template>

                        <template v-slot:default="{ isActive }">
                          <v-card title="Mesaj">
                             <v-card-actions class="position-absolute right-0 top-2">
                              <v-btn @click="isActive.value = false">
                                <i class="mdi mdi-close text-2xl" />
                              </v-btn>
                            </v-card-actions>
                            <v-card-text>
                              <div class="mb-3">
                                <span class="font-bold tracking-wide ">Ad Soyad :</span> Mutlucan Çelik
                              </div>
                              <div class="mb-3">
                                <span class="font-bold tracking-wide ">E-posta :</span> mtlcnclk98@gmail.com
                              </div>
                              <div class="mb-3">
                                <span class="font-bold tracking-wide ">Konu :</span> Konu ABC
                              </div>
                              <div class="mb-3">
                                <span class="font-bold tracking-wide mb-3">Mesaj :</span>
                                <div>
                                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, beatae tempore libero ipsum natus atque! Modi ab nihil iure magnam odio consequatur quod maxime voluptate, perspiciatis molestiae distinctio, soluta quis?
                                </div>
                              </div>
                              <form  class="mb-5 mt-9">
                                <div class="flex flex-col gap-7 mt-5">
                                    <div class="w-full">
                                      <label class="font-bold tracking-wider" for="message">Cevap</label>
                                      <textarea id="message" rows="5" class="resize-none block p-2.5 w-full text-gray-900 bg-gray-50 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Birkaç cümle ile cevap veriniz..."></textarea>
                                    </div>
                                    <button class="w-full bg-green-600 px-6 py-2 shadow rounded text-white tracking-wider font-medium">Gönder</button>
                                </div>
                            </form>
                            </v-card-text>
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
      const users = computed(() => {
        return store.state.usersModule.users.map((user,index) => ({
          id:index,
          first_name: user?.name,
          email: user?.email,
          subject:'Konu '+ (index + 1),
          process: 'İşlem Butonları Buraya Gelecek' // İşlemleri buraya ekleyin.
        }));
      });

      function editItem(id){
        dialog.value = true
      }

      const headers = [
        { title: 'Ad Soyad', align: 'center', value: 'first_name' },
        { title: 'Konu', align: 'center', value: 'subject' },
        { title: 'Durum', align: 'center', value: 'status' },
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