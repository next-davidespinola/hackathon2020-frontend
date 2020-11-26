<template>
  <div class="d-flex flex-column align-center justify-center">
    <ImageInfoSection
      class="d-flex flex-column text-center"
      title="Mi nivel"
      titleIcon="mdi-map-marker"
      titleColor="green"
      :imgSrc="imgSrc"
      :cardColor="'deep-green'"
    >
      <div class="pt-4 pr-4 pl-4">
        <p class="text-h4 font-weight-medium"> Nivel 3 </p>
        <p class="text-body-1 font-weight-medium grey--text text--lighten-5"> ¡Supera retos y gana puntos de experiencia y gemas! </p>
      </div>
      <v-divider class="border-bold grey"></v-divider>
      <div class="pa-4">
        <p class="text-body-1 font-weight-normal white--text text-left"> Tienes 80 puntos </p>
        <v-progress-linear value="15" rounded height="10" color="blue lighten-1"></v-progress-linear>
        <p class="mt-2 text-body-1 font-weight-normal white--text text-right"> Sube de nivel con 120 puntos </p>
        <p class="mt-5 text-body-1 font-weight-medium grey--text text--lighten-5"> ¡Te faltan <b> 40 puntos de experiencia </b> para alcanzar tu meta! </p>
      </div>
    </ImageInfoSection>
  </div>
</template>

<script>
import ImageInfoSection from '@/components/ImageInfoSection.vue'

export default {
  name: 'Quests',
  components: {
    ImageInfoSection
  },
  data: () => ({
    imgSrc: 'experience.png'
  }),
  methods: {}
}
</script>
