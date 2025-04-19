<template>
   <main>
      <section>
         <swiper
            :pagination="{
               dynamicBullets: true,
            }"
            :navigation="true"
            :modules="modules"
            :autoplay="{
               delay: 10000,
               disableOnInteraction: false,
            }"
            class="mySwiper home-swiper"
         >
              <swiper-slide>
                  <div class="img-container w-full h-full relative">
                     <img class="w-full h-full" src="@/assets/img/home1.jpg" alt="">
                     <div class="slider-text-container items-center s:items-start">
                        <h2 class="slider-text-head text-lg text-center s:text-start sm:text-xl xl:text-[1.7rem] xl:leading-[2.2rem] 3xl:text-[1.9rem] 4xl:text-[2.4rem] 4xl:leading-[3.4rem] font-bold tracking-wider">RİSKAL®: Yapısal Afet Risk Kalkanı® yazılımı ve sistemi başarıyla tamamlandı</h2>
                        <p class="slider-text-body text-center s:text-start text-[.8rem] xs:text-sm sm:text-[.95rem] md:text-base 3xl:text-lg 3xl:leading-[1.6rem] 4xl:text-[1.45rem] 4xl:leading-[2rem] tracking-wide font-medium line-clamp-5">Kısa adı RİSKAL® olan “Yapısal Afet Risk Kalkanı®” yazılımı başarı ile tamamlandı. RİSKAL® yazılımı çeyrek asırlık bir deprem tecrübesinin yazılıma dönüşmüş halidir. Büyük fedakârlıklarla, bir yılı aşkın bir sürede, on bir kişilik güçlü bir mühendis ekibi ile üretilebilmiştir. RİSKAL®, yapılar için bütünleşik deprem risk azaltma (yapı envanteri oluşturma, online temel deprem eğitimleri, veri yönetimi, risk analizleri yapma) ve hasar tespit yönetim sistemidir. Bina envanterinin standart, hızlı, ekonomik ve kullanılabilir bir şekilde oluşturulabilmesi için uzman akademisyenlerin danışmanlığında RİSKAL® yazılımı geliştirilmiştir. RİSKAL® yazılımının temel amacı, nitelikli bina envanterinin oluşturulmasını, verilerin kaydedilmesini, sınıflandırılmasını, </p>
                        <router-link class="text-[0.8rem] sm:text-[.9rem] 3xl:text-base 4xl:text-xl 5xl:text-2xl slider-text-button btn-anim border-2 py-1 px-4 s:px-6 s:mt-3 md:py-2 md:px-7 mt-3 md:mt-5 w-max rounded-full font-medium tracking-wider">Devamını oku</router-link>
                     </div>
                  </div>
               </swiper-slide>
               <swiper-slide>
                  <div class="img-container w-full h-full relative">
                     <img class="w-full h-full" src="@/assets/img/home2.jpg" alt="">
                     <div class="slider-text-container items-center s:items-start">
                        <h2 class="slider-text-head text-lg text-center s:text-start sm:text-xl xl:text-[1.7rem] xl:leading-[2.2rem] 3xl:text-[1.9rem] 4xl:text-[2.4rem] 4xl:leading-[3.4rem] font-bold tracking-wider">{{lang == 'tr' ? 'RİSKOLOJİ®: Teknolojik Yapı Sağlığı İzleme ve Değerlendirme yazılım ve sistemi, son viraja girdi.' : 'RISKOLOJI®: Technological Building Health Monitoring and Evaluation software and system has entered the final milestone.'}}</h2>
                        <p class="slider-text-body text-center s:text-start text-[.8rem] xs:text-sm sm:text-[.95rem] md:text-base 3xl:text-lg 3xl:leading-[1.6rem] 4xl:text-[1.45rem] 4xl:leading-[2rem] tracking-wide font-medium line-clamp-5">{{lang == 'tr' ? 'Kısa adı RİSKOLOJİ® olan “Yapı Sağlığı İzleme ve Değerlendirme” yazılımı son viraja girdi ve artık tamamlanmak üzere olduğunu ilan etmekten büyük bir mutluluk duyuyoruz. RİSKOLOJİ® yazılımı çeyrek asırlık bir yapı mühendisliği tecrübesinin yazılıma ve hatta bir metodolojiye dönüşmüş halidir. Büyük fedakârlıklarla, iki yılı aşkın bir sürede, on üç kişilik güçlü bir mühendis ekibi ile üretilebilmiştir. RİSKOLOJİ®, yapı sağlığı ölçüm sistemi ve cihazları planlanmasından, izleme, kaydetme, hesaplama, değerlendirme ve raporlamaya kadar tüm metodolojiyi barındıran bir yazılım ve sistemdir. Yapı sağlığı, deprem güvenliğinin belirlenmesi için sensörler yardımıyla ölçümler yapılması ve bunların analiz edilerek değerlendirilmesidir. İnsan sağlığının, tahlil, röntgen ve tansiyon cihazı ile takip edildiği gibi yapı sağlığının da sensörler gibi teknolojik cihazlarla takip edilmesi ve kontrol altında tutulması gerekir.  Bu şekilde yapı sağlığının takibi teknolojik yapı sağlığı izleme sistemleriyle mümkündür.' 
                           : 'The “Structural Health Monitoring and Evaluation” software, abbreviated as RISKOLOJI®, has entered its final milestone and we are very happy to announce that it is now nearing completion. RISKOLOJI® software is the transformation of a quarter-century of structural engineering experience into software and even a methodology. It was produced with great sacrifices, over a period of two years, with a strong team of thirteen engineers. RISKOLOJI® is a software and system that includes the entire methodology from planning the structural health measurement system and devices to monitoring, recording, calculation, evaluation and reporting. Structural health is the measurement of earthquake safety with the help of sensors and their analysis and evaluation. Just as human health is monitored with analysis, x-ray and blood pressure devices, structural health should be monitored and kept under control with technological devices such as sensors. In this way, monitoring structural health is possible with technological structural health monitoring systems.'}}</p>
                        <router-link class="text-[0.8rem] sm:text-[.9rem] 3xl:text-base 4xl:text-xl 5xl:text-2xl slider-text-button btn-anim border-2 py-1 px-4 s:px-6 s:mt-3 md:py-2 md:px-7 mt-3 md:mt-5 w-max rounded-full font-medium tracking-wider">{{lang == 'tr' ? 'Devamını oku' : 'Read more'}}</router-link>
                     </div>
                  </div>
               </swiper-slide>
               <swiper-slide>
                  <div class="img-container w-full h-full relative">
                     <img class="w-full h-full" src="@/assets/img/home3.jpg" alt="">
                     <div class="slider-text-container items-center s:items-start">
                        <h2 class="slider-text-head text-lg text-center s:text-start sm:text-xl xl:text-[1.7rem] xl:leading-[2.2rem] 3xl:text-[1.9rem] 4xl:text-[2.4rem] 4xl:leading-[3.4rem] font-bold tracking-wider">{{lang == 'tr' ? 'BETONMETRE®: Tahribatsız beton test cihazı tamamlanmak üzere.' : 'BETONMETRE®: Non-destructive concrete testing device is about to be completed.'}}</h2>
                        <p class="slider-text-body text-center s:text-start text-[.8rem] xs:text-sm sm:text-[.95rem] md:text-base 3xl:text-lg 3xl:leading-[1.6rem] 4xl:text-[1.45rem] 4xl:leading-[2rem] tracking-wide font-medium line-clamp-5">{{lang == 'tr' ? 'Kısa adı BETONMETRE® olan taşınabilir tahribatsız beton test cihazımızın tamamlanmak üzere olduğunu büyük bit mutluluk ile paylaşıyoruz. BETONMETRE® cihazı ve yerinde beton dayanımı belirleme yöntemi, çeyrek asırlık bir deprem tecrübesinin bir metot ve bir cihaza dönüşmüş halidir. Büyük fedakârlıklarla, sekiz yılı aşkın bir sürede geliştirilmiş ve üretilmiştir. BETONMETRE® cihazı ile yerinde beton dayanımını, tahribatsız olarak hızlı, güvenilir ve ekonomik olarak belirlemek mümkündür. BETONMETRE® cihazı bir Ar-Ge projesi ürünüdür. BETONMETRE® beton dayanımının tespitinde karot yerine geçebilecek çok önemli bir cihazdır. Bu bağlamda BETONMETRE® deprem risk azaltma alanında da çok önemli katkılar sunacaktır.' 
                           : 'We are happy to share that our portable non-destructive concrete testing device, abbreviated as BETONMETRE®, is nearing completion. BETONMETRE® device and the method for determining on-site concrete strength are the transformation of a quarter-century of earthquake experience into a method and a device. It was developed and produced with great sacrifices over a period of eight years. With the BETONMETRE® device, it is possible to determine on-site concrete strength non-destructively, quickly, reliably and economically. BETONMETRE® device is a product of an R&D project. BETONMETRE® is a very important device that can replace core drilling in determining concrete strength. In this context, BETONMETRE® will also make very important contributions in the field of earthquake risk reduction.'}}</p>
                        <router-link class="text-[0.8rem] sm:text-[.9rem] 3xl:text-base 4xl:text-xl 5xl:text-2xl slider-text-button btn-anim border-2 py-1 px-4 s:px-6 s:mt-3 md:py-2 md:px-7 mt-3 md:mt-5 w-max rounded-full font-medium tracking-wider">{{lang == 'tr' ? 'Devamını oku' : 'Read more'}}</router-link>
                     </div>
                  </div>
               </swiper-slide>
         </swiper>
      </section>
      <section class="py-32 px-8 s:px-16 lg:px-24 4xl:px-32">
         <di class="flex flex-col items-center gap-2 mb-12 2xl:mb-28">
          <img src="@/assets/img/purpose.jpg" alt="" class="w-40 h-32">
            <h2 class="text-2xl 3xl:text-[1.7rem] 4xl:text-3xl 5xl:text4[2.6rem] text-gray-700 text-center leading-normal tracking-wider font-bold mb-4">
               <span>Hedef ve Amaçlarımız</span>
            </h2>
         </di>
         <div class="flex flex-col gap-16 2xl:gap-0 2xl:flex-row justify-between">
            <div class="2xl:w-[calc(50%-1rem)] flex flex-col gap-3 2xl:gap-6 4xl:gap-8">
                <h3 class="text-[1.5rem] 4xl:text-3xl text-center 2xl:text-start  text-gray-700 font-medium tracking-wider">Önceliğimiz, yazılım alanına yeni başlayanlara destek olmaktır.</h3>
                <p class="text-gray-600 text-center 2xl:text-start text-[.97rem] 2xl:text-base 4xl:text-[1.35rem] tracking-wide leading-normal font-normal">Yazılım dünyasına adım atanlar için rehberlik sunmayı amaçlıyoruz. Alanında yetkin eğitmeler ile temel bilgilerden ileri düzey becerilere kadar her seviyede destek sağlayarak, öğrenme sürecini kolaylaştırıyoruz. Amacımız, herkesin bu alanda kendini geliştirmesine ve başarılı bir kariyer yolculuğuna başlamasına yardımcı olmaktır...</p>
                <router-link class="hidden 2xl:block text-center 2xl:text-start px-8 py-3 sm:text-base 4xl:text-[1.35rem] tracking-wider font-medium text-white w-max transition bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:border-[#3f78e0] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[.5rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]">Hakkımızda daha fazla bilgi edin</router-link>
            </div>
            <div class="2xl:w-[calc(50%-1rem)] md:px-12">
               <img src="@/assets/img/purpose-big.jpg" class="w-full md:w-2/3 mx-auto 2xl:w-full" alt="">

                <router-link class="block 2xl:hidden text-center w-full  mt-12 rounded text-center 2xl:text-start 2xl:block px-6 md:px-12 py-4 sm:text-base 4xl:text-[1.35rem]  tracking-wider font-medium text-white transition bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:border-[#3f78e0] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]">Hakkımızda daha fazla bilgi edin</router-link>

            </div>
         </div>
      </section>
      <section style="background-color:#Fff;" class="flex flex-col 2xl:flex-row gap-24 md:gap-32 2xl:gap-0 justify-between py-32 2xl:pe-32">
         <div class="w-full 2xl:w-[calc(50%-1rem)] 5xl:w-[calc(43%-1rem)] px-12 sm:px-24">
            <img class=" mx-auto rounded" src="@/assets/img/education5.jpg" alt="">
         </div>
         <div class="2xl:w-[calc(50%-1rem)] 5xl:w-[calc(57%-1rem)] flex flex-col gap-5 2xl:gap-10 px-12 s:px-16 lg:px-24 2xl:px-0">
            <h2 class="text-center sm:text-start text-2xl 2xl:text-3xl 5xl:text-[3rem] text-gray-700 leading-normal tracking-wider font-bold">Eğitim sürecine yakından göz atın...</h2>
            <p class="text-center sm:text-start text-gray-600 text-[.91rem] 4xl:text-xl tracking-wider leading-normal font-normal">Eğitim programlarımız da, ödevlendirme ve düzenli ilerleme kontrolleriyle destekleyerek, katılımcıların bilgi birikimini adım adım artırmalarını sağlıyoruz. Yazılım alanına ilgisi olan herkesin alanında uzmanlaşmasına yardımcı olmayı hedefliyoruz.</p>
            <div class="flex flex-wrap flex-col sm:flex-row gap-6 3xl:gap-8">
               <div class="sm:w-[calc(50%-1rem)] flex items-center items-center gap-2">
                  <span class="btn-circle pointer-events-none !mr-4 xl:text-[1.3rem] !w-6 !h-6 5xl:!w-10 5xl:!h-10 text-[calc(1.255rem_+_0.06vw)] inline-flex items-center justify-center leading-none !p-0 !rounded-[100%]"><span class="icon-check table-cell text-center align-middle font-bold m-[0_auto]"><i class="mdi mdi-check text-sm 5xl:text-xl"></i></span></span>
                  <p class="text-gray-600 text-sm 3xl:text-base 5xl:text-2xl tracking-wider leading-normal font-normal">Sıfırdan ileri düzeye kadar yazılım eğitimi sunuyoruz.</p>
               </div>
               <div class="sm:w-[calc(50%-1rem)] flex items-center gap-2">
                  <span class="btn-circle pointer-events-none !mr-4 xl:text-[1.3rem] !w-6 !h-6 5xl:!w-10 5xl:!h-10 text-[calc(1.255rem_+_0.06vw)] inline-flex items-center justify-center leading-none !p-0 !rounded-[100%]"><span class="icon-check table-cell text-center align-middle font-bold m-[0_auto]"><i class="mdi mdi-check text-sm 5xl:text-xl"></i></span></span>
                  <p class="text-gray-600 text-sm 3xl:text-base 5xl:text-2xl tracking-wider leading-normal font-normal">Her aşamada rehberlik ve yönlendirme yapıyoruz.</p>
               </div>
               <div class="sm:w-[calc(50%-1rem)] flex items-center gap-2">
                  <span class="btn-circle pointer-events-none !mr-4 xl:text-[1.3rem] !w-6 !h-6 5xl:!w-10 5xl:!h-10 text-[calc(1.255rem_+_0.06vw)] inline-flex items-center justify-center leading-none !p-0 !rounded-[100%]"><span class="icon-check table-cell text-center align-middle font-bold m-[0_auto]"><i class="mdi mdi-check text-sm 5xl:text-xl"></i></span></span>
                  <p class="text-gray-600 text-sm 3xl:text-base 5xl:text-2xl tracking-wider leading-normal font-normal">Ödevlendirme sistemiyle öğrenimi pekiştiriyoruz.</p>
               </div>
               <div class="sm:w-[calc(50%-1rem)] flex items-center gap-2">
                  <span class="btn-circle pointer-events-none !mr-4 xl:text-[1.3rem] !w-6 !h-6 5xl:!w-10 5xl:!h-10 text-[calc(1.255rem_+_0.06vw)] inline-flex items-center justify-center leading-none !p-0 !rounded-[100%]"><span class="icon-check table-cell text-center align-middle font-bold m-[0_auto]"><i class="mdi mdi-check text-sm 5xl:text-xl"></i></span></span>
                  <p class="text-gray-600 text-sm 3xl:text-base 5xl:text-2xl tracking-wider leading-normal font-normal">İlerleme kontrolleriyle gelişimi takip ediyoruz.</p>
               </div>
            </div>
            <router-link class="px-6 md:px-8 py-3 4xl:py-4 mt-6 sm:text-base 4xl:text-[1.35rem] tracking-wider text-center font-medium text-white w-full md:w-max transition bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:border-[#3f78e0] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] rounded md:!rounded-[.5rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]">Eğitimlerimiz hakkında daha fazla bilgi edin</router-link>
         </div>
      </section>
      <section class="py-32 px-8 md:px-16 2xl:px-32 3xl:px-48 4xl:px-72 5xl:px-96">
         <div class="flex flex-col items-center gap-2 mb-12">
          <img src="@/assets/img/article.jpg" alt="" class="w-40 h-32">
            <h2 class="text-2xl 3xl:text-3xl 5xl:text-[3rem] text-gray-700 text-center leading-normal tracking-wider font-bold mb-4">Gelişmeyi ve geliştirmeyi amaçlayan yazarlarımız</h2>
         </div>
         <swiper
            :pagination="{
               clickable: true,
            }"
            :autoplay="{
               delay: 7000,
               disableOnInteraction: false,
            }"
            :breakpoints="breakpoints"
            :modules="modules"
            class="mySwiper pb-16 publications-swiper"
         >
            <swiper-slide class="p-8">
               <router-link :to="{name:'UserDetail'}" class="writer-card w-full flex flex-col gap-5 cursor-pointer">
                  <div class="w-full h-full overflow-hidden border rounded-2xl shadow">
                     <img class="w-full h-full object-cover rounded-2xl hover:scale-110 transition duration-500 mx-auto" src="@/assets/img/mutlu.jpg" alt="">
                  </div>
                  <div class="flex flex-col gap-1">
                     <h2 class="font-bold text-lg 3xl:text-xl 4xl:text-2xl text-center xl:text-start text-gray-700">Mutlucan Çelik</h2>
                      <div class="text-gray-500 text-[.83rem] 3xl:text-sm 5xl:text-2xl flex gap-3 justify-center xl:justify-between items-center">
                        <span>
                           Siber Güvenlik
                        </span>
                     </div>
                  </div>
               </router-link>
            </swiper-slide>
           <swiper-slide class="p-8">
               <router-link :to="{name:'UserDetail'}" class="writer-card w-full flex flex-col gap-5 cursor-pointer">
                  <div class="w-full h-full overflow-hidden border rounded-2xl shadow">
                     <img class="w-full h-full object-cover object-right rounded-2xl hover:scale-110 transition duration-500 mx-auto" src="@/assets/img/main.jpg" alt="">
                  </div>                  
                  <div class="flex flex-col gap-1">
                     <h2 class="font-bold text-lg 3xl:text-xl 4xl:text-2xl text-center xl:text-start text-gray-700">Fatih Sönmez</h2>
                      <div class="text-gray-500 text-[.83rem] 3xl:text-sm 5xl:text-2xl flex gap-3 justify-center xl:justify-between items-center">
                        <span>
                           Frontend Developer
                        </span>
                     </div>
                  </div>
               </router-link>
            </swiper-slide>
            <swiper-slide class="p-8">
               <router-link :to="{name:'UserDetail'}" class="writer-card w-full flex flex-col gap-5 cursor-pointer">
                  <div class="w-full h-full overflow-hidden border rounded-2xl shadow">
                     <img class="w-full h-full object-cover rounded-2xl hover:scale-110 transition duration-500 mx-auto" src="@/assets/img/mutlu2.jpg" alt="">
                  </div>                  
                  <div class="flex flex-col gap-1">
                     <h2 class="font-bold text-lg 3xl:text-xl 4xl:text-2xl text-center xl:text-start text-gray-700">Onur Sarıgül</h2>
                      <div class="text-gray-500 text-[.83rem] 3xl:text-sm 5xl:text-2xl flex gap-3 justify-center xl:justify-between items-center">
                        <span>
                           Backend Developer
                        </span>
                     </div>
                  </div>
               </router-link>
            </swiper-slide>
         </swiper>
      </section>
   </main>
