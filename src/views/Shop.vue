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
        <p class="text-h4 white--text font-weight-medium">{{ playerGems }} Gemas</p>
        <p class="mt-5 font-weight-regular text-h6 grey--text text--lighten-3">
          ¡Tus ahorros generan interés! Ganas <b> 8 Gemas </b> cada viernes
        </p>
      </div>
    </ImageInfoSection>

    <v-container class="px-0">
      <v-row>
        <v-col v-for="(item, index) in items" :key="index" cols="6">
          <ShopItem
            @click="purchaseItem(item, index)"
            v-bind="item"
            :disabled="!hasRequiredLevel(item)"
            :button-disabled="!hasRequiredGems(item)"
            button-text="Comprar"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ImageInfoSection from '@/components/ImageInfoSection.vue'
import ShopItem from '../components/ShopItem.vue'
import ShopService from '@/services/ShopService'

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
      playerGems: 0,
      items: [],
      somethingChanged: false
    }
  },
  mounted() {
    this.items = this.data.items
    this.playerGems = this.data.playerGems
  },
  methods: {
    hasRequiredLevel(item) {
      return this.data.playerLevel >= item.requiredLevel
    },
    hasRequiredGems(item) {
      return this.playerGems >= item.requiredGems
    },
    async purchaseItem(item, index) {
      await ShopService.purchaseItem(item.id)
      this.playerGems = this.playerGems - item.requiredGems
      this.items.splice(index, 1)
      this.somethingChanged = true
    },
    onClose() {
      return this.somethingChanged
    }
  }
}
</script>
