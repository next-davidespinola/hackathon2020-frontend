<template>
  <div class="d-flex flex-column align-center justify-center">
    <ImageInfoSection
      class="d-flex flex-column text-center align-self-center"
      title="Tu ahorro"
      titleIcon="mdi-cash-multiple"
      titleColor="amber"
      :imgSrc="imgSrc"
      :cardColor="'gold darken-6'"
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
    <v-card
      class="mt-5 pa-3 d-flex flex-column align-center"
      rounded="xl"
      outlined
      max-width="421"
    >
      <v-list-item>
        <v-list-item-content class="pa-0">
          <v-list-item-title class="text-h6 text-sm-h4 text-center font-weight-bold mb-7">
            Comprar una consola
          </v-list-item-title>
          <div>
            <p class="text-sm-body-1 mb-2 text-left gold--text"> Tienes {{ currentPoints }} puntos </p>
            <v-progress-linear :value="currentPoints" rounded height="10" color="gold"></v-progress-linear>
            <p class="mt-2 text-sm-body-1 text-right blue--text text--darken-2"> Sube de nivel con 120 puntos </p>
            <p class="mt-2 text-h6 font-weight-medium text-center grey--text text--darken-1">
              ¡Te faltan <b class="black--text"> 40 euros </b> para alcanzar tu meta!
            </p>
          </div>
        </v-list-item-content>
      </v-list-item>
      <v-card-actions class="pa-0">
        <div class="d-flex justify-center mt-2">
          <v-btn @click="$emit('click')" class="white--text" color="light-blue">
            CAMBIAR OBJETIVO
          </v-btn>
        </div>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import ImageInfoSection from '@/components/ImageInfoSection.vue'

export default {
  name: 'Objectives',
  components: {
    ImageInfoSection
  },
  data: () => ({
    currentPoints: 80,
    imgSrc: 'cash.png'
  }),
  methods: {}
}
</script>
