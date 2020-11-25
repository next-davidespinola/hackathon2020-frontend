<template>
  <div class="white--text d-flex flex-column align-center profile-view-container">
    <UserInfoCard />
    <UserAvatar />
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
        @click="item.onclick()"
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
          currentValue: 70,
          onclick: this.openObjectives
        },
        {
          color: 'deep-purple lighten-2',
          icon: 'mdi-cart',
          maxValue: 100,
          currentValue: 100,
          onclick: this.openShop
        },
        {
          color: 'green lighten-1',
          icon: 'mdi-flag-checkered',
          maxValue: 10,
          currentValue: 5,
          onclick: this.openQuests
        },
        {
          color: 'light-blue lighten-3',
          icon: 'mdi-bag-personal',
          maxValue: 100,
          currentValue: 30,
          onclick: this.openBackpack
        }
      ]
    }
  },
  methods: {
    async openObjectives() {
      const result = await openDialog(UserAvatar, { backgroundColor: 'gold', title: 'Mis objetivos' }, {})
      console.log('dialog closed with result:', result)
    },
    async openShop() {
      const result = await openDialog(UserAvatar, { backgroundColor: 'deep-purple', title: 'Mercado de gemas' }, {})
      console.log('dialog closed with result:', result)
    },
    async openQuests() {
      const result = await openDialog(UserAvatar, { backgroundColor: 'green lighten-1', title: 'Mis misiones' }, {})
      console.log('dialog closed with result:', result)
    },
    async openBackpack() {
      const result = await openDialog(UserAvatar, { backgroundColor: 'light-blue lighten-1', title: 'Mi mochila' }, {})
      console.log('dialog closed with result:', result)
    }
  }
}
</script>
