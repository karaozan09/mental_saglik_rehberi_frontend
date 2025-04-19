<template>
  <header class="flex items-center h-[6.5rem] 3xl:h-[6.5rem] 4xl:h-[8rem] 5xl:h-[9rem] gap-6 lg:gap-[4.5rem] px-6 lg:px-12 bg-white shadow text-gray-700 tracking-wider position-relative z-10">
      <router-link :to="{name:'AdminDashboard'}">
        <img class="w-40 4xl:w-48" src="@/assets/img/article.jpg" alt="">
      </router-link>
      <div class="flex-1 flex justify-between items-center">
        <div class="flex items-center gap-5">
           <i id="menu_icon" @click="adminSidebarShow" class="mdi mdi-menu text-gray-700 text-3xl cursor-pointer hidden xl:block"/>
           <span class="font-medium text-xl md:text-xl 5xl:text-3xl text-center tracking-wider hidden sm:block">{{routeName}}</span>
        </div>
        <div class="flex items-center gap-4">
           
           <v-menu
              transition="slide-y-transition"
            >
              <template v-slot:activator="{ props }">
                <v-btn
                  v-bind="props"
                  style="box-shadow:none"
                >
                  <div class="relative">
                    <i class="mdi mdi-bell text-3xl"></i>
                    <span class="absolute right-[2px] top-0 flex h-3 w-3">
                      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                  </div>
                </v-btn>
              </template>
              <v-list>
                <v-list-item class="border-b">
                  <v-list-item-title>Bildirim 1</v-list-item-title>
                </v-list-item>
                <v-list-item class="border-b">
                  <v-list-item-title>Bildirim 2</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>Bildirim 3</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          <span class="dvider w-px bg-gray-400 h-10"></span>
           <div @click="processListShow" class="process-list-head flex items-center gap-14 relative cursor-pointer z-10 hidden xl:flex">
              <div class="flex gap-3">
                <img class="user-img h-12 rounded-full 5xl:h-16" src="@/assets/img/mutlu.jpg" alt="">
                <div class="flex flex-col">
                  <span class="font-medium text-base 5xl:text-2xl">Mutlucan Çelik</span>
                  <span class="text-gray-500 font-normal text-sm 5xl:text-lg">Admin</span>
                </div>
              </div>
              <i class="mdi mdi-chevron-down text-3xl"></i>
              <ul class="process-list">
                <li>
                  <router-link :to="{name:'Settings'}" class="block w-full h-full">
                      <i class="mdi mdi-cog text-lg  me-1"></i> Ayarlar
                  </router-link>
                  
                </li>
                <li>
                  <div @click="logout" class="block w-full h-full">
                    <i class="mdi mdi-logout text-lg me-1"></i> Çıkış
                  </div>
                </li>
              </ul>
           </div>
           <label  id="btn_burger" class="hamburger xl:hidden">
              <input type="checkbox">
              <svg @click="adminSidebarShow" viewBox="0 0 32 32">
                  <path class="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                  <path class="line" d="M7 16 27 16"></path>
              </svg>
          </label>
        </div>
      </div>
  </header>
   <div class="admin-black-screen hidden z-[9]"></div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
export default {

  setup(){
    const router = useRouter()
    const route = useRoute();
    const routeName = computed(() => route.meta.displayName);

    onMounted(() => {
        const processList = document.querySelector('.process-list')
        const sidebar = document.querySelector('.admin-sidebar');
        const burgerInput = document.querySelector('#btn_burger input')
        const blackScreen = document.querySelector('.admin-black-screen');
        let screenWidth = window.innerWidth;

        document.addEventListener('click',function(e){
          if(!e.target.closest('.process-list') && !e.target.closest('.process-list-head')){
            processList.classList.remove('open')
          }

          if(!e.target.closest('#btn_burger') && !e.target.closest('#menu_icon') && !e.target.closest('.sub-menu-head') && sidebar.classList.contains('open') && screenWidth < 1400){
              sidebar.classList.add('close');
              sidebar.classList.remove('open');
              blackScreen.classList.add('hidden')
              burgerInput.checked = false && burgerInput.checked 

              const subMenus = document.querySelectorAll('.sub-menu')
              subMenus.forEach(subMenu => {
                subMenu.classList.remove('open')
              }) 
          }
        })
        
    })

    function processListShow(){
      const processList = document.querySelector('.process-list')
      processList.classList.toggle('open')
    }

    function adminSidebarShow(){
      const sidebar = document.querySelector('.admin-sidebar');
      const blackScreen = document.querySelector('.admin-black-screen');
      blackScreen.classList.toggle('hidden')
      
      if(sidebar.classList.contains('open')){
        sidebar.classList.remove('open');
        sidebar.classList.add('close');
      }else{
        sidebar.classList.remove('close');
        sidebar.classList.add('open');
      }
      
    }

    function logout(){
      router.push({name:'AdminLogin'})
    }
    return{
      processListShow,
      adminSidebarShow,
      logout,
      routeName
    }
  }
}
</script>

<style scoped>
  header{
    height: 5rem;
  }
  .user-img{
      width: 50px;
      border-radius: 50%;
      border: 1px solid #32b4f6;
      box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  }
  .process-list{
    width: 100%;
    position: absolute;
    top: 100%;
    left: 0;
    max-height: 0;
    overflow: hidden;
    background-color: #fff;
    margin-top: 1rem;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    transition: all 0.6s ease;
  }
  .open{
    max-height: 400px;
  }
  .process-list li{
    padding: 0.6rem 1rem;
    border-bottom:1px solid #eee ;
    cursor: pointer;
    transition: all 0.25s;
  }
  .process-list li:last-child{
    border: none;
  }
  .process-list li:hover{
    background-color: #eee;
  }

  .hamburger {
      cursor: pointer;
  }

  .hamburger input {
      display: none;
  }

  .hamburger svg {
      height: 3em;
      transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line {
      fill: none;
      stroke: #333;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-width: 3;
      transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
              stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line-top-bottom {
      stroke-dasharray: 12 63;
  }

  .hamburger input:checked + svg {
      transform: rotate(-45deg);
  }

  .hamburger input:checked + svg .line-top-bottom {
      stroke-dasharray: 20 300;
      stroke-dashoffset: -32.42;
  }
  @media only screen and (max-width:1400px){
    .admin-black-screen{
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        top:0;
        z-index: 9;
        background-color: rgba(0, 0, 0, 0.4);
    }
  }
</style>