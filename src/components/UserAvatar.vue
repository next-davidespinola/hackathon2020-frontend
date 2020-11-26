<template>
  <v-container class="user-avatar-container d-flex flex-column align-center">
    <v-img id="avatar" contain :src="getAvatarUrl()"></v-img>
    <v-img id="pet" v-if="petId" contain :src="getPetAvatarUrl()"></v-img>
  </v-container>
</template>

<script>
import { getUserAvatar } from '../utils/avatarImages'
import { getUsingItemResource } from '../utils/shopItemImages'

export default {
  name: 'UserAvatar',
  props: {
    userId: Number,
    inventory: Array
  },
  data: () => ({
    //
}),
  computed: {
    petId() {
      const usedItem = this.inventory.find((item) => {
        return item.used;
      })
      return usedItem ? usedItem.id : null;
    }
  },
  methods: {
    getAvatarUrl() {
      return require('@/' + getUserAvatar(this.userId));
    },
    getPetAvatarUrl() {
      return require('@/' + getUsingItemResource(this.petId));
    }
  }
}
</script>
