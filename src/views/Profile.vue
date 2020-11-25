<template>
  <div class="profile">
    <UserInfoCard />
    <SavingsCard />
    <GemsCard />
    <ChallengesCard />
  </div>
</template>

<script>
import UserInfoCard from '@/components/UserInfoCard.vue'
import SavingsCard from '@/components/SavingsCard.vue'
import GemsCard from '@/components/GemsCard.vue'
import ChallengesCard from '@/components/ChallengesCard.vue'

export default {
  name: 'Profile',
  components: {
    UserInfoCard,
    SavingsCard,
    GemsCard,
    ChallengesCard
  }
}
</script>
