<template>
    <header class="flex justify-between items-center  px-6 md:px-12 2xl:px-20 3xl:px-28 py-6 w-full shadow bg-white small-screen" :class="{ 'shadow-none absolute z-10 bg-transparent' : isHome}">
        <router-link :to="{name:'Home'}" :class="{ 'text-white' : isHome}" class="logo text-2xl tracking-widest font-medium">
          <img src="@/assets/img/logo2.png" class="w-20 h-20" alt="">
        </router-link>
        <ul class="nav__menu flex items-center gap-8 5xl:gap-16 3xl:text-[1.15rem] 4xl:text-xl  5xl:text-2xl tracking-wider font-medium text-gray-700 flex" :class="{ 'text-white' : isHome}">
          <li class="hover:scale-105 transition duration-200">
            <router-link :to="{ name: 'Home', hash:'#home' }" class="tracking-widest">Anasayfa</router-link>
          </li>
          <li class="hover:scale-105 transition duration-200">
            <router-link :to="{ name: 'Home', hash:'#aim' }" class="tracking-widest">Hedefimiz</router-link>
          </li>
          <li class="hover:scale-105 transition duration-200">
            <router-link :to="{ name: 'Home', hash:'#period' }" class="tracking-widest">Süreç</router-link>
          </li>
          <li class="hover:scale-105 transition duration-200">
            <router-link :to="{ name: 'Home', hash:'#team' }" class="tracking-widest">Ekip</router-link>
          </li>
          <li class="hover:scale-105 transition duration-200">
            <router-link :to="{ name: 'Home', hash:'#contact' }" class="tracking-widest">İletişim</router-link>
          </li>
          <li v-if="user" class="hover:scale-105 transition duration-200">
            <router-link :to="{ name: 'UserIndex' }" class="tracking-widest">Panel</router-link>
          </li>
          <li v-if="!user" class="hover:scale-105 transition duration-200">
              <router-link :to="{ name: 'FrontLogin' }" class="py-2 px-7 border border-stone-200 tracking-widest shadow text-[1.2rem] 3xl:text-[1.2rem] !capitalize items-center font-medium !text-green-700 !bg-stone-100 outline-0 rounded">Giriş</router-link>
          </li>
      </ul>

    
      <label id="btn_burger" class="hamburger xl:hidden">
          <input type="checkbox">
          <svg @click="showMobileMenu" viewBox="0 0 32 32">
              <path class="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
              <path class="line" d="M7 16 27 16"></path>
          </svg>
      </label>
  </header>
  <div class="black-screen hidden">

  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
     const user = computed(() => store.state.loginUser)
    const lang = computed(() => store.getters.currentLang);

    const route = useRoute();
    let isHome = computed(() => route.name == 'Home');

    function showMobileMenu(){
        const menu = document.querySelector('.nav__menu');
        const blackScreen = document.querySelector('.black-screen');
        menu.classList.toggle('mobile-menu');
        blackScreen.classList.toggle('hidden');
    }

    const changeLanguage = (lang) => {
      store.dispatch('changeLang', lang);
    };

    document.addEventListener('click',function(e){
      const menu = document.querySelector('.nav__menu');
      const blackScreen = document.querySelector('.black-screen');
      const burgerInput = document.querySelector('#btn_burger input')
      let screenWidth = window.innerWidth;

      if(screenWidth <= 1280 && e.target.closest('a') && e.target.closest('.nav__menu')){
        burgerInput.checked = false
        menu.classList.remove('mobile-menu')
        blackScreen.classList.toggle('hidden')
      }
    })

    return {
      route,
      isHome,
      showMobileMenu,
      lang,
      changeLanguage,
      user
    };
  }
};
</script>

<style scoped>
header{
  position: sticky;
  top: 0;
  z-index: 10;
}

header.sticky {
    position: fixed !important;
    background-color: #fff !important;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px !important;
}
header.sticky .logo{
  bottom: 0 !important;
}
header.sticky li
{
  color: #333;
}
.sidebar__img-container {
  border: 8px solid #E8E8E8;
}
.router-link-active a {
  font-size: 1.5rem;
}
.bg-transparent{
  background-color: transparent !important;
}

  .black-screen{
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 9;
    background-color: rgba(0, 0, 0, 0.4);
  }

 .mobile-menu.nav__menu{
        max-height: 700px;
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
    
    
  @media only screen and (max-width:1279px){
      .nav__menu{
          width: 100%;
          position: absolute;
          top: 6rem;
          left: 0;
          gap: 0 !important;
          max-height: 0;
          overflow: hidden;
          transition: all .5s;

          display: flex;
          flex-direction: column;
          background-color: #6A7280;
          color: #fff !important;
      }
      .nav__menu li{
          width: 100%;
          text-align: center;
          padding: 1.5rem;
          border-bottom: 1px solid  rgba(0, 0, 0, 0.3);
          box-shadow: 1px 1px 1px 1px rgba(199, 204, 219, 0.15);
          color: #fff !important;
      }
      .nav__menu li a{
          display: inline-block;
          width: 100%;
          height: 100%;
      }
      .bg-transparent{
          background-color: #fff !important;
      }
      header.small-screen{
        position: sticky !important;
        box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1) !important;
      }
      header.small-screen .logo{
        bottom: 0 !important;
        width: auto !important;
      }
      header.small-screen .language-list{
        color: #333 !important;
      }
      header.small-screen .router-link-active{
        color: #fff !important;
      }
      header.small-screen .active-language{
        color: #3F78E0 !important;
      }

       @keyframes pulse-glow {
      0% {
        transform: scale(1);
        box-shadow: 0 0 10px #007bff;
      }
      50% {
        transform: scale(1.05);
        box-shadow: 0 0 20px #00bfff, 0 0 30px #00bfff;
      }
      100% {
        transform: scale(1);
        box-shadow: 0 0 10px #007bff;
      }
    }
      
  }

</style>