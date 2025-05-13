<template>
    <div>
        <h2 class="text-2xl 5xl:text-3xl trancking-wider font-bold text-gray-700 mb-12">Ayarlar</h2>
        <div id="accordion-collapse" data-accordion="collapse">
            <h2 @click="showAccordionItem" class="accordion-head" id="accordion-body-1">
                <button type="button" class="flex items-center justify-between w-full p-5 5xl:p-7 font-medium rtl:text-right text-gray-700 border border-b-0 border-color-sss rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                <span class="tracking-wider 4xl:text-lg 5xl:text-xl">Personel Meslek İşlemleri</span>
                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                </svg>
                </button>
            </h2>
            <div id="accordion-collapse-body-1" class="hidden accordion-body" aria-labelledby="accordion-body-1">
                <div class="flex flex-wrap gap-3 p-5 border text-lg border-b-0 border-color-sss tracking-wider">
                    <v-dialog class="lg:w-2/3" v-model="dialogCreate">
                        <template v-slot:activator="{ props: activatorProps }">
                        <v-btn
                            class="!bg-green-500 h-9 3xl:h-10 5xl:h-12 px-6 !capitalize text-white  3xl:text-[1.05rem] 5xl:text-[1.35rem] rounded font-semibold tracking-wider text-shadow border shadow"
                            v-bind="activatorProps"
                            variant="flat"
                        >
                        Meslek Ekle
                        </v-btn>
                        </template>

                        <template v-slot:default="{ isActive }">
                        <v-card title="Meslek Ekle">
                            <v-card-actions class="position-absolute right-0 top-2">
                                <v-btn @click="isActive.value = false">
                                    <i class="mdi mdi-close text-2xl" />
                                </v-btn>
                            </v-card-actions>
                            <v-card-text>
                                <Form id="create_form" @submit="handleJobCreate" class="flex flex-col gap-7 mt-5 mb-3 sm:px-8">
                                    <div class="">
                                        <label for="" class="mb-2 font-medium text-gray-700 text-sm 4xl:text-lg 5xl:text-xl">
                                        Meslek Adı
                                            <span class="text-[0.7rem] 5xl:text-base text-red-500">(zorunlu)</span>
                                        </label>
                                        <Field
                                            type="text"
                                            name="name"
                                            class="bg-gray-50 block w-full rounded-md border-0 py-1 3xl:py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400"
                                        />
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
                    <v-dialog class="lg:w-2/3" v-model="dialogUpdate">
                        <template v-slot:activator="{ props: activatorProps }">
                        <v-btn
                            class="!bg-yellow-400 h-9 3xl:h-10 5xl:h-12 px-6 !capitalize text-white  3xl:text-[1.05rem] 5xl:text-[1.35rem] rounded font-semibold tracking-wider text-shadow border shadow"
                            v-bind="activatorProps"
                            variant="flat"
                        >
                        Meslek Güncelle
                        </v-btn>
                        </template>

                        <template v-slot:default="{ isActive }">
                        <v-card title="Meslek Güncelle">
                            <v-card-actions class="position-absolute right-0 top-2">
                                <v-btn @click="isActive.value = false">
                                    <i class="mdi mdi-close text-2xl" />
                                </v-btn>
                            </v-card-actions>
                            <v-card-text>
                                <Form id="create_form" @submit="handleJobUpdate" class="flex flex-col gap-7 mt-5 mb-3 sm:px-8">
                                    <div class="">
                                        <label for="" class="mb-2 font-medium text-gray-700 text-sm 4xl:text-lg 5xl:text-xl">
                                            Meslek Adı
                                            <span class="text-[0.7rem] 5xl:text-base text-red-500">(zorunlu)</span>
                                        </label>
                                        <Field
                                            as="select"
                                            name="id"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-1.5 px-2.5 5xl:py-3"
                                        >
                                            <option value="">Seçim yapın</option>
                                            <option v-for="option in jobs" :key="option" :value="option.id">
                                            {{ option.name }}
                                            </option>
                                        </Field>
                                    </div>
                                    <div class="">
                                        <label for="" class="mb-2 font-medium text-gray-700 text-sm 4xl:text-lg 5xl:text-xl">
                                        Yeni Meslek Adı
                                            <span class="text-[0.7rem] 5xl:text-base text-red-500">(zorunlu)</span>
                                        </label>
                                        <Field
                                            type="text"
                                            name="name"
                                            class="bg-gray-50 block w-full rounded-md border-0 py-1 3xl:py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400"
                                        />
                                    </div>
                                    <div>
                                    <button
                                        type="submit"
                                        class="w-full !bg-yellow-400 py-1.5 !capitalize text-white 5xl:text-2xl rounded font-semibold tracking-widest text-shadow border shadow"
                                    >
                                        Güncelle
                                    </button>
                                    </div>
                                </Form>
                            </v-card-text>
                        </v-card>
                        </template>
                    </v-dialog>
                    <v-dialog class="lg:w-2/3" v-model="dialogDelete">
                        <template v-slot:activator="{ props: activatorProps }">
                        <v-btn
                            class="!bg-red-500 h-9 3xl:h-10 5xl:h-12 px-6 !capitalize text-white  3xl:text-[1.05rem] 5xl:text-[1.35rem] rounded font-semibold tracking-wider text-shadow border shadow"
                            v-bind="activatorProps"
                            variant="flat"
                        >
                        Meslek Sil
                        </v-btn>
                        </template>

                        <template v-slot:default="{ isActive }">
                        <v-card title="Meslek Sil">
                            <v-card-actions class="position-absolute right-0 top-2">
                                <v-btn @click="isActive.value = false">
                                    <i class="mdi mdi-close text-2xl" />
                                </v-btn>
                            </v-card-actions>
                            <v-card-text>
                                <Form id="create_form" @submit="handleJobDelete" class="flex flex-col gap-7 mt-5 mb-3 sm:px-8">
                                    <div class="">
                                        <label for="" class="mb-2 font-medium text-gray-700 text-sm 4xl:text-lg 5xl:text-xl">
                                            Meslek Adı
                                            <span class="text-[0.7rem] 5xl:text-base text-red-500">(zorunlu)</span>
                                        </label>
                                        <Field
                                            as="select"
                                            name="id"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-1.5 px-2.5 5xl:py-3"
                                        >
                                            <option value="">Seçim yapın</option>
                                            <option v-for="option in jobs" :key="option" :value="option.id">
                                            {{ option.name }}
                                            </option>
                                        </Field>
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            class="w-full !bg-red-500 py-1.5 !capitalize text-white 5xl:text-2xl rounded font-semibold tracking-widest text-shadow border shadow"
                                        >
                                            Sil
                                        </button>
                                    </div>
                                </Form>
                            </v-card-text>
                        </v-card>
                        </template>
                    </v-dialog>
                </div>
            </div>

            <h2 @click="showAccordionItem" class="accordion-head" id="accordion-body-33">
                <button type="button" class="flex items-center justify-between w-full p-5 5xl:p-7 font-medium rtl:text-right text-gray-700 border border-b-0 border-color-sss focus:ring-4 focus:ring-gray-200 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                    <span class="tracking-wider 4xl:text-lg 5xl:text-xl">Logo</span>
                    <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                    </svg>
                </button>
            </h2>
            <div id="accordion-collapse-body-33" class="hidden accordion-body" aria-labelledby="accordion-body-33">
                <div class="flex gap-3 py-12 px-5 sm:px-8 border 5xl:text-xl border-b-0 border-color-sss tracking-wide">
                    <Form @submit="handleLogo" class="w-full lg:pe-32">
                        <Field type="hidden" name="form_id" value="logo_form"/>
                        <div class="flex gap-8 items-center">
                            <div class="flex-1">
                                <label class="text-sm 4xl:text-base block text-sm 4xl:text-base mb-2 font-medium text-gray-700" for="">Logo</label>
                                <div class="flex flex-col md:flex-row items-center gap-4 md:gap-16">
                                    <Field type="file" name="logo" class="block w-full text-gray-700 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none"/>
                                    <button class="w-full md:w-max self-end px-6 py-1.5 bg-green-600 font-medium tracking-wider text-white text-center rounded 5xl:text-xl">Kaydet</button>
                                </div>
                                <span class="text-sm text-red-600 font-medium error-message" data-err="logo"></span>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>

            <h2 @click="showAccordionItem" class="accordion-head" id="accordion-body-3">
                <button type="button" class="flex items-center justify-between w-full p-5 5xl:p-7 font-medium rtl:text-right text-gray-700 border border-b-0  border-color-sss focus:ring-4 focus:ring-gray-200 gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                <span class="tracking-wider 4xl:text-lg 5xl:text-xl">Anasayfa İşlemleri </span>
                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                </svg>
                </button>
            </h2>
            <div id="accordion-collapse-body-2" class="hidden accordion-body" aria-labelledby="accordion-body-3">
                 <div class="flex gap-3 py-12 px-5 sm:px-8 border 5xl:text-xl border-b-0 border-color-sss tracking-wide">
                    <Form
                     @submit="handleHomeProcess"
                      class="w-full">
                        <Field type="hidden" name="form_id" />
                        <h3 class="text-lg font-semibold text-gray-700 mb-2">Ana Görsel</h3>
                        <hr class="mb-5">
                        <div class="flex flex-wrap gap-8">
                            <div class="w-full">
                                <label class="text-sm 4xl:text-base mb-2 font-medium text-gray-700" for="">Resim</label>
                                <Field type="file" name="home_img" class="block w-full text-gray-700 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"/>
                                <span class="text-sm text-red-600 font-medium error-message" data-err="mainImgPath"></span>
                            </div>
                            <div class="w-full">
                                <label for="" class="text-sm 4xl:text-base mb-2 font-medium text-gray-700">Başlık <span class="text-[.75rem] text-red-500">(zorunlu)</span></label>
                                <Field type="text" v-model="settings.home_title" name="home_title" class="bg-gray-50 block w-full rounded-md border-0 py-1 sm:py-2 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400"/>
                                <span class="text-sm text-red-600 font-medium error-message" data-err="mainImgTitle"></span>
                            </div>
                            <div class="w-full">
                                <label class="text-sm 4xl:text-base mb-2 font-medium text-gray-700" for="">Açıklama <span class="text-[.75rem] text-red-500">(zorunlu)</span></label>
                                <ckeditor

                                    :editor="editor"
                                    :config="editorConfig"
                                    tag-name="textarea"
                                    v-model="settings.home_text"
                                    name="home_text"
                                />            
                                <span class="text-sm text-red-600 font-medium error-message" data-err="mainImgDesc"></span>
                            </div>
                            
                            <div class="w-full mt-5">
                                <h3 class="text-lg font-semibold text-gray-700 mb-2">Hedef ve Amaçlarımız</h3>
                                <hr class="w-full">
                            </div>
                            <div class="w-full">
                                <label class="text-sm 4xl:text-base mb-2 font-medium text-gray-700" for="">Resim</label>
                                <Field type="file" name="aim_img" class="block w-full text-gray-700 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"/>
                                <span class="text-sm text-red-600 font-medium error-message" data-err="mainImgPath"></span>
                            </div>
                            <div class="w-full">
                                <label for="" class="text-sm 4xl:text-base mb-2 font-medium text-gray-700">Başlık <span class="text-[.75rem] text-red-500">(zorunlu)</span></label>
                                <Field type="text" v-model="settings.aim_title" name="aim_title" class="bg-gray-50 block w-full rounded-md border-0 py-1 sm:py-2 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400"/>
                                <span class="text-sm text-red-600 font-medium error-message" data-err="mainImgTitle"></span>
                            </div>
                            <div class="w-full">
                                <label class="text-sm 4xl:text-base mb-2 font-medium text-gray-700" for="">Açıklama <span class="text-[.75rem] text-red-500">(zorunlu)</span></label>
                                <ckeditor

                                    :editor="editor"
                                    :config="editorConfig"
                                    tag-name="textarea"
                                    v-model="settings.aim_text"
                                    name="aim_text"
                                />            
                                <span class="text-sm text-red-600 font-medium error-message" data-err="mainImgDesc"></span>
                            </div>

                             <div class="w-full mt-5">
                                <h3 class="text-lg font-semibold text-gray-700 mb-2">Terapi sürecine yakından göz atın...</h3>
                                <hr class="w-full">
                            </div>
                            <div class="w-full">
                                <label class="text-sm 4xl:text-base mb-2 font-medium text-gray-700" for="">Resim</label>
                                <Field type="file" name="purpose_img" class="block w-full text-gray-700 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"/>
                                <span class="text-sm text-red-600 font-medium error-message" data-err="mainImgPath"></span>
                            </div>
                            <div class="w-full">
                                <label for="" class="text-sm 4xl:text-base mb-2 font-medium text-gray-700">Başlık <span class="text-[.75rem] text-red-500">(zorunlu)</span></label>
                                <Field type="text" v-model="settings.purpose_title" name="purpose_title" class="bg-gray-50 block w-full rounded-md border-0 py-1 sm:py-2 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400"/>
                                <span class="text-sm text-red-600 font-medium error-message" data-err="mainImgTitle"></span>
                            </div>
                             <div class="w-full">
                                <label for="" class="text-sm 4xl:text-base mb-2 font-medium text-gray-700">Alt Başlık 1 <span class="text-[.75rem] text-red-500">(zorunlu)</span></label>
                                <Field type="text" v-model="settings.purpose_subheading_1" name="purpose_subheading_1" class="bg-gray-50 block w-full rounded-md border-0 py-1 sm:py-2 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400"/>
                                <span class="text-sm text-red-600 font-medium error-message" data-err="mainImgTitle"></span>
                            </div>
                             <div class="w-full">
                                <label for="" class="text-sm 4xl:text-base mb-2 font-medium text-gray-700">Alt Başlık 2 <span class="text-[.75rem] text-red-500">(zorunlu)</span></label>
                                <Field type="text" v-model="settings.purpose_subheading_2" name="purpose_subheading_2" class="bg-gray-50 block w-full rounded-md border-0 py-1 sm:py-2 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400"/>
                                <span class="text-sm text-red-600 font-medium error-message" data-err="mainImgTitle"></span>
                            </div>
                             <div class="w-full">
                                <label for="" class="text-sm 4xl:text-base mb-2 font-medium text-gray-700">Alt Başlık 3 <span class="text-[.75rem] text-red-500">(zorunlu)</span></label>
                                <Field type="text" v-model="settings.purpose_subheading_3" name="purpose_subheading_3" class="bg-gray-50 block w-full rounded-md border-0 py-1 sm:py-2 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400"/>
                                <span class="text-sm text-red-600 font-medium error-message" data-err="mainImgTitle"></span>
                            </div>
                             <div class="w-full">
                                <label for="" class="text-sm 4xl:text-base mb-2 font-medium text-gray-700">Alt Başlık 4 <span class="text-[.75rem] text-red-500">(zorunlu)</span></label>
                                <Field type="text" v-model="settings.purpose_subheading_4" name="purpose_subheading_4" class="bg-gray-50 block w-full rounded-md border-0 py-1 sm:py-2 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400"/>
                                <span class="text-sm text-red-600 font-medium error-message" data-err="mainImgTitle"></span>
                            </div>

                            <button class="w-full px-6 py-2 3xl:py-2.5 bg-green-600 font-medium tracking-wider text-white text-center rounded 5xl:text-xl">Kaydet</button>
                        </div>
                    </Form>
                </div>
            </div>

            <h2 @click="showAccordionItem" class="accordion-head" id="accordion-body-4">
                <button type="button" class="flex items-center justify-between w-full p-5 5xl:p-7 font-medium rtl:text-right text-gray-700 border border-b-0  border-color-sss focus:ring-4 focus:ring-gray-200 gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                <span class="tracking-wider text-start 4xl:text-lg 5xl:text-2xl">İletişim Bilgileri</span>
                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                </svg>
                </button>
            </h2>
            <div id="accordion-collapse-body-2" class="hidden accordion-body" aria-labelledby="accordion-body-4">
                <div class="flex gap-3 py-12 px-5 sm:px-8 border 5xl:text-xl border-b-0 border-color-sss tracking-wide">
                    <Form 
                    @submit="handleContact" 
                    class="w-full flex-wrap flex gap-8">
                        <Field type="hidden" name="form_id" value="main_contact"/>
                        <div class="w-full md:w-[calc(50%-1rem)]">
                            <label for="" class="text-sm 4xl:text-base mb-2 font-medium text-gray-700">Telefon 1 <span class="text-[.75rem] text-red-500">(zorunlu)</span></label>
                            <Field type="text" v-model="contact.phone_number_1" name="phone_number_1" class="bg-gray-50 block w-full rounded-md border-0 py-1 sm:py-2 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400"/>
                            <span class="text-sm text-red-600 font-medium error-message" data-err="phone_number_1"></span>
                        </div>
                        <div class="w-full md:w-[calc(50%-1rem)]">
                            <label for="" class="text-sm 4xl:text-base mb-2 font-medium text-gray-700">Telefon 2</label>
                            <Field type="text" v-model="contact.phone_number_2" name="phone_number_2" class="bg-gray-50 block w-full rounded-md border-0 py-1 sm:py-2 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400"/>
                            <span class="text-sm text-red-600 font-medium error-message" data-err="phone_number_2"></span>
                        </div>
                        <div class="w-full md:w-[calc(50%-1rem)]">
                            <label for="" class="text-sm 4xl:text-base mb-2 font-medium text-gray-700">E-posta 1 <span class="text-[.75rem] text-red-500">(zorunlu)</span></label>
                            <Field type="text" v-model="contact.email_1" name="email_1" class="bg-gray-50 block w-full rounded-md border-0 py-1 sm:py-2 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400"/>
                            <span class="text-sm text-red-600 font-medium error-message" data-err="email_1"></span>
                        </div>
                        <div class="w-full md:w-[calc(50%-1rem)]">
                            <label for="" class="text-sm 4xl:text-base mb-2 font-medium text-gray-700">E-posta 2</label>
                            <Field type="text" v-model="contact.email_2" name="email_2" class="bg-gray-50 block w-full rounded-md border-0 py-1 sm:py-2 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400"/>
                            <span class="text-sm text-red-600 font-medium error-message" data-err="email_2"></span>
                        </div>
                        <div class="w-full">
                            <label for="" class="text-sm 4xl:text-base mb-2 font-medium text-gray-700">Adres 1 <span class="text-[.75rem] text-red-500">(zorunlu)</span></label>
                             <ckeditor
                                    :editor="editor"
                                    :config="editorConfig"
                                    name="address_1"
                                    v-model="contact.address_1"
                                    tag-name="textarea"
                                />  
                                <span class="text-sm text-red-600 font-medium error-message" data-err="location_1"></span>                       
                        </div>
                        <div class="w-full">
                            <label for="" class="text-sm 4xl:text-base mb-2 font-medium text-gray-700">Adres 2</label>
                            <ckeditor
                                :editor="editor"
                                :config="editorConfig"
                                v-model="contact.address_2"
                                name="address_2"
                                tag-name="textarea"
                            />   
                            <span class="text-sm text-red-600 font-medium error-message" data-err="location_2"></span> 
                        </div>
                        <button class="w-full px-6 py-2 3xl:py-2.5 bg-green-600 font-medium tracking-wider text-white text-center rounded 5xl:text-xl">Kaydet</button>
                    </Form>
                </div>
            </div>

            <h2 @click="showAccordionItem" class="accordion-head" id="accordion-body-7">
                <button type="button" class="flex items-center justify-between w-full p-5 5xl:p-7 font-medium rtl:text-right text-gray-700 border border-b-0 border-color-sss focus:ring-4 focus:ring-gray-200 gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                    <span class="tracking-wider text-start 4xl:text-lg 5xl:text-2xl">Mesaj Gönderilecek E-posta</span>
                    <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                    </svg>
                </button>
            </h2>
            <div id="accordion-collapse-body-2" class="hidden accordion-body" aria-labelledby="accordion-body-7">
                <div class="flex gap-3 py-12 px-5 sm:px-8 border 5xl:text-xl border-b-0 border-color-sss tracking-wide">
                    <Form @submit="handleContactEmail" class="w-full lg:pe-32">
                        <div class="flex gap-8 items-center">
                            <div class="flex-1">
                                <label class="text-sm 3xl:text-base block text-sm 4xl:text-base mb-2 font-medium text-gray-700" for="">E-posta <span class="text-[0.75rem] text-red-500">(zorunlu)</span></label>
                                <div class="flex flex-col md:flex-row items-center gap-4 md:gap-16">
                                    <Field type="mail" v-model="contact.contact_email" name="contact_email" class="bg-gray-50 block w-full rounded-md border-0 py-1 sm:py-2 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400"/>
                                    <button class="w-full md:w-max self-end px-6 py-2 bg-green-600 font-medium tracking-wider text-white text-center rounded 5xl:text-xl">Kaydet</button>
                                </div>
                                <span class="text-sm text-red-600 font-medium error-message" data-err="contact_email"></span> 
                            </div>
                        </div>
                    </Form>
                </div>
            </div>

            <h2 @click="showAccordionItem" class="accordion-head" id="accordion-body-8">
                <button type="button" class="flex items-center justify-between w-full p-5 5xl:p-7 font-medium rtl:text-right text-gray-700 border border-b-0 border-color-sss focus:ring-4 focus:ring-gray-200 gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                <span class="tracking-wider text-start 4xl:text-lg 5xl:text-2xl">Harita Konum Bilgisi</span>
                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                </svg>
                </button>
            </h2>
            <div id="accordion-collapse-body-2" class="hidden accordion-body" aria-labelledby="accordion-body-8">
                <div class="flex gap-3 py-12 px-5 sm:px-8 border border-b-0  5xl:text-xl border-color-sss tracking-wide">
                    <Form @submit="handleMapLocation" class="w-full">
                        <div class="flex flex-col mb-7 gap-1">
                            <p class="text-gray-800"><span class="font-bold">NOT: </span>Aşağıdaki linke tıklayarak açılan sayfaya adresinizi girerek konumuzu belirten yazıyı kopyalayıp Konum adresi kutusuna yapıştırınız.</p>
                            <a href="https://www.googlemapsiframegenerator.com/?gad_source=1&gclid=Cj0KCQjw3vO3BhCqARIsAEWblcB3dmiLPzJ_jLHBDaJ8n2Q-Pnr-XHu92rTzpL1avDaPOQV2KMQUam8aAm0ZEALw_wcB" target="_blank" class="underline text-blue">Konumumu bul</a>
                        </div>
                        <div class="flex gap-8 items-center lg:pe-32">
                            <div class="flex-1">
                                <label class="text-sm 3xl:text-base block text-sm 4xl:text-base mb-2 font-medium text-gray-700" for="">Konum Adresi <span class="text-[0.75rem] text-red-500">(zorunlu)</span></label>
                                <div class="flex flex-col md:flex-row items-center gap-4 md:gap-16">
                                    <Field type="text" v-model="contact.coordinates"  name="coordinates" class="bg-gray-50 block w-full rounded-md border-0 py-1 sm:py-2 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400"/>
                                    <button class="w-full md:w-max self-end px-6 py-2 bg-green-600 font-medium tracking-wider text-white text-center rounded 5xl:text-xl">Kaydet</button>
                                </div>
                                <span class="text-sm text-red-600 font-medium error-message" data-err="coordinates"></span> 
                            </div>
                        </div>
                    </Form>
                </div>
            </div>

            <h2 @click="showAccordionItem" class="accordion-head" id="accordion-body-9">
                <button type="button" class="flex items-center justify-between w-full p-5 5xl:p-7 font-medium rtl:text-right text-gray-700 border border-color-sss focus:ring-4 focus:ring-gray-200 gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                <span class="tracking-wider 4xl:text-lg 5xl:text-xl">Footer Yazısı</span>
                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                </svg>
                </button>
            </h2>
            <div id="accordion-collapse-body-2" class="hidden accordion-body" aria-labelledby="accordion-body-9">
                <div class="flex gap-3 py-12 px-5 sm:px-8 border border-t-0 5xl:text-xl border-b-0 border-color-sss tracking-wide">
                    <Form @submit="handleFooter" class="w-full">
                        <Field type="hidden" name="form_id" value="footer_form" />
                        <div class="flex flex-wrap gap-8 items-center">
                            <div class="w-full">
                                    <label for="" class="text-sm 4xl:text-base mb-2 font-medium text-gray-700">Üst Başlık <span class="text-[.75rem] text-red-500">(zorunlu)</span></label>
                                    <Field type="text" v-model="settings.footer_top_title" name="footer_top_title" class="bg-gray-50 block w-full rounded-md border-0 py-1 sm:py-2 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400"/>
                                    <span class="text-sm text-red-600 font-medium error-message" data-err="footer_top_title"></span>
                            </div>
                            <div class="w-full">
                                <label for="" class="text-sm 4xl:text-base mb-2 font-medium text-gray-700">Üst Başlık Açıklama <span class="text-[.75rem] text-red-500">(zorunlu)</span></label>
                                <ckeditor
                                    :editor="editor"
                                    :config="editorConfig"
                                    tag-name="textarea"
                                    v-model="settings.footer_top_text"
                                    name="footer_top_text"
                                />   
                                <span class="text-sm text-red-600 font-medium error-message" data-err="footer_top_description"></span>
                            </div>
                            <div class="w-full">
                                <label for="" class="text-sm 4xl:text-base mb-2 font-medium text-gray-700">Alt Yazı <span class="text-[.75rem] text-red-500">(zorunlu)</span></label>
                                <ckeditor
                                    :editor="editor"
                                    :config="editorConfig"
                                    tag-name="textarea"
                                    v-model="settings.footer_bottom_text"
                                    name="footer_bottom_text"
                                />   
                                <span class="text-sm text-red-600 font-medium error-message" data-err="footer_bottom_text"></span>
                            </div>
                            <button class="w-full self-end px-6 py-2 3xl:py-2.5 bg-green-600 font-medium tracking-wider text-white text-center rounded 5xl:text-xl">Kaydet</button>
                        </div>
                    </Form>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import { ClassicEditor, Bold, Essentials, Italic, Mention, Paragraph, Undo, FontColor, FontFamily,Link,Alignment } from 'ckeditor5';
