<template>
  <ImageInfoSection
    class="d-flex flex-column text-center"
    title="Tu ahorro"
    titleIcon="mdi-cash-multiple"
    :imgSrc="imgSrc"
  >
    <div class="pt-4 pr-4 pl-4">
      <p class="text-h4 font-weight-medium"> 80 Euros </p>
      <p class="text-body-1 font-weight-normal grey--text text--lighten-5"> ¡Muy bien estas ahorrando un motón! </p>
    </div>
    <v-divider class="border-bold grey text"></v-divider>
    <div class="pb-4 pr-4 pl-4">
      <p class="mt-5 text-body-1 font-weight-normal grey--text text--lighten-5"> ¡Tus ahorros generan interés! Cada viernes recibes: </p>
      <div class="d-flex flex-row text-center justify-center">
        <p class="d-flex mr-2 text-h5 font-weight-medium deep-purple--text text--lighten-3">
          +20 <v-icon class="deep-purple--text text--lighten-3"> mdi-diamond-stone </v-icon>
        </p>
        <p class="d-flex ml-2 text-h5 font-weight-medium blue--text text--lighten-2">
          +30 <v-icon class="blue--text text--lighten-2"> mdi-decagram-outline </v-icon>
        </p>
      </div>
    </div>
  </ImageInfoSection>
</template>

<script>
import ImageInfoSection from '@/components/ImageInfoSection.vue'

export default {
  name: 'Objectives',
  components: {
    ImageInfoSection
  },
  data: () => ({
    imgSrc: 'cash.png'
  }),
  methods: {}
}
</script>
