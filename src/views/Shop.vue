<template>
  <div class="d-flex flex-column align-center justify-center">
    <ImageInfoSection
      class="d-flex flex-column text-center"
      title="Mis gemas"
      titleIcon="mdi-diamond-stone"
      titleColor="purple"
      :imgSrc="imgSrc"
      :cardColor="'deep-purple darken-6'"
    >
      <div class="pb-4 pr-4 pl-4">
        <p class="text-h4 white--text font-weight-medium">800 Gemas</p>
        <p class="mt-5 font-weight-regular text-h6 grey--text text--lighten-3">
          ¡Tus ahorros generan interés! Ganas <b> 8 Gemas </b> cada viernes
        </p>
      </div>
    </ImageInfoSection>

    <v-container class="px-0">
      <v-row>
        <v-col v-for="(item, index) in items" :key="index" cols="6">
          <ShopItem v-bind="item" :disabled="!hasRequiredLevel(item)" button-text="Comprar" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ImageInfoSection from '@/components/ImageInfoSection.vue'
import ShopItem from '../components/ShopItem.vue'

export default {
  name: 'Shop',
  components: {
    ImageInfoSection,
    ShopItem
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      imgSrc: 'gems.png',
      items: [
        {
          id: 3,
          type: 'pet',
          name: 'Gato',
          requiredLevel: 2,
          requiredGems: 100
        },
        {
          id: 5,
          type: 'background',
          name: 'Fondo cielo',
          requiredLevel: 2,
          requiredGems: 100
        },
        {
          id: 1,
          type: 'pet',
          name: 'Abeja',
          requiredLevel: 3,
          requiredGems: 100
        },
        {
          id: 2,
          type: 'background',
          name: 'Fondo espacial',
          requiredLevel: 4,
          requiredGems: 300
        },
        {
          id: 4,
          type: 'pet',
          name: 'Pez',
          requiredLevel: 4,
          requiredGems: 100
        },
        {
          id: 6,
          type: 'pet',
          name: 'Tigre',
          requiredLevel: 5,
          requiredGems: 100
        }
      ]
    }
  },
  methods: {
    hasRequiredLevel(item) {
      return this.data.playerLevel >= item.requiredLevel
    }
  }
}
</script>
