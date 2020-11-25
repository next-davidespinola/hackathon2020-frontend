<template>
  <div class="profile">
    <UserInfoCard />
    <SavingsCard />
    <GemsCard />
    <ChallengesCard />
    <v-btn @click="openDialog()">Open</v-btn>
  </div>
</template>

<script>
import UserInfoCard from '@/components/UserInfoCard.vue'
import SavingsCard from '@/components/SavingsCard.vue'
import GemsCard from '@/components/GemsCard.vue'
import ChallengesCard from '@/components/ChallengesCard.vue'
import { openDialog } from '../components/dialog'

export default {
  name: 'Profile',
  components: {
    UserInfoCard,
    SavingsCard,
    GemsCard,
    ChallengesCard
  },
  methods: {
    async openDialog() {
      const result = await openDialog(ChallengesCard, {})
      alert('dialog closed with result:\n' + JSON.stringify(result))
    }
  }
}
</script>