</template>


<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/pagination';
  import 'swiper/css/navigation';
  import 'swiper/css/autoplay';

  // import required modules
  import { Pagination,Navigation,Autoplay } from 'swiper/modules';
  import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      let isHome = computed(() => route.name == 'Home')
      let screenWidth = window.innerWidth;

      const store = useStore();
      const lang = computed(() => store.getters.currentLang);

       const breakpoints = {
         670: {
         slidesPerView: 2,
         },
         992: {
         slidesPerView: 3,
         },
      };

      onMounted(() => {
         const header = document.querySelector('header');

         if(screenWidth >= 1280){
            window.addEventListener('scroll', () => {
               if (window.scrollY > 100 && isHome) {
                  header.classList.add('sticky');
               } else {
                  header.classList.remove('sticky');
               }
            });
         }
    })
      return {
        modules: [Pagination,Navigation,Autoplay],
        breakpoints,
        lang
      };
    },
  };
</script>

<style  >
.btn-circle{
   background-color: #E0E9F9;
}
.number{
   color: #3F78E0;
   font-size: 1.3rem;
}
.icon-check{
   color: #3F78E0;
   font-size: 1rem;
}
.home-swiper{
    height:45vh;
  }
.slider-text-container{
   width: 70%;
   color: #fff;
   position: absolute;
   left: 16%;
   top: 18%;
   text-shadow: 1px 1px 1px rgba(0, 0, 0, 1), 
               3px 3px 5px rgba(0, 0, 0, .1); 


   display: flex;
   flex-direction: column;
   gap: 15px;
}

