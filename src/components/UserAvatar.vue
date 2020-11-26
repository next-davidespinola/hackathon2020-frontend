<template>
  <v-container class="user-avatar-container d-flex flex-column align-center">
    <v-img id="avatar" contain :src="getAvatarUrl()"></v-img>
    <v-img id="pet" contain src="../assets/images/cat.svg"></v-img>
  </v-container>
</template>

<script>
import { getUserAvatar, getPetAvatar } from '../utils/avatarImages'

export default {
  name: 'UserAvatar',
  props: {
    id: Number
  },
  data: () => ({
    //
  }),
  methods: {
    getAvatarUrl() {
      return require('@/' + getUserAvatar(this.id));
    },
  }
}
</script>
