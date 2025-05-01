<template>
  <div class="text-gray-700">
        <div class="mt-8 flex flex-col">
            <Form @submit="handleUpdateProfil" class="mb-16 text-sm font-normal">
                <div class="mb-12">
                    <h2 class="font-bold text-lg mb-8 tracking-wider">Kişisel Bilgiler</h2>
                    <div class="flex justify-between flex-wrap gap-8 mt-5">
                        <div class="w-full sm:w-[calc(50%-1rem)]">
                            <label class="block font-medium text-gray-900 dark:text-white" for="file_input">Resim</label>
                            <Field type="file" name="img" class="block mt-2 text-base w-full text-gray-900 border border-gray-300 rounded-md cursor-pointer bg-gray-50"/>
                            <ErrorMessage class="error-message" name="user_image" />
                        </div>
                        <div class="w-full sm:w-[calc(50%-1rem)]">
                            <label class="font-medium" for="">Ad Soyad</label>
                            <div class="relative mt-2 rounded-md shadow-sm">
                                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <i  class="mdi mdi-account text-lg text-sky-600"/>
                                </div>
                                <Field v-model="updateProFile.full_name" type="text" name="full_name" id="full_name" class="bg-gray-50 block w-full rounded-md border-0 py-2 pl-9 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400 " placeholder="Ad Soyad"/>
                            </div>
                            <ErrorMessage class="error-message" name="full_name" />
                        </div>
                        <div class="w-full sm:w-[calc(50%-1rem)]">
                            <label class="font-medium" for="">E-posta</label>
                            <div class="relative mt-2 rounded-md shadow-sm">
                                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <i  class="mdi mdi-email text-lg text-sky-600"/>
                                </div>
                                <Field v-model="updateProFile.email" type="mail" name="email" id="mail" class="bg-gray-50 block w-full rounded-md border-0 py-2 pl-9 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400 " placeholder="E-posta"/>
                            </div>
                            <ErrorMessage class="error-message" name="mail" />
                        </div>
                        <div class="w-full sm:w-[calc(50%-1rem)]">
                            <label class="font-medium" for="">Telefon</label>
                            <div class="relative mt-2 rounded-md shadow-sm">
                                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <i class="mdi mdi-cellphone text-lg text-sky-600" />
                                </div>
                            <Field v-model="updateProFile.phone_number" type="text" name="phone_number" id="phone" class="bg-gray-50 block w-full rounded-md border-0 py-2 pl-9 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400 " v-mask="'05## ### ## ##'" placeholder="05__ ___ __ __" />
                            </div>
                            <ErrorMessage class="error-message" name="phone" />
                        </div>
                    </div>
                </div>
                 <button class="w-full bg-green-600 px-6 py-2 shadow rounded text-white text-base tracking-wider font-medium">Güncelle</button>
            </Form>
            <div class="mb-6">
                <h2 class="font-bold text-lg mb-8 tracking-wider">Şifre Değiştir</h2>
                <Form @submit="handleChangePassword" class="flex flex-wrap gap-5 mt-5 text-sm font-normal" id="form_change_password">
                    <div class="w-full">
                        <label class="font-medium" for="">Eski Şifre</label>
                        <div class="relative mt-2 rounded-md shadow-sm">
                            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <i class="mdi mdi-lock text-lg text-sky-600"></i>
                            </div>
                            <Field type="password" name="old_password" id="password" class="bg-gray-50 block w-full rounded-md border-0 py-2 pl-9 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400 " placeholder="Eski Şifre"/>
                        </div>
                    </div>
                    <div class="w-full">
                        <label class="font-medium" for="">Yeni Şifre</label>
                        <div class="relative mt-2 rounded-md shadow-sm">
                            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <i class="mdi mdi-lock text-lg text-sky-600"></i>
                            </div>
                            <Field type="password" name="password" class="bg-gray-50 block w-full rounded-md border-0 py-2 pl-9 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400 " placeholder="Yeni Şifre"/>
                        </div>
                    </div>
                    <div class="w-full">
                        <label class="font-medium" for="">Yeni Şifre Tekrar</label>
                        <div class="relative mt-2 rounded-md shadow-sm">
                            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <i class="mdi mdi-lock text-lg text-sky-600"></i>
                            </div>
                            <Field type="password" name="password_confirmation" class="bg-gray-50 block w-full rounded-md border-0 py-2 pl-9 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400 " placeholder="Şifre Tekrar"/>
                        </div>
                    </div>
                    <button class="w-full bg-green-600 px-6 py-2 mt-5 shadow rounded text-base text-white tracking-wider font-medium">Şifreyi Değiştir</button>
                </Form>
            </div>
        </div>    
  </div>
</template>

<script>
import { Field, Form, ErrorMessage } from 'vee-validate';
import { useStore } from 'vuex';
import { computed, reactive } from 'vue';
export default {
components:{
    Field,Form,ErrorMessage
  },

  setup(){
    const store = useStore();
    const updateProFile = reactive({
        full_name: store.state.loginUser.full_name,
        email: store.state.loginUser.email,
        phone_number: store.state.loginUser.phone_number,
        img: ''
    })

    const handleUpdateProfil = async (values) => {
        const formData = new FormData();
        for (let key in values) {
           if(values[key]){
              formData.append(key, values[key]);
            }
        }
        await store.dispatch('user_settings/updateProfil', formData);

      }

      const handleChangePassword = async (values) => {
          await store.dispatch('user_settings/changePassword', values);
          document.getElementById('form_change_password').reset();
      }



    return{
     updateProFile,
     handleUpdateProfil,
     handleChangePassword
    }
  }
}
</script>

<style>
   .error-message{
    color: red;
    margin-top: 0.7rem;
   }
</style>