.swiper-slide {
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-button-next,
.swiper-button-prev{
   background-color: #E9EAEA;
   border-radius: 50%;
   width: 25px;
   height: 25px;
   top: 55%;
   color: gray;
}
.swiper-button-next:after,
.swiper-button-prev:after{
   font-size: 1rem;
}
.home-swiper .swiper-button-next:after{
   content: '\2192';
}
.home-swiper .swiper-button-prev:after{
   content: '\2190';
}
.home-swiper .swiper-button-next{
   right: 25px;
}
.home-swiper .swiper-button-prev{
   left: 25px;
}
.swiper-pagination-bullet{
   background-color: #ddd;
   width: 15px;
   height: 15px;
   position: relative;
   opacity: 1;
}
.swiper-pagination-bullet-active-main::after
,.swiper-pagination-bullet-active:after{
   content:'';
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%,-50%);
   width: 5px;
   height: 5px;
   border-radius:50%;
   background-color: rgb(75, 75, 238);
}
.slider-text-head,
.slider-text-body,
.slider-text-button{
   opacity: 0;
}
.swiper-slide-active .slider-text-head{
   animation: slideMoveDown 1s 1s ease-in-out forwards;
}
.swiper-slide-active .slider-text-body{
   animation: slideMoveLeft 1s 2s ease-in-out forwards;
}
.swiper-slide-active .slider-text-button{
   animation: slideMoveUp 1s 3s ease-in-out forwards;
}
.img-container {
  position: relative; /* Gradient için gerekli */
}

