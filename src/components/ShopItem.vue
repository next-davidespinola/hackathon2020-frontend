<template>
  <v-card rounded="xl" elevation="2" :class="disabled ? 'disabled' : ''" :color="disabled ? 'grey lighten-1' : ''">
    <v-card-title class="d-flex flex-row-reverse">
      <v-chip x-small color="light-blue" class="white--text"> Nivel {{ requiredLevel }} </v-chip>
    </v-card-title>
    <v-card-text>
      <v-img class="ma-3" :src="image"></v-img>

      <h3 class="text--h6 black--text text-center mb-1">{{ name }}</h3>

      <div v-if="requiredGems" class="d-flex justify-center">
        <span class="deep-purple--text lighten-2">
          - {{ requiredGems }}
          <v-icon small class="deep-purple--text lighten-2">
            mdi-diamond-stone
          </v-icon>
        </span>
      </div>

      <div v-if="buttonText" class="d-flex justify-center mt-2">
        <v-btn @click="$emit('click')" class="white--text" color="light-blue" :disabled="disabled || buttonDisabled">{{
          buttonText
        }}</v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import { getShopItemImage } from '../utils/shopItemImages'

export default {
  name: 'ShopItem',

  props: {
    id: { type: Number, required: true },
    type: { type: String, required: true },
    name: { type: String, required: true },
    requiredLevel: { type: Number, required: true },
    requiredGems: { type: Number, default: 0 },
    disabled: { type: Boolean, default: false },
    buttonText: { type: String },
    buttonDisabled: { type: Boolean, default: false }
  },

  data: () => ({
    //
  }),

  computed: {
    image() {
      return require('@/' + getShopItemImage(this.id))
    }
  }
}
</script>
<style lang="scss" scoped>
.disabled {
  filter: grayscale(100%);
}
</style>
