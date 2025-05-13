<template>
   <main>
      <section id="home">
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
                     <img class="w-full h-full aspect-video" :src="settings.home_img" alt="">
                     <div class="slider-text-container items-center s:items-start">
                        <h2 class="mb-3 slider-text-head tracking-widest text-lg text-center s:text-start sm:text-xl xl:text-[1.9rem]  3xl:text-[1.9rem] 4xl:text-[2.4rem] font-bold tracking-wider">{{settings.home_title}}</h2>
                        <p class="slider-text-body tracking-wider text-center s:text-start text-[.8rem] xs:text-sm sm:text-[1rem] md:text-lg 3xl:text-xl 3xl:leading-[1.6rem] 4xl:text-[1.45rem] 4xl:leading-[2rem] tracking-wide font-medium line-clamp-[10]" v-html="settings.home_text"></p>
                     </div>
                  </div>
               </swiper-slide>
         </swiper>
      </section>
      <section id="aim" class="pt-32 xl:pb-32 px-8 s:px-16 lg:px-24 4xl:px-32">
         <div class="flex flex-col items-center gap-2 mb-12 xl:mb-28">
          <img src="@/assets/img/purpose.jpg" alt="" class="w-40 h-32">
            <h2 class="text-2xl 3xl:text-[1.7rem] 4xl:text-3xl 5xl:text4[2.6rem] text-gray-700 text-center leading-normal tracking-wider font-bold mb-4">
               <span>Hedef ve Amaçlarımız</span>
            </h2>
         </div>
         <div class="flex flex-col gap-16 xl:gap-0 xl:flex-row justify-between">
            <div class="xl:w-[calc(50%-1rem)] flex flex-col gap-3 xl:gap-6 4xl:gap-8">
                <h3 class="text-[1.5rem] 4xl:text-3xl text-center xl:text-start  text-gray-700 font-medium tracking-wider">{{settings.aim_title}}</h3>
                <p class="text-gray-600 text-center xl:text-start text-[.97rem] xl:text-base 4xl:text-[1.35rem] tracking-wide leading-normal font-normal" v-html="settings.aim_text"></p>
            </div>
            <div class="xl:w-[calc(50%-1rem)] md:px-12">
               <img :src="settings.aim_img" class="w-full md:w-2/3 mx-auto xl:w-full hidden xl:block" alt="">
            </div>
         </div>
      </section>
      <section id="period" style="background-color:#fff;" class="flex flex-col xl:flex-row gap-24 md:gap-32 xl:gap-0 justify-between py-32 xl:pe-32">
         <div class="w-full mx-auto md:w-[calc(65%-1rem)] xl:w-[calc(50%-1rem)] 5xl:w-[calc(43%-1rem)] px-12 sm:px-24">
            <img class="mx-auto rounded" :src="settings.purpose_img" alt="">
         </div>
         <div class="xl:w-[calc(50%-1rem)] 5xl:w-[calc(57%-1rem)] flex flex-col gap-5 xl:gap-10 px-6 sm:px-12 s:px-16 lg:px-24 xl:px-0">
            <h2 class="text-center xl:text-start text-2xl xl:text-3xl 5xl:text-[3rem] text-gray-700 leading-normal tracking-wider font-bold">{{settings.purpose_title}}</h2>
            <div class="flex flex-wrap flex-col sm:flex-row gap-6 3xl:gap-8">
               <div class="md:w-[calc(50%-1rem)] flex items-center items-center gap-2">
                  <span class="btn-circle pointer-events-none !mr-4 xl:text-[1.3rem] w-9 h-9 text-[calc(1.255rem_+_0.06vw)] inline-flex items-center justify-center leading-none !rounded-[100%]"><span class="icon-check table-cell text-center align-middle font-bold m-[0_auto]"><i class="mdi mdi-check text-sm 5xl:text-xl"></i></span></span>
                  <p class="flex-1 text-gray-600 text-sm 3xl:text-base 5xl:text-2xl tracking-wider leading-normal font-normal">{{settings.purpose_subheading_1}}</p>
               </div>
               <div class="md:w-[calc(50%-1rem)] flex items-center gap-2">
                  <span class="btn-circle pointer-events-none !mr-4 xl:text-[1.3rem] w-9 h-9 text-[calc(1.255rem_+_0.06vw)] inline-flex items-center justify-center leading-none !rounded-[100%]"><span class="icon-check table-cell text-center align-middle font-bold m-[0_auto]"><i class="mdi mdi-check text-sm 5xl:text-xl"></i></span></span>
                  <p class="flex-1 text-gray-600 text-sm 3xl:text-base 5xl:text-2xl tracking-wider leading-normal font-normal">{{settings.purpose_subheading_2}}</p>
               </div>
               <div class="md:w-[calc(50%-1rem)] flex items-center gap-2">
                  <span class="btn-circle pointer-events-none !mr-4 xl:text-[1.3rem] w-9 h-9 text-[calc(1.255rem_+_0.06vw)] inline-flex items-center justify-center leading-none !rounded-[100%]"><span class="icon-check table-cell text-center align-middle font-bold m-[0_auto]"><i class="mdi mdi-check text-sm 5xl:text-xl"></i></span></span>
                  <p class="flex-1 text-gray-600 text-sm 3xl:text-base 5xl:text-2xl tracking-wider leading-normal font-normal">{{settings.purpose_subheading_3}}</p>
               </div>
               <div class="md:w-[calc(50%-1rem)] flex items-center gap-2">
                  <span class="btn-circle pointer-events-none !mr-4 xl:text-[1.3rem] w-9 h-9 text-[calc(1.255rem_+_0.06vw)] inline-flex items-center justify-center leading-none !rounded-[100%]"><span class="icon-check table-cell text-center align-middle font-bold m-[0_auto]"><i class="mdi mdi-check text-sm 5xl:text-xl"></i></span></span>
                  <p class="flex-1 text-gray-600 text-sm 3xl:text-base 5xl:text-2xl tracking-wider leading-normal font-normal">{{settings.purpose_subheading_4}}</p>
               </div>
            </div>         
            </div>
      </section>
      <section id="team" class="py-32 px-8 md:px-16 xl:px-32 3xl:px-48 4xl:px-72 5xl:px-96">
         <div class="flex flex-col items-center gap-2 mb-12">
          <img src="@/assets/img/article.jpg" alt="" class="w-40 h-32">
            <h2 class="text-2xl 3xl:text-3xl 5xl:text-[3rem] text-gray-700 text-center leading-normal tracking-wider font-bold mb-4">Ekibimiz</h2>
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
            <swiper-slide v-for="(s,index) in staff" :key="index" class="s:p-2 md:p-8">
               <div class="writer-card w-full flex flex-col gap-5 cursor-pointer">
                  <div class="w-full h-full overflow-hidden border rounded-2xl shadow">
                     <img class="w-full h-full object-cover object-top rounded-2xl hover:scale-110 transition duration-500 mx-auto" :src="s.img" alt="">
                  </div>
                  <div class="flex flex-col">
                     <h2 class="font-bold text-xl 3xl:text-2xl 4xl:text-2xl text-center xl:text-start text-gray-700">{{s.full_name}}</h2>
                      <div class="text-gray-500 text-[.9rem] 3xl:text-base 5xl:text-2xl flex gap-3 justify-center xl:justify-between items-center">
                        <span>
                           {{s.job.name}}
                        </span>
                     </div>
                  </div>
               </div>
            </swiper-slide>
         </swiper>
      </section>

      <section id="contact" class="px-5 py-16 s:px-8  md:p-16 2xl:p-28 scroll-mt-16">
         <h3 class="text-3xl 2xl:text-4xl 3xl:text-[2.6rem] 5xl:text-[3rem] text-center font-semibold text-gray-700 font-medium tracking-wider mb-12 md:mb-16 lg:mb-20">İletişim</h3>
         <div class="flex flex-wrap justify-center lg:gap-12 mb-12">
            <div class="w-1/2 lg:w-[calc(33%-1.8rem)] flex flex-col items-center gap-4 border-x border-t lg:border-b lg:shadow-lg bg-gray-100 px-3 py-8 lg:rounded sm:p-12">
               <i class="mdi mdi-phone text-3xl 2xl:text-4xl 3xl:text-[2.6rem] 4xl:text-5xl 5xl:text-6x text-[#858EE9]"></i>
               <h5 class="font-medium tracking-winder text-xl 4xl:text-2xl 5xl:text-3xl">Telefon</h5>
               <span class="text-sm sm:text-[.9rem] 4xl:text-lg 5xl:text-xl text-center text-gray-600">{{contact.phone_number_1}} </span>
               <span class="text-sm sm:text-[.9rem] 4xl:text-lg 5xl:text-xl text-center text-gray-600">{{contact.phone_number_2}} </span>
            </div>
            <div class="w-1/2 lg:w-[calc(33%-1.8rem)] flex flex-col items-center gap-4 border-y border-e lg:border-s lg:shadow-lg bg-gray-100 px-3 py-8 lg:rounded sm:p-12">
               <i class="mdi mdi-email text-3xl 2xl:text-4xl 3xl:text-[2.6rem] 4xl:text-5xl 5xl:text-6xl text-[#858EE9]"></i>
               <h5 class="font-medium tracking-winder text-xl 4xl:text-2xl 5xl:text-3xl">E-posta</h5>
               <span class="text-sm sm:text-[.9rem] 4xl:text-lg 5xl:text-xl text-center text-gray-600 break-all">{{contact.email_1}}</span>
               <span class="text-sm sm:text-[.9rem] 4xl:text-lg 5xl:text-xl text-center text-gray-600 break-all">{{contact.email_2}}</span>
            </div>
            <div class="w-full lg:w-[calc(33%-1.8rem)] border flex flex-col items-center gap-4 lg:shadow-lg bg-gray-100 px-8 py-8 lg:rounded sm:p-12">
               <i class="mdi mdi-map-marker text-3xl 2xl:text-4xl 3xl:text-[2.6rem] 4xl:text-5xl 5xl:text-6xl text-[#858EE9]"></i>
               <h5 class="font-medium tracking-winder text-xl 4xl:text-2xl 5xl:text-3xl">Konum</h5>
               <span class="text-sm sm:text-[.9rem] 4xl:text-lg 5xl:text-xl text-center text-gray-600 text-center" v-html="contact.address_1"></span>
               <span class="text-sm sm:text-[.9rem] 4xl:text-lg 5xl:text-xl text-center text-gray-600 text-center" v-html="contact.address_2"></span>
               
            </div>
         </div>
         <div class="flex flex-col lg:flex-row border shadow rounded">
            <div class="w-full lg:w-2/3">
               <div class="rounded" style="width: 100%" v-html="contact.coordinates">
               </div>
            </div>
            <div class="w-full lg:w-1/3 ">
            <Form id="message_form"   class="w-full h-full py-10 lg:py-8 px-6 sm:px-10 flex flex-col justify-between">
                  <h2 class="text-3xl text-center lg:text-start 4xl:text-4xl 5xl:text-5xl tracking-wider mb-12">Mesaj <span class="font-medium text-[#858EE9]">Gönder </span></h2>
                  <div class="flex flex-col gap-5">
                     <div>
                        <Field type="text" name="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm 5xl:text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-2 sm:py-2.5" placeholder="Ad Soyad" />
                     </div>
                     <div>
                        <Field type="mail" name="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm 5xl:text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-2 sm:py-2.5" placeholder="E-posta" />
                     </div>
                     <div>
                        <Field as="textarea" name="message" rows="8" class="block p-2.5 w-full text-sm 5xl:text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Mesaj..."></Field>
                     </div>
                  </div>
                  <button class="w-full tracking-widest font-medium py-2 4xl:text-lg bg-[#858EE9] text-white rounded mt-8">Gönder</button>
            </Form>
            </div>
         </div>
      </section>
   </main>
