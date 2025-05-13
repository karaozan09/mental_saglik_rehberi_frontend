<template>

  <footer class="footer font-bold text-gray-50 mt-24 text-white px-12 py-8 relative tracking-wider sahdow">
   <svg 
      viewBox="0 0 2 1" 
      preserveAspectRatio="none">
        <defs>
          <path id="w" 
            d="
            m0 1v-.5 
            q.5.5 1 0
            t1 0 1 0 1 0
            v.5z" />
        </defs>
        <g>
        <use href="#w" y=".1" fill="#9fa0ff" />
        <use href="#w" y=".2" fill="#ada7ff" />
        <use href="#w" y=".3" fill="#8580F0" />
        </g>
    </svg>
     <div class="flex flex-wrap justify-between gap-20 2xl:gap-5">
        <div class="w-full md:w-[calc(50%-4rem)] 2xl:w-[calc(37%-1rem)] flex items-center 2xl:items-start flex-col">
            <h2 class="text-2xl md:text-3xl 4xl:text-4xl text-center md:text-start tracking-wider">{{settings.footer_top_title}}</h2>
            <p class="footer-ck-content font-normal text-center md:text-start text-[0.95rem] md:text-base 3xl:text-lg 4xl:text-2xl tracking-wide" v-html="settings.footer_top_text"></p>
        </div>
        <div class="w-full md:w-[calc(50%-4rem)] 2xl:w-[calc(20%-1rem)] flex items-center 2xl:items-center flex-col gap-3">
            <h2 class="text-xl 3xl:text-2xl 4xl:text-3xl text-center lg:text-start tracking-wider">Destekler</h2>
            <ul class="flex flex-col gap-3 font-normal text-sm 3xl:text-lg 4xl:text-2xl">
                <li class="tracking-wider transition duration-300 hover:scale-105">
                    <a href="https://www.firat.edu.tr/tr" target="_blank">Fırat Üniversitesi</a>
                </li>
                <li class="tracking-wider transition duration-300 hover:scale-105">
                     <a href="https://www.firatteknokent.com.tr/" target="_blank">Fırat Teknokent</a>
                </li>
            </ul>
        </div>
        <div class="w-full md:w-[calc(50%-4rem)] 2xl:w-[calc(20%-1rem)] flex items-center 2xl:items-center flex-col gap-3">
            <h2 class="text-xl 3xl:text-2xl 4xl:text-3xl tracking-wider">Danışmanlar</h2>
            <ul class="flex flex-col font-normal gap-3 text-sm 3xl:text-lg 4xl:text-2xl">
                <li class="tracking-wider transition duration-300 hover:scale-105">
                     <a href="https://abs.firat.edu.tr/tr/ozkaynak" target="_blank">Fatih ÖZKAYNAK</a>
                </li>
            </ul>
        </div>
        <div class="w-full md:w-[calc(50%-4rem)] 2xl:w-[calc(23%-1rem)] flex items-center 2xl:items-center flex-col gap-1 3xl:gap-3">
            <h2 class="text-xl 3xl:text-2xl 4xl:text-3xl tracking-wider">Sosyal Medya</h2>
             <div class="flex flex-wrap justify-center gap-4 mt-4">
                <div v-for="(socialMedia,index) in socialMedias" :key="index">
                    <SocialMediaCard :data="socialMedia"/>
                </div> 
            </div>
        </div>
    </div>
    <hr class="my-10">
    <p class="footer-bottom-text flex justify-center 3xl:text-lg text-white 4xl:text-2xl tracking-wider text-center font-semibold lg:text-start" v-html="settings.footer_bottom_text"></p>
  </footer>
</template>

<script>
import SocialMediaCard from '@/app/components/frontend/cards/SocialMediaCard.vue';
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
export default {
  components:{
    SocialMediaCard
  },
  setup(){
    const store = useStore();
    const settings = computed(() => store.state.home_home.settings);
    const socialMedias = computed(() => store.state.home_home.social_media);

    onMounted(async() => {
       await store.dispatch('home_home/getSettings');
       await store.dispatch('home_home/getSocialMedia');
    })

    return{
      settings,
      socialMedias
    }
  }
}
</script>

<style scoped>
.footer {
  position: relative;
  width: 100%;
  background: #8280f0;
  min-height: 100px;
  padding: 20px 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.social-icon,
.menu {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  flex-wrap: wrap;
}

.social-icon__item,
.menu__item {
  list-style: none;
}

.social-icon__link {
  font-size: 2rem;
  color: #fff;
  margin: 0 10px;
  display: inline-block;
  transition: 0.5s;
}
.social-icon__link:hover {
  transform: translateY(-10px);
}

.menu__link {
  font-size: 1.2rem;
  color: #fff;
  margin: 0 10px;
  display: inline-block;
  transition: 0.5s;
  text-decoration: none;
  opacity: 0.75;
  font-weight: 300;
}

.menu__link:hover {
  opacity: 1;
}

.footer p {
  color: #fff;
  margin: 15px 0 10px 0;
  font-size: 1rem;
  font-weight: 300;
}
.social-link{
    border-width: 1px;
}
@media only screen and (min-width:1441px){
  .social-link{
      border-width: 2px;
  }
}

use {
  animation: move-forever 2s linear infinite;
}
use:nth-child(2) {
  animation-duration: 2.5s;
  animation-delay: -1.5s;
}
use:nth-child(1) {
  animation-duration: 5s;
}

@keyframes move-forever {
  0% {
    transform: translate(-2px, 0);
  }
  100% {
    transform: translate(0px, 0);
  }
}

svg {
  width: 100%;
  height: 10rem;
  position: absolute;
  top: -10rem;
  left: 0;
}

@keyframes animateWaves {
  0% {
    background-position-x: 1000px;
  }
  100% {
    background-position-x: 0px;
  }
}

@keyframes animate {
  0% {
    background-position-x: -1000px;
  }
  100% {
    background-position-x: 0px;
  }
}

.social-link{
    border-width: 1px;
}
.footer-ck-content p span,
.footer-bottom-text p span {
    color: #fff !important;
}
.footer-bottom-text p a span{
    text-decoration: underline !important;
    color: rgb(196, 196, 246) !important;
}


@media only screen and (min-width:1441px){
    .social-link{
        border-width: 2px;
    }
}
</style>