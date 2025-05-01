<template>
     <main class="flex-1 flex flex-col min-h-[350px]">

      <!-- Mesajlar -->
      <div class="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
        <div class="flex justify-start">
          <div class="bg-white p-3 rounded-lg shadow max-w-xs">
            Selam! Nasıl yardımcı olabilirim?
          </div>
        </div>
        <div class="flex justify-end">
          <div class="bg-blue-500 text-white p-3 rounded-lg shadow max-w-xs">
            Merhaba Ayda, nasılsın? Psikolojik olarak kendimi iyi hissetmiyorum. Bana yardımcı olur musun?
          </div>
        </div>
      </div>

      <!-- Mesaj Girişi -->
      <div class="py-4 bg-white border-t flex gap-2">
        <input
          type="text"
          placeholder="Mesajınızı yazın..."
          class="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Gönder
        </button>
      </div>
      
    </main>
</template>

<script>
export default {

}
</script>

<style>

</style>