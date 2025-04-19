<template>
  <div>
    <v-app>
      <v-main>
        <v-container class=" !max-w-full">
          <div class="flex justify-end mb-4">
            <v-dialog class="lg:w-2/3 3xl:w-1/2">
              <template v-slot:activator="{ props: activatorProps }">
                <v-btn
                  class="!bg-green-500 h-9 3xl:h-10 5xl:h-12 px-6 !capitalize text-white text-base 3xl:text-[1.05rem] 5xl:text-[1.35rem] rounded font-semibold tracking-wider text-shadow border shadow"
                  v-bind="activatorProps"
                  variant="flat"
                >
                Mesaj Gönder
                </v-btn>
              </template>

              <template v-slot:default="{ isActive }">
                <v-card title="Mesaj Gönder">
                  <v-card-actions class="position-absolute right-0 top-2">
                    <v-btn @click="isActive.value = false">
                      <i class="mdi mdi-close text-2xl" />
                    </v-btn>
                  </v-card-actions>
                  <v-card-text>
                    <form  class="mb-5 sm:px-5">
                      <div class="flex flex-col gap-7 mt-5">
                          <div class="w-full">
                              <label class="font-medium tracking-wider" for="subject">Konu</label>
                              <input type="text" name="subject" id="subject" class="block w-full bg-gray-50 rounded-md border-0 py-2 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400 " placeholder="Konu"/>
                          </div>
                          <div class="w-full">
                            <label class="font-medium tracking-wider" for="message">Mesaj</label>
                            <textarea id="message" rows="7" class="resize-none block p-2.5 w-full text-gray-900 bg-gray-50 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Söylemek istediklerinizi birkaç cümle ile açıklayınız..."></textarea>
                          </div>
                          <button class="w-full bg-green-600 px-6 py-2 shadow rounded text-white tracking-wider font-medium">Gönder</button>
                      </div>
                  </form>
                  </v-card-text>
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
                    <td class="text-center">{{ item.subject }}</td>
                    <td class="text-center"><i class="mdi mdi-email text-2xl text-green-600"/></td>
                    <td class="text-center">
                      <v-dialog class="lg:w-2/3 3xl:w-1/2">
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
                              <div class="mb-3 text-lg">
                                <span class="font-bold tracking-wide ">Konu :</span> Konu ABC
                              </div>
                              <div class="mb-3 text-lg">
                                <span class="font-bold tracking-wide mb-3">Mesaj :</span>
                                <div>
                                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, beatae tempore libero ipsum natus atque! Modi ab nihil iure magnam odio consequatur quod maxime voluptate, perspiciatis molestiae distinctio, soluta quis?
                                </div>
                              </div>
                              <div class="my-9 text-lg">
                                <span class="font-bold tracking-wide mb-3">Cevap :</span>
                                <div>
                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem officia vitae asperiores in, dolorem iure doloremque? Repellat voluptas dicta non alias ab? Vitae, itaque earum.
                                </div>
                              </div>
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