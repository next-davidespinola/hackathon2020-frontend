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
        :color="item.color"
        :icon="item.icon"
        :maxValue="item.maxValue"
        :currentValue="item.currentValue"
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
        {
          color: 'amber lighten-2',
          icon: 'mdi-bullseye-arrow',
          maxValue: 100,
          currentValue: 70
        },
        {
          color: 'deep-purple lighten-2',
          icon: 'mdi-cart',
          maxValue: 100,
          currentValue: 100
        },
        {
          color: 'green lighten-1',
          icon: 'mdi-flag-checkered',
          maxValue: 10,
          currentValue: 5
        },
        {
          color: 'light-blue lighten-3',
          icon: 'mdi-bag-personal',
          maxValue: 100,
          currentValue: 30
        }
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
