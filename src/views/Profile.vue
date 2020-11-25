<template>
  <div class="white--text d-flex flex-column align-center profile-view-container">
    <UserInfoCard/>
    <v-btn @click="openDialog()">Open</v-btn>
    <UserAvatar/>
    <div class="options-container d-flex justify-space-between">
      <ProgressButton
        v-for="(item, index) in items"
        :key="index"
        size="60"
        width="5"
        color="purple"
      />
    </div>
  </div>
</template>

<script>
import UserInfoCard from '@/components/UserInfoCard.vue'
import UserAvatar from '@/components/UserAvatar.vue'
import ProgressButton from '@/components/ProgressButton.vue'
import { openDialog } from '../components/dialog'

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
  },
  methods: {
    async openDialog() {
      const result = await openDialog(ChallengesCard, {})
      alert('dialog closed with result:\n' + JSON.stringify(result))
    }
  }
}
</script>