</template>


<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Field, Form } from 'vee-validate';

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
      Form,
      Field
    },
    setup() {
      let isHome = computed(() => route.name == 'Home')
      let screenWidth = window.innerWidth;
      const store = useStore();
      const settings = computed(() => store.state.home_home.settings);
      const contact = computed(() => store.state.home_home.contact);
      const staff = computed(() => store.state.home_home.staff);

       const breakpoints = {
         670: {
         slidesPerView: 2,
         },
         992: {
         slidesPerView: 2,
         },
      };

      onMounted(async() => {
         await store.dispatch('home_home/getSettings');
         await store.dispatch('home_home/getStaff');

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
        settings,
        contact,
        staff
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
   animation: slideMoveDown 1s 0.7s ease-in-out forwards;
}
.swiper-slide-active .slider-text-body{
   animation: slideMoveLeft 1s 1.4s ease-in-out forwards;
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

.mapouter,
.gmap_canvas{
  width: 100% !important;
  height: 270px !important;
}
 iframe{
  height: 100% !important;
  width: 100% !important;
}

@media only screen and (min-width:375px){

  .mapouter,
  .gmap_canvas{
    height: 350px !important;
  }
}


@media only screen and (min-width:576px){
   .mapouter,
  .gmap_canvas{
    height: 400px !important;
  }

}
@media only screen and (min-width:768px){

  .mapouter,
  .gmap_canvas{
    height: 535px !important;
  }

}


 @media only screen and (min-width:1536px){
  .mapouter,
  .gmap_canvas{
    height: 540px !important;
  }
}

@media only screen and (min-width:2560px){
  .mapouter,
  .gmap_canvas{
    height: 690px !important;
  }
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
      height: 30rem;
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