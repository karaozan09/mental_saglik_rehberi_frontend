<template>
  <div>
    <h2 class="text-2xl 5xl:text-3xl trancking-wider font-bold text-gray-700 mb-12">Sosyal Medyalar</h2>
    <v-app>
      <v-main>
        <div class="flex justify-end mb-4">
          <v-dialog class="lg:w-1/2" v-model="dialogCreate">
            <template v-slot:activator="{ props: activatorProps }">
              <v-btn
                class="!bg-green-500 h-9 3xl:h-10 5xl:h-12 px-6 !capitalize text-white 3xl:text-[1.05rem] 5xl:text-[1.35rem] rounded font-semibold tracking-wider text-shadow border shadow"
                v-bind="activatorProps"
                variant="flat"
              >
                Sosyal Medya Adresi Ekle
              </v-btn>
            </template>

            <template v-slot:default="{ isActive }">
              <v-card title="Sosyal Medya Adresi Ekle">
                <v-card-actions class="position-absolute right-0 top-2">
                  <v-btn @click="isActive.value = false">
                    <i class="mdi mdi-close text-2xl" />
                  </v-btn>
                </v-card-actions>
                <v-card-text>
                  <Form id="create_form" @submit="handleCreateSubmit" class="flex flex-col gap-7 mt-5 mb-3 sm:px-8">
                    <div class="">
                      <label for="" class="mb-2 font-medium text-gray-700 text-sm 4xl:text-lg 5xl:text-xl">
                        Sosyal Medya
                        <span class="text-[0.7rem] 5xl:text-base text-red-500">(zorunlu)</span>
                      </label>
                      <Field
                        as="select"
                        name="name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-1.5 px-2.5 5xl:py-3"
                      >
                        <option value="">Seçim yapın</option>
                        <option v-for="option in getAvailableSocialMedias()" :key="option" :value="option">
                          {{ option }}
                        </option>
                      </Field>
                      <span class="text-sm text-red-600 font-medium error-create-message" data-create-err="name"></span>
                    </div>
                    <div class="">
                      <label for="" class="mb-2 font-medium text-gray-700 text-sm 4xl:text-lg 5xl:text-xl">
                        Link
                        <span class="text-[0.7rem] 5xl:text-base text-red-500">(zorunlu)</span>
                      </label>
                      <Field
                        type="text"
                        name="link"
                        class="bg-gray-50 block w-full rounded-md border-0 py-1 3xl:py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400"
                      />
                      <span class="text-sm text-red-600 font-medium error-create-message" data-create-err="link"></span>
                    </div>
                    <div>
                      <button
                        type="submit"
                        class="w-full !bg-green-500 py-1.5 !capitalize text-white 5xl:text-2xl rounded font-semibold tracking-widest text-shadow border shadow"
                      >
                        Ekle
                      </button>
                    </div>
                  </Form>
                </v-card-text>
              </v-card>
            </template>
          </v-dialog>
        </div>
        <Table 
          :headers="headers" 
          :items="socialMedias" 
          :isSearch="false" 
          :isBtnUpdate="true"
          :updateViewName="null"
          :isBtnUpdateModal="true"
          :updateModalElementData="modalElementData"
          :updateModalData="socialMedia"
          :updateModalSchema="null"
          :isBtnDelete="true"
          :dialogs="dialogs"
          :loading="loading"
          @editItem="editItem" 
          @update="handleUpdateSubmit" 
          @delete="handleDeleteSubmit" 
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
  //import { socialMediaSchema } from '@/app/utils/validation-schemes/social-media-schema.js'

  export default {
    components:{
      Form,
      Field,
      Table
    },
    setup() {
      const dialogCreate = ref(false);
      const loading = computed(() => store.state.loading);
      const store = useStore();
      const socialMedias = computed(() => store.state.admin_social_media_socialMedia.socialMedias);
      let socialMedia = reactive({});
      const dialogs = reactive({});
      const allSocialMedias = ['instagram', 'twitter', 'facebook', 'linkedin', 'youtube'];

      const handleCreateSubmit = async (values) => {
          try {
            //await socialMediaSchema.validate(values, { abortEarly: false });

            const formData = new FormData();
            for (let key in values) {
                if (values[key]) {
                    formData.append(key, values[key] || '');
                }
            }

            await store.dispatch('admin_social_media_socialMedia/create', formData);
            dialogCreate.value = false
            document.getElementById('create_form').reset()

        } catch (error) {
           if(error.inner){
             const errorElements = document.querySelectorAll('.error-create-message');
              let errorStatuts = false;
              errorElements.forEach(element => {
                  let errorObject;
                  errorObject = error.inner.find(err => err.path == element.dataset.createErr)

                  element.innerHTML = errorObject?.message || ''
                  if(!errorStatuts){
                  element.closest('.v-card-text').scrollIntoView({ behavior: 'smooth' });
                  errorStatuts = true
                  }

            })
           }
            
        }
      };

      const handleUpdateSubmit= async (values) => {
        try {
          //await socialMediaSchema.validate(values, { abortEarly: false });

          const formData = new FormData();
          for (let key in values) {
            if (values[key]) {
              formData.append(key, values[key] || '');
            }
          }

          await store.dispatch('admin_social_media_socialMedia/update', formData);
          dialogs[values.id] = false;

        } catch (error) {
            if(error.inner){
              const errorElements = document.querySelectorAll('.error-update-message');
              let errorStatuts = false;
              errorElements.forEach(element => {
                  let errorObject;
                  errorObject = error.inner.find(err => err.path == element.dataset.updateErr)
  
                  element.innerHTML = errorObject?.message || ''
                  if(!errorStatuts){
                  element.closest('.v-card-text').scrollIntoView({ behavior: 'smooth' });
                  errorStatuts = true
                  }

              })
            }
        }
      }

      const handleDeleteSubmit = async (socialMediaId) => {
        await store.dispatch('social_media_socialMedia/delete', socialMediaId);
      };

       function getAvailableSocialMedias() {
        const existingSocialMediaNames = socialMedias.value.map(media => media.name);
        return allSocialMedias.filter(media => !existingSocialMediaNames.includes(media))
      }

      const  editItem = async (id) => {
         const response = await store.dispatch('admin_social_media_socialMedia/getByDetail',id)

         const availableSocialMedias = getAvailableSocialMedias()
         availableSocialMedias.push(response.name)

         socialMedia.id = response.id;
         socialMedia.name = response.name;
         socialMedia.link = response.link;
         socialMedia.selectedOption = response.name
         socialMedia.options = availableSocialMedias
         dialogs[id] = true;

      }

      const headers = [
        { title: 'Sosyal Medya', align: 'center', value: 'name' },
        { title: 'Link', align: 'center', value: 'link' },
        { title: 'İşlemler', align: 'center', value: 'process' },
      ];

      const modalElementData = [
        {
          labelText:'Sosyal Medya',
          element:'select',
          type: null,
          name:'name',
          size:'100%',
          required: true
        },
        {
          labelText:'Link',
          element:'input',
          type:'text',
          name:'link',
          size:'100%',
          required: true
        }
      ]

      onMounted(async () => {
        await store.dispatch('admin_social_media_socialMedia/getAll');
      });

      return {
        loading,
        socialMedias,
        socialMedia,
        getAvailableSocialMedias,
        dialogs,
        headers,
        editItem,
        dialogCreate,
        handleCreateSubmit,
        handleUpdateSubmit,
        handleDeleteSubmit,
        modalElementData
      };
    },
  };
</script>

<style>

</style>