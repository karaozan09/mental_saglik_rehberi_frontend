<template>
    <div class="flex flex-wrap gap-10 text-gray-700 m-2">
        <div class="shadow w-full sm:w-[calc(50%-1rem)] md:w-[calc(33%-1rem)] lg:w-[calc(25%-1rem)] 3xl:w-[calc(20%-1rem)] 4xl:w-[calc(16.6%-1rem)] h-44 pt-8 p-4 rounded border border-green-200 relative bg-green-100 hover:scale-105 transition duration-300">
            <div class="dashboard-icon-container shadow-lg bg-green-100 border border-green-200">
                <i class="mdi mdi-account-multiple text-3xl "/>
            </div>
            <h1 class="font-bold tracking-wider text-base text-center">Toplam Kullanıcı<br> Sayısı</h1>
            <p class="text-center font-medium tracking-wider mt-4">{{statistics.user_count}}</p>
        </div>
        <div class="shadow w-full sm:w-[calc(50%-1rem)] md:w-[calc(33%-1rem)] lg:w-[calc(25%-1rem)] 3xl:w-[calc(20%-1rem)] 4xl:w-[calc(16.6%-1rem)] h-44 pt-8 p-4 rounded border border-yellow-200 relative bg-yellow-100 hover:scale-105 transition duration-300">
            <div class="dashboard-icon-container shadow-lg bg-yellow-100 border border-yellow-200">
                <i class="mdi mdi-account-tie text-3xl "/>
            </div>
            <h1 class="font-bold tracking-wider text-base text-center">Toplam Personel <br>Sayısı</h1>
            <p class="text-center font-medium tracking-wider mt-4">{{statistics.staff_count}}</p>
        </div>
    </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex'
export default {
  setup(){
      const store = useStore();
      const statistics = computed(() => store.state.admin_dashboard_dashboard.statistics);

      onMounted(async() => {
        await store.dispatch('admin_dashboard_dashboard/getStatistics');
      })
    return{
      statistics
    }
  }
}
</script>

<style scoped>
.dashboard-icon-container{
    width: 50px;
    height: 50px;
    position: absolute;
    top: -1.7rem;
    left: 50%;
    transform: translateX(-50%);

    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

}
</style>