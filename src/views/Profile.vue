<template>
  <div class="white--text d-flex flex-column align-center profile-view-container">
    <UserInfoCard/>
    <UserAvatar/>
    <div class="options-container d-flex justify-space-between">
      <ProgressButton
        v-for="(item, index) in items"
        :key="index"/>
    </div>
  </div>
</template>

<script>
import UserInfoCard from '@/components/UserInfoCard.vue'
import UserAvatar from '@/components/UserAvatar.vue'
import ProgressButton from '@/components/ProgressButton.vue'

export default {
  name: 'Profile',
  components: {
    UserInfoCard,
    UserAvatar,
    ProgressButton
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
