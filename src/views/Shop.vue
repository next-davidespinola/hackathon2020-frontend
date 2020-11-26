<template>
  <v-container>
    <v-row>
      <v-col v-for="(item, index) in items" :key="index" cols="6">
        <ShopItem v-bind="item" :disabled="!hasRequiredLevel(item)" button-text="Comprar" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ShopItem from '../components/ShopItem.vue'

export default {
  name: 'Shop',
  components: { ShopItem },
  props: {
    data: { type: Object, required: true }
  },
  data() {
    return {
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
