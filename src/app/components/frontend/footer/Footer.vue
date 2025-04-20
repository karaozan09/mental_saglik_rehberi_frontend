<template>

  <footer id="contact" class="footer font-bold text-gray-50 mt-24 text-white px-12 py-8 relative tracking-wider sahdow">
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
    <div class="flex flex-wrap justify-center gap-14">
        <div class="w-full  lg:w-[calc(30%-4rem)] flex items-center 2xl:items-start flex-col ">
            <h2 class="text-xl 3xl:text-2xl 4xl:text-3xl tracking-wider">İletişim Bilgileri</h2>
            <div class="flex flex-col items-center lg:items-start gap-1 font-normal mt-2">
              <div>
                <span class="w-24 font-bold">Email</span>:
                <span>mtlcnclk98@gmail.com</span>
              </div>
              <div>
                <span class="w-24 font-bold">Email</span>:
                <span>karaozanb@gmail.com</span>
              </div>
              <div class="text-center lg:text-start">
                <span class="w-24 font-bold">Adres</span>:
                <span class="text-center">Burj Khalifa / Kat:82 / No:8029 / Dubai Center</span>
              </div>
            </div>
        </div>
        <div class="w-full  lg:w-[calc(30%-4rem)] flex items-center 2xl:items-center flex-col gap-3">
            <h2 class="text-xl 3xl:text-2xl 4xl:text-3xl tracking-wider">Proje Linkleri</h2>
            <div class="flex flex-col gap-1 font-normal mt-2">
              <div>
                <span class="w-24 font-bold">Github</span>:
                <a href="https://github.com/karaozan09/mental_saglik_rehberi_frontend" class="underline" target="_blank">Github adresimiz</a>
              </div>
              <div>
                <span class="w-24 font-bold">Trello</span>:
                <a href="https://trello.com/b/fG3yBMS0/guncel-konular" class="underline" target="_blank">Trello adresimiz</a>
              </div>
            </div>
        </div>
        <div class="w-full  mb-3 lg:w-[calc(30%-4rem)] flex items-center items-center flex-col items-end gap-1 3xl:gap-3">
            <h2 class="text-xl 3xl:text-2xl 4xl:text-3xl tracking-wider">Sosyal Medya</h2>
             <div class="flex flex-wrap justify-center gap-4 mt-4">
                <a class="flex justify-center items-center social-link w-10 h-10 rounded-full transition duration-300 hover:scale-110" href="#">
                    <i class="mdi mdi-instagram text-xl"></i>
                </a>
                 <a class="flex justify-center items-center social-link w-10 h-10 rounded-full transition duration-300 hover:scale-110" href="#">
                    <i class="mdi mdi-linkedin text-xl"></i>
                </a>
                <a class="flex justify-center items-center social-link w-10 h-10 rounded-full transition duration-300 hover:scale-110" href="#">
                    <i class="mdi mdi-youtube text-xl"></i>
                </a>
                <a class="flex justify-center items-center social-link w-10 h-10 rounded-full transition duration-300 hover:scale-110" href="#">
                    <i class="mdi mdi-twitter text-xl"></i>
                </a>
                <a class="flex justify-center items-center social-link w-10 h-10 rounded-full transition duration-300 hover:scale-110" href="#">
                    <i class="mdi mdi-facebook text-xl"></i>
                </a>
               
            </div>
        </div>
    </div>
    <hr class="my-4">
    <p class="text-lg 4xl:text-xl tracking-widest font-medium text-center">
        Copyright Ⓒ 2025 Ayda. Tüm hakları saklıdır.
    </p>
  </footer>
</template>

<script>
export default {

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
</style>