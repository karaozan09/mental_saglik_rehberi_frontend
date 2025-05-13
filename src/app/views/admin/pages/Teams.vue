<template>
  <div>
    <h2 class="text-2xl 5xl:text-3xl trancking-wider font-bold text-gray-700 mb-12">Ekip</h2>
    <v-app>
      <v-main>
        <div class="flex justify-end mb-4">
          <v-dialog class="lg:w-2/3" v-model="dialogCreate">
            <template v-slot:activator="{ props: activatorProps }">
              <v-btn
                class="!bg-green-500 h-9 3xl:h-10 5xl:h-12 px-6 !capitalize text-white  3xl:text-[1.05rem] 5xl:text-[1.35rem] rounded font-semibold tracking-wider text-shadow border shadow"
                v-bind="activatorProps"
                variant="flat"
              >
              Personel Ekle
              </v-btn>
            </template>

            <template v-slot:default="{ isActive }">
              <v-card title="Personel Ekle">
                <v-card-actions class="position-absolute right-0 top-2">
                  <v-btn @click="isActive.value = false">
                  <i class="mdi mdi-close text-2xl" />
                  </v-btn>
                </v-card-actions>
                <v-card-text>
                   <Form id="create_form" @submit="handleCreateSubmit" class="flex flex-col gap-7 mt-5 mb-3 sm:px-8">
                    <div class="w-full">
                        <label class="mb-2 font-medium text-gray-700 text-sm 4xl:text-lg 5xl:text-xl" for="home_image">Fotoğraf <span class="text-[0.7rem] 5xl:text-base text-red-500">(zorunlu)</span></label>
                        <Field name="img" type="file" class="block w-full text-gray-900 border border-gray-300 rounded-lg cursor-pointer dark:text-gray-400 5xl:text-2xl focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-900"/>
                        <span class="text-sm text-gray-500 mt-1 block tracking-wide">Sadece JPEG, JPG ,PNG formatları desteklenmektedir</span>
                        <span class="text-sm text-red-600 font-medium error-create-message" data-create-err="img"></span>
                    </div>
                    <div class="">
                      <label for="" class="mb-2 font-medium text-gray-700 text-sm 4xl:text-lg 5xl:text-xl">
                        Meslek
                        <span class="text-[0.7rem] 5xl:text-base text-red-500">(zorunlu)</span>
                      </label>
                      <Field
                        as="select"
                        name="job_id"
                        class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-1.5 px-2.5 5xl:py-3"
                      >
                        <option value="">Seçim yapın</option>
                        <option v-for="option in jobs" :key="option" :value="option.id">
                          {{ option.name }}
                        </option>
                      </Field>
                      <span class="text-sm text-red-600 font-medium error-create-message" data-create-err="name"></span>
                    </div>
                    <div class="">
                      <label for="" class="mb-2 font-medium text-gray-700 text-sm 4xl:text-lg 5xl:text-xl">
                        Ad Soyad
                        <span class="text-[0.7rem] 5xl:text-base text-red-500">(zorunlu)</span>
                      </label>
                      <Field
                        type="text"
                        name="full_name"
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
          :items="staffs" 
          :isSearch="true" 
          :imagePropsName ="'img'"
          :isBtnUpdate="true"
          :updateViewName="null"
          :isBtnUpdateModal="true"
          :updateModalElementData="modalElementData"
          :updateModalData="staff"
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
  //import { staffsCreateSchema,staffsUpdateSchema } from '@/app/utils/validation-schemes/staffs-schema.js'

  export default {
    components:{
      Form,
      Field,
      Table
    },
    setup() {
      const loading = computed(() => store.state.loading);
      const dialogCreate = ref(false);
      const store = useStore();
      const staffs = computed(() => store.state.admin_staff_staff.staff.map((staff,index) => {
        return{
          ...staff,
          order:index+1,
          job:staff.job.name
        }
      }));
      const jobs = computed(() => store.state.admin_jobs_jobs.jobs);
      const dialogs = reactive({});
      const staff = reactive({})

      const handleCreateSubmit = async (values) => {
          try {
            //await staffsCreateSchema.validate(values, { abortEarly: false });

            const formData = new FormData();
            for (let key in values) {
                if (values[key]) {
                    formData.append(key, values[key] || '');
                }
            }

            await store.dispatch('admin_staff_staff/create',formData)
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
          //await staffsUpdateSchema.validate(values, { abortEarly: false });

          const formData = new FormData();
          for (let key in values) {
            if (values[key]) {
              formData.append(key, values[key] || '');
            }
          }

         await store.dispatch('admin_staff_staff/update',formData)
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
      
      const handleDeleteSubmit= async (id) => {
        await store.dispatch('admin_staff_staff/delete',id)
      }

      const  editItem = async (id) => {
       const response = await store.dispatch('admin_staff_staff/getByDetail',id)

         staff.id = response.id;
         staff.full_name = response.full_name;
         staff.job_id = response.job_id;
         staff.selectedOption = response.job?.name
         staff.options = jobs.value.map(j => j.name)
         dialogs[id] = true;

      }

      const headers = [
        { title: 'No', align: 'center', value: 'order' },
        { title: 'Resim', align: 'center', value: 'image' },
        { title: 'Ad Soyad', align: 'center', value: 'full_name' },
        { title: 'Meslek', align: 'center', value: 'job' },
        { title: 'İşlemler', align: 'center', value: 'process' },
      ];

      const modalElementData = [
        {
          labelText:'Fotoğraf',
          element:'input',
          type:'file',
          name:'img',
          size:'100%',
          required: false
        },
       {
          labelText:'Meslek',
          element:'select',
          type: null,
          name:'job_id',
          size:'100%',
          required: true
        },
        {
          labelText:'Ad Soyad',
          element:'input',
          type:'text',
          name:'full_name',
          size:'100%',
          required: true
        }
      ]

      onMounted(async () => {
        await store.dispatch('admin_staff_staff/getAll');
        await store.dispatch('admin_jobs_jobs/getAll');
      });

      return {
        loading,
        dialogs,
        jobs,
        staffs,
        staff,
        headers,
        editItem,
        dialogCreate,
        handleCreateSubmit,
        handleUpdateSubmit,
        handleDeleteSubmit,
        modalElementData
      };
    }
  };

</script>

<style>

</style>