<template>
  <div class="white--text d-flex flex-column align-center profile-view-container pt-6 pb-6 pl-4 pr-4">
    <UserInfoCard />
    <UserAvatar class="flex-grow-1" />
    <div class="options-container d-flex justify-space-between">
      <ProgressButton
        v-for="(item, index) in items"
        :key="index"
        size="56"
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
          onclick: this.openInventory
        }
      ]
    }
  },
  methods: {
    async openObjectives() {
      const { default: component } = await import('./Objectives.vue')
      const result = await openDialog(component, { backgroundColor: 'gold', title: 'Mis objetivos' }, {})
      console.log('dialog closed with result:', result)
    },
    async openShop() {
      const { default: component } = await import('./Shop.vue')
      const result = await openDialog(component, { backgroundColor: 'deep-purple', title: 'Mercado de gemas' }, {})
      console.log('dialog closed with result:', result)
    },
    async openQuests() {
      const { default: component } = await import('./Quests.vue')
      const result = await openDialog(component, { backgroundColor: 'green lighten-1', title: 'Mis misiones' }, {})
      console.log('dialog closed with result:', result)
    },
    async openInventory() {
      const { default: component } = await import('./Inventory.vue')
      const result = await openDialog(component, { backgroundColor: 'light-blue lighten-1', title: 'Mi mochila' }, {})
      console.log('dialog closed with result:', result)
    }
  }
}
</script>
