<template>
  <footer class="footer font-bold mt-52 text-gray-50  text-white px-12 py-8  tracking-wider sahdow">
    <div class="waves">
      <div class="wave" id="wave1"></div>
      <div class="wave" id="wave2"></div>
      <div class="wave" id="wave3"></div>
      <div class="wave" id="wave4"></div>
    </div>
    <div class="flex flex-wrap justify-between gap-20">
        <div class="w-full md:w-[calc(50%-4rem)] 2xl:w-[calc(42%-1rem)] flex items-center 2xl:items-start flex-col ">
            <h2 class="text-3xl 4xl:text-4xl text-center lg:text-start tracking-wider">Coding Adventure</h2>
            <p class="font-medium text-center 2xl:text-start text-[.9rem] 3xl:text-lg 4xl:text-2xl tracking-wide">Yazılım dünyasında ilerlemek isteyenler için oluşturulmuş bir platformdur. Ben Mutlucan Çelik,Web Frontend  yolculuğunuzda size rehberlik etmek için buradayım. Her adımda yanınızda olmaya çalışacağım, hedeflerinize ulaşmanızda destek olacağım. Unutmayın, sabır ve gayretle çalışmaya devam ettikçe, başarının kapıları aralanacaktır 😊</p>
        </div>
        <div class="w-full md:w-[calc(50%-4rem)] 2xl:w-[calc(23%-1rem)] flex items-center 2xl:items-center flex-col gap-3">
            <h2 class="text-xl 3xl:text-2xl 4xl:text-3xl text-center lg:text-start tracking-wider">Sık kullanılanlar</h2>
            <ul class="flex flex-col gap-3 font-medium text-sm 3xl:text-lg 4xl:text-2xl">
                <li class="tracking-wider transition duration-300 hover:scale-105">
                     <router-link :to="{name:''}">Eğitimler</router-link>
                </li>
                <li class="tracking-wider transition duration-300 hover:scale-105">
                    <router-link :to="{name:''}">Yazarlar</router-link>
                </li>
                <li class="tracking-wider transition duration-300 hover:scale-105">
                     <router-link :to="{name:''}">Makaleler</router-link>
                </li>
            </ul>
        </div>
        <div class="w-full mx-auto 2x:mx-0 md:w-[calc(50%-4rem)] 2xl:w-[calc(23%-1rem)] flex items-center 2xl:items-center flex-col items-end gap-1 3xl:gap-3">
            <h2 class="text-xl 3xl:text-2xl 4xl:text-3xl tracking-wider">Sosyal Medya</h2>
             <div class="flex flex-wrap justify-center gap-4 mt-4">
                <a class="flex justify-center items-center social-link w-10 h-10 rounded-full transition duration-300 hover:scale-110" href="https://www.instagram.com/teknolojisebiza/" target="_blank">
                    <i class="mdi mdi-instagram text-xl"></i>
                </a>
                 <a class="flex justify-center items-center social-link w-10 h-10 rounded-full transition duration-300 hover:scale-110" href="https://www.linkedin.com/company/sebizateknoloji/" target="_blank">
                    <i class="mdi mdi-linkedin text-xl"></i>
                </a>
                <a class="flex justify-center items-center social-link w-10 h-10 rounded-full transition duration-300 hover:scale-110" href="https://www.youtube.com/@SEBIZATECHNOLOGY" target="_blank">
                    <i class="mdi mdi-youtube text-xl"></i>
                </a>
                <a class="flex justify-center items-center social-link w-10 h-10 rounded-full transition duration-300 hover:scale-110" href="https://x.com/sebizateknoloji" target="_blank">
                    <i class="mdi mdi-twitter text-xl"></i>
                </a>
                <a class="flex justify-center items-center social-link w-10 h-10 rounded-full transition duration-300 hover:scale-110" href="https://www.facebook.com/sebizateknoloji" target="_blank">
                    <i class="mdi mdi-facebook text-xl"></i>
                </a>
               
            </div>
        </div>
    </div>
    <hr class="my-6">
    <p class="text-lg 4xl:text-2xl tracking-widest font-medium text-center lg:text-start">
        Tevekkül et ve sadece çalış.
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
  background: #3586ff;
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

.wave {
  position: absolute;
  top: -100px;
  left: 0;
  width: 100%;
  height: 100px;
  background: url("https://i.ibb.co/wQZVxxk/wave.png");
  background-size: 1000px 100px;
}

.wave#wave1 {
  z-index: 1000;
  opacity: 1;
  bottom: 0;
  animation: animateWaves 4s linear infinite;
}

.wave#wave2 {
  z-index: 999;
  opacity: 0.5;
  bottom: 10px;
  animation: animate 4s linear infinite !important;
}

.wave#wave3 {
  z-index: 1000;
  opacity: 0.2;
  bottom: 15px;
  animation: animateWaves 3s linear infinite;
}

.wave#wave4 {
  z-index: 999;
  opacity: 0.7;
  bottom: 20px;
  animation: animate 3s linear infinite;
}

@keyframes animateWaves {
  0% {
    background-position-x: 1000px;
  }
  100% {
    background-positon-x: 0px;
  }
}

@keyframes animate {
  0% {
    background-position-x: -1000px;
  }
  100% {
    background-positon-x: 0px;
  }
}
</style>