import 'ckeditor5/ckeditor5.css';
import { Field, Form } from 'vee-validate';
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
export default {
    components:{
        Field,
        Form
    },
    setup(){
        const editor = ClassicEditor;
        const editorConfig = ref({
            plugins: [ Bold, Essentials, Italic, Mention, Paragraph, Undo, FontFamily,Alignment ],
            toolbar: ['fontFamily', '|', 'bold', 'italic', '|', 'alignment','|', 'undo', 'redo',  ],
            fontColor: {
                columns: 10,
                documentColors: 10
            },
            fontFamily: {
                options: [
                    'default',
                    'Arial, Helvetica, sans-serif',
                    'Courier New, Courier, monospace',
                    'Georgia, serif',
                    'Lucida Sans Unicode, Lucida Grande, sans-serif',
                    'Tahoma, Geneva, sans-serif',
                    'Times New Roman, Times, serif',
                    'Trebuchet MS, Helvetica, sans-serif',
                    'Verdana, Geneva, sans-serif'
                ],
                alignment: {
                    options: [ 'left', 'center', 'right', 'justify' ]
                },
                supportAllValues: false
            },
            //placeholder: '' 
        });
        const store = useStore();
        const jobs = computed(() => store.state.admin_jobs_jobs.jobs);
        const settings = computed(() => store.state.admin_settings_settings.settings);
        const contact = computed(() => store.state.admin_settings_settings.contact);
        const dialogCreate = ref(false);
        const dialogUpdate = ref(false);
        const dialogDelete = ref(false);

        function showAccordionItem(e) {
            const id = e.currentTarget.id;
            const currentAccordionBody = document.querySelector(`[aria-labelledby=${id}]`);
            const accordionBodys = document.querySelectorAll('.accordion-body');

            accordionBodys.forEach(body => {
                if (body !== currentAccordionBody) {
                    body.classList.add('hidden');
                }
            });

            if (currentAccordionBody.classList.contains('hidden')) {
                currentAccordionBody.classList.remove('hidden');
            } else {
                currentAccordionBody.classList.add('hidden');
            }
        }

         onMounted(async () => {
            await store.dispatch('admin_jobs_jobs/getAll');
            await store.dispatch('admin_settings_settings/getAll');
        });

        //Meslek işlemleri
        const handleJobCreate = async(values) => {
            const formData = new FormData();
            for (let key in values) {
                if (values[key]) {
                    formData.append(key, values[key] || '');
                }
            }

            await store.dispatch('admin_jobs_jobs/create',formData)
            dialogCreate.value = false
        }
        const handleJobUpdate = async(values) => {
            const formData = new FormData();
            for (let key in values) {
                if (values[key]) {
                    formData.append(key, values[key] || '');
                }
            }

            await store.dispatch('admin_jobs_jobs/update',formData)
            dialogUpdate.value = false
        }
        const handleJobDelete = async(values) => {
            dialogDelete.value = false
            await store.dispatch('admin_jobs_jobs/delete',values.id)
        }


        const handleLogo = async(values) => {
            const formData = new FormData();
            for (let key in values) {
                if (values[key]) {
                    formData.append(key, values[key] || '');
                }
            }

            await store.dispatch('admin_settings_settings/logo',formData)
        }

        const handleHomeProcess = async(values) => {
            const formData = new FormData();
            values.home_text = settings.value.home_text
            values.aim_text = settings.value.aim_text
            for (let key in values) {
                if (values[key]) {
                    formData.append(key, values[key] || '');
                }
            }

            await store.dispatch('admin_settings_settings/homeProcess',formData)
        }

        const handleContact = async(values) => {
            const formData = new FormData();
            values.address_1 = contact.value.address_1
            values.address_2 = contact.value.address_2
            for (let key in values) {
                if (values[key]) {
                    formData.append(key, values[key] || '');
                }
            }

            await store.dispatch('admin_settings_settings/contact',formData)
        }

        const handleContactEmail = async(values) => {
            const formData = new FormData();
            for (let key in values) {
                if (values[key]) {
                    formData.append(key, values[key] || '');
                }
            }

            await store.dispatch('admin_settings_settings/contactEmail',formData)
        }

        const handleMapLocation = async(values) => {
            const formData = new FormData();
            for (let key in values) {
                if (values[key]) {
                    formData.append(key, values[key] || '');
                }
            }

            await store.dispatch('admin_settings_settings/mapLocation',formData)
        }

        const handleFooter = async(values) => {
            values.footer_top_text = settings.value.footer_top_text
            values.footer_bottom_text = settings.value.footer_bottom_text
            const formData = new FormData();
            for (let key in values) {
                if (values[key]) {
                    formData.append(key, values[key] || '');
                }
            }

            await store.dispatch('admin_settings_settings/footer',formData)
        }

        return{
            dialogCreate,
            dialogUpdate,
            dialogDelete,
            editor,
            editorConfig,
            settings,
            contact,
            jobs,
            showAccordionItem,
            handleJobCreate,
            handleJobUpdate,
            handleJobDelete,
            handleLogo,
            handleHomeProcess,
            handleContact,
            handleContactEmail,
            handleMapLocation,
            handleFooter
        }
    }
}
</script>

<style scoped>
    .border-color-sss{
        border-color: #d2c6c6 !important;
    }
</style>