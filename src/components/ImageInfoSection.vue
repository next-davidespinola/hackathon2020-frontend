
<template>
  <v-card
    class="white--text"
    rounded="xl"
    outlined
    color="gold darken-6"
  >
    <div class="pt-4 pr-4 pl-4 text-body-1 font-weight-medium amber--text lighten-3 d-flex flex-row align-center justify-space-between">
      {{ title }}
      <v-icon class="amber--text text--lighten-3">
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
    imgSrc: String
  },
  data: () => ({
    //
  }),
  methods: {
    getImageUrl() {
      return require('../assets/images/' + this.imgSrc);
    }
  }
}
</script>
