<template>
  <div class="white--text d-flex flex-column align-center profile-view-container">
    <UserInfoCard/>
    <UserAvatar/>
    <div class="options-container d-flex">
      <v-btn
        v-for="(item, index) in items"
        :key="index"
        class="mx-2"
        fab
        dark
        large
        color="purple"
      >
        <v-icon dark>
          mdi-android
        </v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import UserInfoCard from '@/components/UserInfoCard.vue'
import UserAvatar from '@/components/UserAvatar.vue'

export default {
  name: 'Profile',
  components: {
    UserInfoCard,
    UserAvatar
  },
  data() {
    return {
      items: [
        { mensaje: 'Foo' },
        { mensaje: 'Bar' },
        { mensaje: 'Bar' }
      ]
    }
  }
}
</script>
