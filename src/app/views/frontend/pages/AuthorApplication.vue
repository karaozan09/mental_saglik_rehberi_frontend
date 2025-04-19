<template>
    <form @submit.prevent="" class="flex flex-wrap gap-7 sm:px-72 my-12">
        <h1 class="w-full text-center mb-10 font-bold text-4xl text-gray-600 tracking-wider">Yazar Başvuru Formu</h1>
        <div class="w-full md:w-[calc(50%-1rem)]">
            <label class="mb-2 font-medium text-gray-700 text-sm 4xl:text-lg 5xl:text-xl" for="">Ana resim <span class="text-[0.7rem] 5xl:text-base text-red-500">(zorunlu)</span></label>
            <input ref="headerImage" name="header_image" class="block w-full text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 5xl:text-2xl focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-900" type="file">
        </div>
        <div class="w-full md:w-[calc(50%-1rem)]">
            <label class="mb-2 font-medium text-gray-700 text-sm 4xl:text-lg 5xl:text-xl" for="">Diğer resimler</label>
            <input ref="images" name="images" class="block w-full text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 5xl:text-2xl focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-900" type="file" multiple>
        </div>
        <div class="w-full md:w-[calc(50%-1rem)]">
            <label for="" class="mb-2 font-medium text-gray-700 text-sm 4xl:text-lg 5xl:text-xl">Haber Adı <span class="text-[0.7rem] 5xl:text-base text-red-500">(zorunlu)</span></label>
            <input type="text" name="title" class="bg-gray-50 block w-full rounded-md border-0 py-1 3xl:py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400"/>
        </div>
        <div class="w-full md:w-[calc(50%-1rem)]">
            <label for="" class="mb-2 font-medium text-gray-700 text-sm 4xl:text-lg 5xl:text-xl">İngilizce Haber Adı <span class="text-[0.7rem] 5xl:text-base text-red-500">(zorunlu)</span></label>
            <input type="text" name="title_en" class="bg-gray-50 block w-full rounded-md border-0 py-1 3xl:py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400"/>
        </div>
        <div class="w-full">
            <label for="" class="mb-2 font-medium text-gray-700 text-sm 4xl:text-lg 5xl:text-xl">Haber <span class="text-[0.7rem] 5xl:text-base text-red-500">(zorunlu)</span></label>
            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
        </div>

        <div class="flex items-center mt-5">
            <input name="highlighted" id="highlighted_create" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            <label for="highlighted_create" class="ms-2 cursor-pointer font-medium text-gray-700">Öne Çıkar</label>
        </div>

        <div class="w-full">
            <button type="submit" class="w-full !bg-green-500  py-1.5 !capitalize text-white 5xl:text-2xl rounded font-semibold tracking-widest text-shadow border shadow">
                BAŞVUR YAP
            </button>
        </div>
    </form>
</template>

<script>
export default {

}
</script>

<style>

</style>