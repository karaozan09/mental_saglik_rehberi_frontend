<template>
 <section>
      <img  class="w-full 2xl:h-[350px] 4xl:h-[420px] story-banner object-cover shadow-md" src="@/assets/img/purpose-banner.jpg" alt="">
      <div class="px-8 sm:px-12 xl:px-20 my-16 5xl:my-20">
        <h1 class="text-center text-4xl 3xl:text-[2.7rem] 4xl:text-5xl 5xl:text-[3.4rem] text-gray-700 font-bold tracking-widest mb-8 s:mb-12 5xl:mb-16">{{lang == 'tr' ? 'Hikayemiz' : 'Our Story'}}</h1>
        <p v-if="lang == 'tr'" class="3xl:text-[1.05rem] 4xl:text-xl 5xl:text-2xl font-normal text-gray-600 text-medium tracking-wider">
          SEBİZA TEKNOLOJİ San. ve Tic. Ltd. Şti. 2021 yılı Şubat ayında Prof. Dr. Kürşat Esat ALYAMAÇ tarafından, Fırat Teknokent Teknoloji Geliştirme Bölgesi (TGB) bünyesinde, KOSGEB destekli “Sertleşmiş Beton Dayanımının Yerinde ve Tahribatsız Olarak Belirlenmesi İçin Yeni Bir Test Cihazı Tasarımı ve Geliştirilmesi” konulu Ar-Ge projesini hayata geçirmek için kurulmuştur. Bu proje ile beraber ilerleyen zaman içerisinde birçok Ar-Ge projesi tamamlanmış ve ürünler geliştirilmiştir. Bu projeler sırasında SEBİZA TEKNOLOJİ birçok genç mimar ve mühendisi bünyesine katarak büyük bir aile olmuştur ve bu sayede afet teknolojileri alanında yeniliklere öncü olmaya devam etmektedir.
          <br><br>
          SEBİZA TEKNOLOJİ ailesi olarak kendimizi, yenilikçi afet teknolojileriyle daha güvenli bir gelecek oluşturmaya adadık. Misyonumuz; etkili hazırlık, dayanıklılık ve iyileştirme stratejilerinin, afetlerin neden olduğu can kayıplarının ve ekonomik kayıpların büyük ölçüde azaltabileceği inancına dayanmaktadır. İlk günden bu yana, öngörülemeyen durumlara karşı, yaşamları ve yapıları korumaya yardımcı olan teknoloji odaklı çözümlere öncülük ediyoruz.
          <br><br>
          Uzmanlığımız, bütünleşik afet yönetimi modellerinden, yapısal güçlendirmeye kadar çok çeşitli afet yönetimi alanlarını kapsamaktadır. Sürekli artan bilgi ve deneyimimizi kullanarak, paydaşlarımız için afet yönetiminde güç veren, onlara somut bir fark yaratan, kullanıcı dostu, etkili araçlar sağlayan, çığır açan yazılımlar ve cihazlar geliştiriyoruz.
          <br><br>
          Depreme dayanıklı yapı tasarımı projelerimiz, alanında referans noktası oluşturmaktadır. Zengin mühendislik kültürü, deneyimi ve öngörüsünü tasarım metodolojilerimize entegre ederek, üzerinde çalıştığımız her yapının sismik tehditlere karşı dayanıklı olmasını sağlıyoruz. Yapıların güvenliğini ve dayanıklılığını artırma konusunda sarsılmaz bir irade ortaya koyuyoruz.
          <br><br>
          Yapısal güçlendirme alanında, her binanın taşıyıcı sisteminin farklı özellikleri nedeniyle, her projeye benzersiz bir vaka olarak yaklaşıyoruz. Uzman ekibimiz tarafından projesi dikkatle ve özenle hazırlanmış, sismik olaylar karşısında bile hasar görmeyen, güçlendirilmiş yapılarımızla gurur duyuyoruz.
          <br><br>
          ARGE tabanlı yeniliklerimiz, alışılagelmiş malzeme testlerinde geleneksel normları kırmamıza da yol açtı. BETONMETRE®'nin piyasaya sürülmesiyle, beton için yeni, tahribatsız bir test yöntemi sunuyoruz. Bu devrim niteliğindeki cihaz, pratik, doğru ve ekonomik bir çözüm sunarak, kentsel dönüşüm projelerinde de oyunun kurallarını değiştiriyor.
          <br><br>
          Binaların depreme dayanıklılığını değerlendirmenin ve artırmanın önemine gönülden inanarak ve Cumhurbaşkanlığımızın Ulusal Risk Kalkanı Modelinden esinlenerek, Bina Risk Kalkanını modelini ürettik. Olası bir afet öncesinde binalarla ilgili tüm önemli verilerin toplanması ve kullanılması risk azaltma konusunda çok önemli bir yaklaşımdır. Yazılımımız, her bina parametresine kolay erişim, değerlendirme ve raporlama sağlayarak şehirlerin dayanıklılığına önemli ölçüde katkıda bulunmaktadır.
          <br><br>
          Türkiye’nin afet teknolojileri alanında da önemli başarılarının artarak devam edeceğini biliyoruz. Bu alanda katkı sunmak ve SEBIZA TEKNOLOJİ olarak hep bir adım önde olmak için gayretle ve sabırla çalışıyoruz.
        </p>
        <p v-else class="3xl:text-[1.05rem] 4xl:text-xl 5xl:text-2xl font-normal text-gray-600 text-medium tracking-wider">
          SEBIZA TECHNOLOGY Industry and Trade Co. Ltd. was established in February 2021 by Prof. Dr. Kursat Esat ALYAMAC within the Firat Teknokent Technology Development Zone (TGB) to implement the KOSGEB-supported R&D project titled “Design and Development of a New Test Device for the In-Situ and Non-Destructive Determination of Hardened Concrete Strength”. Along with this project, many R&D projects have been completed and products have been developed over time. During these projects, SEBIZA TECHNOLOGY has become a big family by including many young architects and engineers, and thus continues to pioneer innovations in the field of disaster technologies.
          <br><br>
          As the SEBIZA TECHNOLOGY family, we are dedicated to creating a safer future with innovative disaster technologies. Our mission is based on the belief that effective preparation, resilience and recovery strategies can greatly reduce the loss of life and economic losses caused by disasters. Since day one, we have been pioneering technology-driven solutions that help protect lives and structures against unforeseen circumstances.
          <br><br>
          Our expertise covers a wide range of disaster management areas, from integrated disaster management models to structural reinforcement. Using our ever-increasing knowledge and experience, we develop groundbreaking software and devices that empower our stakeholders in disaster management, make a tangible difference, and provide user-friendly, effective tools.
          <br><br>
          Our earthquake-resistant structural design projects set a benchmark in the field. By integrating rich engineering culture, experience and foresight into our design methodologies, we ensure that every structure we work on is resistant to seismic threats. We demonstrate an unwavering will to increase the safety and durability of structures.
          <br><br>
          In the field of structural reinforcement, we approach each project as a unique case due to the different characteristics of each building's load-bearing system. We are proud of our reinforced structures, whose projects are carefully and meticulously prepared by our expert team and that are not damaged even in the face of seismic events.
          <br><br>
          Our R&D-based innovations have also led us to break traditional norms in conventional material tests. With the launch of BETONMETRE®, we are introducing a new, non-destructive testing method for concrete. This revolutionary device offers a practical, accurate and economical solution, changing the rules of the game in urban transformation projects.
          <br><br>
          Believing wholeheartedly in the importance of evaluating and increasing the earthquake resistance of buildings and inspired by the National Risk Shield Model of Turkish Republic Presidency, we have produced the Building Risk Shield model. Collecting and using all important data about buildings before a possible disaster is a very important approach in risk reduction. Our software contributes significantly to the resilience of cities by providing easy access, evaluation and reporting of each building parameter.
          <br><br>
          We know that Turkiye's significant achievements in the field of disaster technologies will continue to increase. We work diligently and patiently to contribute to this field and to be always one step ahead as SEBIZA TECHNOLOGY.
        </p>
      </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>