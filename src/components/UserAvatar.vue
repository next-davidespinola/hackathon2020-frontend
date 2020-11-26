<template>
  <v-container class="user-avatar-container d-flex flex-column align-center">
    <v-img id="avatar" contain :src="getAvatarUrl()"></v-img>
    <v-img id="pet" contain :src="getPetAvatarUrl()"></v-img>
  </v-container>
</template>

<script>
import { getUserAvatar, getPetAvatar } from '../utils/avatarImages'

export default {
  name: 'UserAvatar',
  props: {
    userId: Number,
    inventory: Array
  },
  data: () => ({
    //
  }),
  methods: {
    getAvatarUrl() {
      return require('@/' + getUserAvatar(this.userId));
    },
    getPetAvatarUrl() {
      return require('@/' + getPetAvatar(this.inventory));
    }
  }
}
</script>
