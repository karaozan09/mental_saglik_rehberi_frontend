<template>
    <div>
        <h2 class="text-2xl 5xl:text-3xl trancking-wider font-bold text-gray-700 mb-12">Ayarlar</h2>
        <div id="accordion-collapse" data-accordion="collapse">
            <h2 @click="showAccordionItem" class="accordion-head" id="accordion-body-1">
                <button type="button" class="flex items-center justify-between w-full p-5 5xl:p-7 font-medium rtl:text-right text-gray-700 border border-b-0 border-color-sss rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                <span class="tracking-wider 4xl:text-lg 5xl:text-xl">Burs Türü İşlemleri</span>
                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                </svg>
                </button>
            </h2>
            <div id="accordion-collapse-body-1" class="hidden accordion-body" aria-labelledby="accordion-body-1">
                <div class="flex flex-wrap gap-3 p-5 border text-lg border-b-0 border-color-sss tracking-wider">
                    <v-dialog class="lg:w-2/3 4xl:w-1/2">
                        <template v-slot:activator="{ props: activatorProps }">
                        <v-btn
                            class="!bg-green-500 !h-10 !capitalize text-white text-sm rounded font-semibold tracking-wider text-shadow border shadow w-full sm:w-max"
                            v-bind="activatorProps"
                            variant="flat"
                        >
                        Burs Türü Ekle
                        </v-btn>
                        </template>

                        <template v-slot:default="{ isActive }">
                        <v-card title="Dialog">
                            <v-card-text>
                            1111 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                    <v-dialog class="lg:w-2/3 4xl:w-1/2">
                        <template v-slot:activator="{ props: activatorProps }">
                        <v-btn
                            class="!bg-yellow-400 !h-10 !capitalize text-white text-sm rounded font-semibold tracking-wider text-shadow border shadow w-full sm:w-max"
                            v-bind="activatorProps"
                            variant="flat"
                        >
                        Burs Türü Güncelle
                        </v-btn>
                        </template>

                        <template v-slot:default="{ isActive }">
                        <v-card title="Dialog">
                            <v-card-text>
                            2222 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                    <v-dialog class="lg:w-2/3 4xl:w-1/2">
                        <template v-slot:activator="{ props: activatorProps }">
                        <v-btn
                            class="!bg-red-500 !h-10 !capitalize text-white text-sm rounded font-semibold tracking-wider text-shadow border shadow w-full sm:w-max"
                            v-bind="activatorProps"
                            variant="flat"
                        >
                        Burs Türü Sil
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
            </div>

            <h2 @click="showAccordionItem" class="accordion-head" id="accordion-body-2">
                <button type="button" class="flex items-center justify-between w-full p-5 5xl:p-7 font-medium rtl:text-right text-gray-700 border border-b-0 border-color-sss focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                <span class="tracking-wider 4xl:text-lg 5xl:text-xl">Ödüllendirme İşlemleri</span>
                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                </svg>
                </button>
            </h2>
            <div id="accordion-collapse-body-2" class="hidden accordion-body" aria-labelledby="accordion-body-2">
                <div class="flex flex-wrap gap-3 p-5 border text-lg border-b-0 border-color-sss tracking-wider">
                    <v-dialog class="lg:w-2/3 4xl:w-1/2">
                        <template v-slot:activator="{ props: activatorProps }">
                        <v-btn
                            class="!bg-green-500 !h-10 !capitalize text-white text-sm rounded font-semibold tracking-wider text-shadow border border-b-0 shadow w-full sm:w-max"
                            v-bind="activatorProps"
                            variant="flat"
                        >
                        Ödül Ekle
                        </v-btn>
                        </template>

                        <template v-slot:default="{ isActive }">
                        <v-card title="Dialog">
                            <v-card-text>
                            1111 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                    <v-dialog class="lg:w-2/3 4xl:w-1/2">
                        <template v-slot:activator="{ props: activatorProps }">
                        <v-btn
                            class="!bg-yellow-400 !h-10 !capitalize text-white text-sm rounded font-semibold tracking-wider text-shadow border shadow w-full sm:w-max"
                            v-bind="activatorProps"
                            variant="flat"
                        >
                        Ödül Güncelle
                        </v-btn>
                        </template>

                        <template v-slot:default="{ isActive }">
                        <v-card title="Dialog">
                            <v-card-text>
                            2222 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                    <v-dialog class="lg:w-2/3 4xl:w-1/2">
                        <template v-slot:activator="{ props: activatorProps }">
                        <v-btn
                            class="!bg-red-500 !h-10 !capitalize text-white text-sm rounded font-semibold tracking-wider text-shadow border shadow w-full sm:w-max"
                            v-bind="activatorProps"
                            variant="flat"
                        >
                        Ödül Sil
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
            </div>

            <h2 @click="showAccordionItem" class="accordion-head" id="accordion-body-3">
                <button type="button" class="flex items-center justify-between w-full p-5 5xl:p-7 font-medium rtl:text-right text-gray-700 border border-color-sss focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                <span class="tracking-wider 4xl:text-lg 5xl:text-xl">Anasayfa Slider'a Resim Ekle</span>
                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                </svg>
                </button>
            </h2>
            <div id="accordion-collapse-body-2" class="hidden accordion-body" aria-labelledby="accordion-body-3">
                <div class="flex gap-3 py-12 px-5 sm:px-8 border 5xl:text-xl border-color-sss tracking-wide">
                    <form action="" class="w-full lg:pe-32">
                        <div class="flex gap-8 items-center">
                            <div class="flex-1">
                                <label class="text-sm 3xl:text-base block text-sm 4xl:text-base mb-2 font-medium text-gray-700" for="">Resimler</label>
                                <div class="flex flex-col md:flex-row items-center gap-4 md:gap-16">
                                    <input class="block w-full text-gray-700 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none" aria-describedby="logo_help" id="logo" type="file">
                                    <button class="w-full md:w-max self-end px-6 py-1.5 bg-green-600 font-medium tracking-wider text-white text-center rounded 5xl:text-xl">Kaydet</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup(){
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

        return{
            showAccordionItem
        }
    }
}
</script>

<style scoped>
    .border-color-sss{
        border-color: #d2c6c6 !important;
    }
</style>