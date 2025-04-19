<template>
  <div class="flex flex-col 2xl:flex-row gap-16 2xl:gap-0 justify-between my-16 px-6 md:px-16 2xl:px-20">
        <div class="w-full h-max flex flex-col gap-6 md:gap-4">
            <div class="detail-content h-full sm:p-6">
                <img class="main-img h-96 w-[80%] sm:w-2/3 xl:w-1/2 object-cover object-top mx-auto rounded" src="@/assets/img/home2.jpg" alt="">
                <div class="px-4 pb-4 sm-p-0">
                    <h1 class="mt-12 3xl:mt-16 mb-6 tracking-wider font-medium  text-2xl md:text-3xl 5xl:text-5xl text-gray-700">RİSKAL®: Yapısal Afet Risk Kalkanı® yazılımı ve sistemi başarıyla tamamlandı.</h1>
                    <p class="text-[calc(1.2rem)] text-base 2xl:text-[1.1rem] 5xl:text-xl text-gray-600 text-medium tracking-wide text-gray-600">
                      Kısa adı RİSKAL® olan “Yapısal Afet Risk Kalkanı®” yazılımı başarı ile tamamlandı. RİSKAL® yazılımı çeyrek asırlık bir deprem tecrübesinin yazılıma dönüşmüş halidir. Büyük fedakârlıklarla, bir yılı aşkın bir sürede, on bir kişilik güçlü bir mühendis ekibi ile üretilebilmiştir.
                      <br><br>
                      RİSKAL®, yapılar için bütünleşik deprem risk azaltma (yapı envanteri oluşturma, online temel deprem eğitimleri, veri yönetimi, risk analizleri yapma) ve hasar tespit yönetim sistemidir.
                      <br><br>
                      Bina envanterinin standart, hızlı, ekonomik ve kullanılabilir bir şekilde oluşturulabilmesi için uzman akademisyenlerin danışmanlığında RİSKAL® yazılımı geliştirilmiştir. RİSKAL® yazılımının temel amacı, nitelikli bina envanterinin oluşturulmasını, verilerin kaydedilmesini, sınıflandırılmasını, analiz edilmesini ve raporlanmasını sağlanmasıdır. Nihai amacı ise deprem sonrası hızlı, güvenilir, ekonomik ve etkin bir şekilde hasar tespiti yapmaktır.
                      <br><br>
                      RİSKAL® yazılımı bir Ar-Ge projesi ürünüdür. Alanında dünyadaki en kapsamlı bina envanteri ve hasar tespit yönetim sistemidir. RİSKAL® bünyesinde veri kaydetme, veri analiz etme, raporlama, eğitim, iletişim gibi birçok modül barındırmaktadır. RİSKAL® deprem risk azaltma alanında çok önemli katkılar sunacaktır.
                      <br><br>
                      RİSKAL®, Ar-Ge çalışmaları sonucunda Fırat Teknokent TGB bünyesinde SEBİZA TEKNOLOJİ tarafından geliştirilmiş, Sanayi ve Teknoloji Bakanlığı onaylı, ulusal ve uluslararası alanda muadili olmayan, özel bir yazılımdır. 
                      <br><br>
                      RİSKAL ile ilgili tüm detaylara <a href="www.riskal.com.tr" class="underline text-blue-500">www.riskal.com.tr</a> web sayfamızdan ulaşabilirsiniz.
                    </p>
                </div>

            </div>
        </div>
       
      </div>
</template>

<script>


import { onMounted } from 'vue';
export default {
  components: {
  },
  setup(){

    onMounted(() => {

    })

    return{
    }
  }
}
</script>

<style >

    .detail-content{
        position: relative;
        z-index: 2;
        background-color: #fff;
    }
  


     @media only screen and (min-width:2600px){
      .main-img{
        height: 700px;
        object-fit: cover;
      }
    }
</style>