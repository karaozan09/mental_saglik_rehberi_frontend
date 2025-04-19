<template>
  <div class="text-gray-700">
        <div class="mt-8 flex flex-col">
            <Form :validation-schema="settingsSchema" class="mb-16 text-sm font-normal">
                <div class="mb-12">
                    <h2 class="font-bold text-lg tracking-wider">Kişisel Bilgiler</h2>
                    <div class="flex flex-wrap gap-5 mt-5">
                        <div class="w-full sm:w-[calc(50%-1rem)]">
                            <label class="font-medium" for="">Ad Soyad</label>
                            <div class="relative mt-2 rounded-md shadow-sm">
                                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <i  class="mdi mdi-account text-lg text-sky-600"/>
                                </div>
                                <Field type="text" name="full_name" id="full_name" class="bg-gray-50 block w-full rounded-md border-0 py-2 pl-9 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400 " placeholder="Ad Soyad"/>
                            </div>
                            <ErrorMessage class="error-message" name="full_name" />
                        </div>
                        <div class="w-full sm:w-[calc(50%-1rem)]">
                            <label class="font-medium" for="">E-posta</label>
                            <div class="relative mt-2 rounded-md shadow-sm">
                                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <i  class="mdi mdi-email text-lg text-sky-600"/>
                                </div>
                                <Field type="mail" name="mail" id="mail" class="bg-gray-50 block w-full rounded-md border-0 py-2 pl-9 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400 " placeholder="E-posta"/>
                            </div>
                            <ErrorMessage class="error-message" name="mail" />
                        </div>
                        <div class="w-full sm:w-[calc(50%-1rem)]">
                            <label class="font-medium" for="">Telefon</label>
                            <div class="relative mt-2 rounded-md shadow-sm">
                                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <i class="mdi mdi-cellphone text-lg text-sky-600" /> +90
                                </div>
                            <Field type="number" name="phone" id="phone" class="bg-gray-50 block w-full rounded-md border-0 py-2 pl-16 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400 " placeholder="552XXXXXXX"/>
                            </div>
                            <ErrorMessage class="error-message" name="phone" />
                        </div>
                        <div class="w-full sm:w-[calc(50%-1rem)]">
                            <label class="font-medium" for="">Cinsiyet</label>
                            <div class="relative mt-2 rounded-md shadow-sm">
                                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <i  class="mdi mdi-gender-male-female text-lg text-sky-600"/>
                                </div>
                                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md pl-9 focus:ring-indigo-500 focus:border-indigo-500 block w-full px-2 py-[9.5px] dark:bg-gray-700">
                                    <option selected>Seçim yapın</option>
                                    <option value="male">Erkek</option>
                                    <option value="famele">Kadın</option>
                                </select>
                            </div>
                        </div>
                        <div class="w-full sm:w-[calc(50%-1rem)]">
                            <label class="font-medium" for="">Doğum Tarihi</label>
                            <div class="relative mt-2 rounded-md shadow-sm">
                                <div class="pointer-events-none absolute top-3 left-0 flex items-center pl-3">
                                    <i class="mdi mdi-calendar-question text-lg text-sky-600"></i>
                                </div>
                                <Field type="date" name="date_of_birth" id="date_of_birth" class="bg-gray-50 block w-full rounded-md border-0 py-[9.5px] pl-9 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400 " placeholder="Doğum Yılı"/>
                            </div>
                            <ErrorMessage class="error-message" name="date_of_birth" />
                        </div>
                        <div class="w-full sm:w-[calc(50%-1rem)]">
                            <label class="font-medium" for="">Doğum Yeri</label>
                            <div class="relative mt-2 rounded-md shadow-sm">
                                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <i class="mdi mdi-map-marker text-lg text-sky-600"></i>
                                </div>
                                <Field type="text" name="place_of_birth" id="place_of_birth" class="bg-gray-50 block w-full rounded-md border-0 py-[9.5px] pl-9 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400 " placeholder="Doğum Yeri"/>
                            </div>
                            <ErrorMessage class="error-message" name="place_of_birth" />
                        </div>
                    </div>
                </div>
                <div>
                    <h2 class="font-bold text-lg tracking-wider">Adres Bilgileri</h2>
                    <div class="flex flex-wrap gap-5 mt-5">
                        <div class="w-full sm:w-[calc(50%-1rem)]">
                            <label class="font-medium" for="">Ülke</label>
                            <div class="relative mt-2 rounded-md shadow-sm">
                                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <i class="mdi mdi-earth text-lg text-sky-600"></i>
                                </div>
                                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md pl-9 focus:ring-indigo-500 focus:border-indigo-500 block w-full px-2 py-[9.5px] dark:bg-gray-700">
                                    <option selected>Seçim yapın</option>
                                </select>
                            </div>
                        </div>
                        <div class="w-full sm:w-[calc(50%-1rem)]">
                            <label class="font-medium" for="">il</label>
                            <div class="relative mt-2 rounded-md shadow-sm">
                                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <i class="mdi mdi-earth text-lg text-sky-600"></i>
                                </div>
                                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md pl-9 focus:ring-indigo-500 focus:border-indigo-500 block w-full px-2 py-[9.5px] dark:bg-gray-700">
                                    <option selected>Seçim yapın</option>
                                </select>
                            </div>
                        </div>
                        <div class="w-full sm:w-[calc(50%-1rem)]">
                            <label class="font-medium" for="">İlçe</label>
                            <div class="relative mt-2 rounded-md shadow-sm">
                                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <i class="mdi mdi-earth text-lg text-sky-600"></i>
                                </div>
                                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md pl-9 focus:ring-indigo-500 focus:border-indigo-500 block w-full px-2 py-[9.5px] dark:bg-gray-700">
                                    <option selected>Seçim yapın</option>
                                </select>
                            </div>
                        </div>
                        <div class="w-full sm:w-[calc(50%-1rem)]">
                            <label class="font-medium" for="">Mahalle</label>
                            <div class="relative mt-2 rounded-md shadow-sm">
                                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <i class="mdi mdi-earth text-lg text-sky-600"></i>
                                </div>
                                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md pl-9 focus:ring-indigo-500 focus:border-indigo-500 block w-full px-2 py-[9.5px] dark:bg-gray-700">
                                    <option selected>Seçim yapın</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                 <button class="w-full bg-green-600 px-6 py-2 mt-5 shadow rounded text-white text-base tracking-wider font-medium">Güncelle</button>
            </Form>
            <div class="mb-6">
                <h2 class="font-bold text-lg tracking-wider">Şifre Değiştir</h2>
                <Form class="flex flex-wrap gap-5 mt-5 text-sm font-normal">
                    <div class="w-full sm:w-[calc(50%-1rem)]">
                        <label class="font-medium" for="">Şifre</label>
                        <div class="relative mt-2 rounded-md shadow-sm">
                            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <i class="mdi mdi-lock text-lg text-sky-600"></i>
                            </div>
                            <input type="password" name="password" id="password" class="bg-gray-50 block w-full rounded-md border-0 py-2 pl-9 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400 " placeholder="Şifre">
                        </div>
                    </div>
                    <div class="w-full sm:w-[calc(50%-1rem)]">
                        <label class="font-medium" for="">Şifre Tekrar</label>
                        <div class="relative mt-2 rounded-md shadow-sm">
                            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <i class="mdi mdi-lock text-lg text-sky-600"></i>
                            </div>
                            <input type="password" name="password_confirmation" id="password_confirmation" class="bg-gray-50 block w-full rounded-md border-0 py-2 pl-9 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400 " placeholder="Şifre Tekrar">
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
import {settingsSchema} from '@/app/utils/validations/settings-schema.js'
export default {
components:{
    Field,Form,ErrorMessage
  },

  setup(){

    return{
        settingsSchema
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