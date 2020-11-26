
<template>
  <v-card
    class="white--text"
    rounded="xl"
    outlined
    :color="cardColor"
  >
    <div class="pt-4 pr-4 pl-4 text-body-1 font-weight-medium d-flex flex-row align-center justify-space-between" :class="getTitleClass()">
      {{ title }}
      <v-icon :class="getTitleClass()">
        {{ titleIcon }}
      </v-icon>
    </div>
    <v-img contain :src="getImageUrl()" min-height="180"></v-img>
    <slot></slot>
  </v-card>
</template>

<script>
import UserAvatar from '@/components/UserAvatar.vue'

export default {
  name: 'ImageInfoSection',
  components: {
    UserAvatar
  },
  props: {
    title: String,
    titleIcon: String,
    imgSrc: String,
    cardColor: String,
    titleColor: String
  },
  data: () => ({
    //
  }),
  methods: {
    getImageUrl() {
      return require('../assets/images/' + this.imgSrc);
    },
    getTitleClass() {
      return {[`${this.titleColor}--text text--lighten-3`]: true};
    }
  }
}
</script>
