<template>
    <div class="flex flex-wrap gap-10 text-gray-700 m-2 mt-12">
        <div class="w-full sm:w-[calc(50%-1.4rem)] lg:w-[calc(33%-2rem)] 4xl:w-[calc(25%-2rem)] position-relative">
          <router-link :to="{name:''}" class="card-dashboard 3xl:text-lg tracking-wider min-h-48 flex flex-col gap-4 justify-center items-center rounded">
            <h2 class="font-bold text-center">Alınan Toplam Burs</h2>
            <span class="font-medium">₺3850</span>
          </router-link>
          <div class="card-dashboard-top-shape bg-blue-500"></div>
          <div class="card-dashboard-bottom-shape bg-blue-500"></div>
        </div>
        <div class="w-full sm:w-[calc(50%-1.4rem)] lg:w-[calc(33%-2rem)] 4xl:w-[calc(25%-2rem)] position-relative">
          <router-link :to="{name:''}" class="card-dashboard 3xl:text-lg tracking-wider min-h-48 flex flex-col gap-4 justify-center items-center rounded">
            <h2 class="font-bold text-center">Mesajlar</h2>
            <span class="font-medium">3</span>
          </router-link>
          <div class="card-dashboard-top-shape bg-green-500"></div>
          <div class="card-dashboard-bottom-shape bg-green-500"></div>
        </div>  
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>