.img-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, .35));
}

.img-container img {
  display: block;
  width: 100%;
  height: 100%;
}
.lineal-fill{
   fill: #8caeec !important;
}
.writer-card {
   height: 30rem;
}
@media only screen and (min-width:400px){
  .slider-text-container{
    top: 15%;
    gap: 10px;
  }
  
}
@media only screen and (min-width:480px){
  .slider-text-container{
    left: 14%;
  }
  .slider-text-container{
    top: 17%;
  }
}
@media only screen and (min-width:768px){
  .home-swiper{
    height: 60vh;
  }
  .slider-text-container{
    top: 30%;
    left: 12%;
    width: 70%
  }
  .home-swiper .swiper-button-next,
  .home-swiper .swiper-button-prev{
   width: 35px;
    height: 35px;
  }
  .home-swiper .swiper-button-next:after,
  .home-swiper .swiper-button-prev:after{
    font-size: 1.2rem;
  }
 }
 @media only screen and (min-width:1280px){
   .home-swiper{
    height: 100vh;
  }
  .writer-card {
      height: 26rem;
   }
   .slider-text-container{
    width: 50%;
    left: 12%;
  }
  .home-swiper .swiper-button-next,
  .home-swiper .swiper-button-prev{
    width: 35px;
    height: 35px;
  }
  .home-swiper .swiper-button-next:after,
  .home-swiper .swiper-button-prev:after{
    font-size: 1.2rem;
  }
 }

 @media only screen and (min-width:2560px){
   .slider-text-container{
      gap: 20px;
   }
   .writer-card {
      height: 50rem;
   }
  .home-swiper .swiper-button-next:after,
  .home-swiper .swiper-button-prev:after{
      font-size: 2rem;
   }
 }

 @media only screen and (min-width:1920px){
   .writer-card {
      height: 30rem;
   }
 }

 @media only screen and (max-width:576px){
   .home-swiper{
      height:25rem;
   }
   .img-container img {
      display: block;
      object-position: 50% 90%;
   }
   .img-container::before {
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, .5));
   }
}

</style>