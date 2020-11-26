<template>
  <v-container>
    <v-row>
      <v-col v-for="(item, index) in items" :key="index" cols="6">
        <ShopItem v-bind="item" :button-disabled="item.used" :button-text="buttonText(item)" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ShopItem from '../components/ShopItem.vue'

export default {
  name: 'Inventory',
  components: { ShopItem },
  data() {
    return {
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
