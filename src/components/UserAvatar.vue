<template>
  <v-container class="user-avatar-container d-flex flex-column align-center">
    <v-img id="avatar" contain src="../assets/images/avatar.svg"></v-img>
    <v-img id="pet" contain src="../assets/images/cat.svg"></v-img>
  </v-container>
</template>

<script>
export default {
  name: 'UserAvatar',

  data: () => ({
    //
  })
}
</script>
