<template>
  <div class="flex justify-center flex-wrap gap-8 my-12 px-6 xl:px-12">
    <div class="w-full md:w-[calc(50%-1rem)] lg:w-[calc(28.5%-1rem)] 3xl:w-[calc(24.5%-1rem)] 4xl:w-[calc(19.5%-1rem)]">
        <v-card class="mx-auto w-full">
    <v-img
      color="surface-variant"
      height="230"
      src="https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg"
      cover
    >
    </v-img>

    <v-card-text>
      <div class="text-lg text-gray-700 font-weight-bold ms-1 mb-2">Frontend Web Eğitimi</div>

      <v-timeline align="start" density="compact">
        <v-timeline-item
          v-for="message in messages"
          :key="message.time"
          :dot-color="message.color"
          size="x-small"
        >
          <div class="mb-4">
            <div class="font-weight-normal mb-1">
              <strong>{{ message.from }} : </strong>{{ message.time }}
            </div>

            <div>{{ message.message }}</div>
          </div>
        </v-timeline-item>
      </v-timeline>
      <a class="block w-full text-center mt-2 py-1.5 px-3 text-white bg-[#2096F3] shadow rounded font-medium tracking-wider">Eğitime dahil ol</a>
    </v-card-text>
  </v-card>
    </div>
    <div class="w-full md:w-[calc(50%-1rem)] lg:w-[calc(28.5%-1rem)] 3xl:w-[calc(24.5%-1rem)] 4xl:w-[calc(19.5%-1rem)]">
        <v-card class="mx-auto w-full">
    <v-img
      color="surface-variant"
      height="230"
      src="https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg"
      cover
    >
    </v-img>

    <v-card-text>
      <div class="text-lg text-gray-700 font-weight-bold ms-1 mb-2">Frontend Web Eğitimi</div>

      <v-timeline align="start" density="compact">
        <v-timeline-item
          v-for="message in messages"
          :key="message.time"
          :dot-color="message.color"
          size="x-small"
        >
          <div class="mb-4">
            <div class="font-weight-normal mb-1">
              <strong>{{ message.from }} : </strong>{{ message.time }}
            </div>

            <div>{{ message.message }}</div>
          </div>
        </v-timeline-item>
      </v-timeline>
      <a class="block w-full text-center mt-2 py-1.5 px-3 text-white bg-[#2096F3] shadow rounded font-medium tracking-wider">Eğitime dahil ol</a>
    </v-card-text>
  </v-card>
    </div>
    <div class="w-full md:w-[calc(50%-1rem)] lg:w-[calc(28.5%-1rem)] 3xl:w-[calc(24.5%-1rem)] 4xl:w-[calc(19.5%-1rem)]">
        <v-card class="mx-auto w-full">
    <v-img
      color="surface-variant"
      height="230"
      src="https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg"
      cover
    >
    </v-img>

    <v-card-text>
      <div class="text-lg text-gray-700 font-weight-bold ms-1 mb-2">Frontend Web Eğitimi</div>

      <v-timeline align="start" density="compact">
        <v-timeline-item
          v-for="message in messages"
          :key="message.time"
          :dot-color="message.color"
          size="x-small"
        >
          <div class="mb-4">
            <div class="font-weight-normal mb-1">
              <strong>{{ message.from }} : </strong>{{ message.time }}
            </div>

            <div>{{ message.message }}</div>
          </div>
        </v-timeline-item>
      </v-timeline>
      <a class="block w-full text-center mt-2 py-1.5 px-3 text-white bg-[#2096F3] shadow rounded font-medium tracking-wider">Eğitime dahil ol</a>
    </v-card-text>
  </v-card>
    </div>
    <div class="w-full md:w-[calc(50%-1rem)] lg:w-[calc(28.5%-1rem)] 3xl:w-[calc(24.5%-1rem)] 4xl:w-[calc(19.5%-1rem)]">
        <v-card class="mx-auto w-full">
    <v-img
      color="surface-variant"
      height="230"
      src="https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg"
      cover
    >
    </v-img>

    <v-card-text>
      <div class="text-lg text-gray-700 font-weight-bold ms-1 mb-2">Frontend Web Eğitimi</div>

      <v-timeline align="start" density="compact">
        <v-timeline-item
          v-for="message in messages"
          :key="message.time"
          :dot-color="message.color"
          size="x-small"
        >
          <div class="mb-4">
            <div class="font-weight-normal mb-1">
              <strong>{{ message.from }} : </strong>{{ message.time }}
            </div>

            <div>{{ message.message }}</div>
          </div>
        </v-timeline-item>
      </v-timeline>
      <a class="block w-full text-center mt-2 py-1.5 px-3 text-white bg-[#2096F3] shadow rounded font-medium tracking-wider">Eğitime dahil ol</a>
    </v-card-text>
  </v-card>
    </div>
    <div class="w-full md:w-[calc(50%-1rem)] lg:w-[calc(28.5%-1rem)] 3xl:w-[calc(24.5%-1rem)] 4xl:w-[calc(19.5%-1rem)]">
        <v-card class="mx-auto w-full">
    <v-img
      color="surface-variant"
      height="230"
      src="https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg"
      cover
    >
    </v-img>

    <v-card-text>
      <div class="text-lg text-gray-700 font-weight-bold ms-1 mb-2">Frontend Web Eğitimi</div>

      <v-timeline align="start" density="compact">
        <v-timeline-item
          v-for="message in messages"
          :key="message.time"
          :dot-color="message.color"
          size="x-small"
        >
          <div class="mb-4">
            <div class="font-weight-normal mb-1">
              <strong>{{ message.from }} : </strong>{{ message.time }}
            </div>

            <div>{{ message.message }}</div>
          </div>
        </v-timeline-item>
      </v-timeline>
      <a class="block w-full text-center mt-2 py-1.5 px-3 text-white bg-[#2096F3] shadow rounded font-medium tracking-wider">Eğitime dahil ol</a>
    </v-card-text>
  </v-card>
    </div>
    <div class="w-full md:w-[calc(50%-1rem)] lg:w-[calc(28.5%-1rem)] 3xl:w-[calc(24.5%-1rem)] 4xl:w-[calc(19.5%-1rem)]">
        <v-card class="mx-auto w-full">
    <v-img
      color="surface-variant"
      height="230"
      src="https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg"
      cover
    >
    </v-img>

    <v-card-text>
      <div class="text-lg text-gray-700 font-weight-bold ms-1 mb-2">Frontend Web Eğitimi</div>

      <v-timeline align="start" density="compact">
        <v-timeline-item
          v-for="message in messages"
          :key="message.time"
          :dot-color="message.color"
          size="x-small"
        >
          <div class="mb-4">
            <div class="font-weight-normal mb-1">
              <strong>{{ message.from }} : </strong>{{ message.time }}
            </div>

            <div>{{ message.message }}</div>
          </div>
        </v-timeline-item>
      </v-timeline>
      <a class="block w-full text-center mt-2 py-1.5 px-3 text-white bg-[#2096F3] shadow rounded font-medium tracking-wider">Eğitime dahil ol</a>
    </v-card-text>
  </v-card>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup(){
    const messages = ref([
        {
          from: 'Başlangıç tarihi',
          message: `Temel seviyeden başlayaral ileri seviyeye doğru gidilecektir`,
          time: '12.10.2024',
          color: 'blue',
        },
        {
          from: 'Tahmini bitiş tarihi',
          message: 'Gerçek hayatta kullanabileceğiz bir proje yaparak eğitime son vereceğiz.',
          time: '12.12.2024',
          color: 'blue',
        },
      ],)
    return{
      messages
    }
  }
}
</script>

<style>

</style>