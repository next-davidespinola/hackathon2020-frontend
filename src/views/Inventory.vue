<template>
  <div>
    <ImageInfoSection
      class="d-flex flex-column text-center"
      title="Mi nivel"
      titleIcon="mdi-bag-personal"
      titleColor="blue"
      :imgSrc="imgSrc"
      :cardColor="'deep-blue'"
    >
      <div class="pt-2 pb-2 pr-4 pl-4">
        <p class="mb-1 font-weight-regular text-h6 grey--text text--lighten-3"> ¡Tines muchas cosas en tu mochila! </p>
        <p class="mb-1 text-h4 white--text font-weight-medium"> 2 fondos </p>
        <p class="text-h4 white--text font-weight-medium"> 2 mascotas </p>
      </div>
    </ImageInfoSection>

    <v-container>
      <v-row>
        <v-col v-for="(item, index) in items" :key="index" cols="6">
          <ShopItem v-bind="item" :button-disabled="item.used" :button-text="buttonText(item)" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ImageInfoSection from '@/components/ImageInfoSection.vue'
import ShopItem from '../components/ShopItem.vue'

export default {
  name: 'Inventory',
  components: {
    ImageInfoSection,
    ShopItem
  },
  data() {
    return {
      imgSrc: 'bag.png',
      items: [
        {
          id: 3,
          type: 'pet',
          name: 'Gato',
          requiredLevel: 2,
          used: true
        },
        {
          id: 5,
          type: 'background',
          name: 'Fondo cielo',
          requiredLevel: 2,
          used: true
        },
        {
          id: 1,
          type: 'pet',
          name: 'Abeja',
          requiredLevel: 3
        },
        {
          id: 2,
          type: 'background',
          name: 'Fondo espacial',
          requiredLevel: 3
        }
      ]
    }
  },
  methods: {
    buttonText(item) {
      return item.used ? 'Actual' : 'Usar'
    }
  }
}
</script>
