<template>
    <div class="flex flex-wrap gap-10 text-gray-700 m-2">
        <div class="w-full sm:w-[calc(50%-1.4rem)] lg:w-[calc(33%-2rem)] 3xl:w-[calc(25%-2rem)] position-relative">
          <router-link :to="{name:'UserStudents'}" class="card-dashboard tracking-wider 3xl:text-lg min-h-48 flex flex-col gap-4 justify-center items-center rounded">
            <h2 class="font-bold text-center">Toplam Faaliyet<br>Sayısı</h2>
            <span class="font-medium">9</span>
          </router-link>
          <div class="card-dashboard-top-shape bg-blue-500"></div>
          <div class="card-dashboard-bottom-shape bg-blue-500"></div>
        </div>
        <div class="w-full sm:w-[calc(50%-1.4rem)] lg:w-[calc(33%-2rem)] 3xl:w-[calc(25%-2rem)] position-relative">
          <router-link :to="{name:'UserDonors'}" class="card-dashboard tracking-wider 3xl:text-lg min-h-48 flex flex-col gap-4 justify-center items-center rounded">
            <h2 class="font-bold text-center">Toplam Bağışçı<br>Sayısı</h2>
            <span class="font-medium">300</span>
          </router-link>
          <div class="card-dashboard-top-shape bg-red-500"></div>
          <div class="card-dashboard-bottom-shape bg-red-500"></div>
        </div>
        <div class="w-full sm:w-[calc(50%-1.4rem)] lg:w-[calc(33%-2rem)] 3xl:w-[calc(25%-2rem)] position-relative">
          <router-link :to="{name:'UserStudents'}" class="card-dashboard tracking-wider 3xl:text-lg min-h-48 flex flex-col gap-4 justify-center items-center rounded">
            <h2 class="font-bold text-center">Toplam Öğrenci<br>Sayısı</h2>
            <span class="font-medium">1200</span>
          </router-link>
          <div class="card-dashboard-top-shape bg-orange-400"></div>
          <div class="card-dashboard-bottom-shape bg-orange-400"></div>
        </div>
        <div class="w-full sm:w-[calc(50%-1.4rem)] lg:w-[calc(33%-2rem)] 3xl:w-[calc(25%-2rem)] position-relative">
          <router-link :to="{name:'AdminMessages'}" class="card-dashboard tracking-wider 3xl:text-lg min-h-48 flex flex-col gap-4 justify-center items-center rounded">
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

<style scoped>

</style>