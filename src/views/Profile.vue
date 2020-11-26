<template>
  <div class="white--text d-flex flex-column align-center profile-view-container pt-6 pb-6 pl-4 pr-4">
    <video autoplay muted loop id="myVideo">
      <source :src="getVideoUrl()" type="video/mp4" />
      Your browser does not support HTML5 video.
    </video>
    <UserInfoCard :user="player" />
    <UserAvatar v-if="player" :userId="player.id" :inventory="player.inventory" class="flex-grow-1" />
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
import ProfileService from '@/services/ProfileService'

export default {
  name: 'Profile',
  components: {
    UserInfoCard,
    UserAvatar,
    ProgressButton
  },
  async beforeRouteEnter(to, from, next) {
    const player = await ProfileService.getPlayer(to.query.id)
    next(vm => {
      vm.player = player
    })
  },
  data() {
    return {
      player: null,
      items: [
        {
          color: 'amber lighten-2',
          icon: 'mdi-bullseye-arrow',
          maxValue: 1,
          currentValue: 1,
          onclick: this.openObjectives
        },
        {
          color: 'deep-purple lighten-2',
          icon: 'mdi-cart',
          maxValue: 1,
          currentValue: 1,
          onclick: this.openShop
        },
        {
          color: 'green lighten-1',
          icon: 'mdi-flag-checkered',
          maxValue: 1,
          currentValue: 1,
          onclick: this.openQuests
        },
        {
          color: 'light-blue lighten-3',
          icon: 'mdi-bag-personal',
          maxValue: 1,
          currentValue: 1,
          onclick: this.openInventory
        }
      ]
    }
  },
  methods: {
    getVideoUrl() {
      return require('../assets/videos/space.mp4')
    },
    async openObjectives() {
      const { default: component } = await import('./Objectives.vue')
      const result = await openDialog(component, { backgroundColor: 'gold', title: 'Mis objetivos' }, {})
      console.log('dialog closed with result:', result)
    },
    async openShop() {
      const { default: component } = await import('./Shop.vue')
      const result = await openDialog(
        component,
        { backgroundColor: 'deep-purple', title: 'Mercado de gemas' },
        { playerLevel: 3 }
      )
      console.log('dialog closed with result:', result)
    },
    async openQuests() {
      const { default: component } = await import('./Quests.vue')
      const result = await openDialog(component, { backgroundColor: 'green lighten-1', title: 'Mis misiones' }, {})
      console.log('dialog closed with result:', result)
    },
    async openInventory() {
      const { default: component } = await import('./Inventory.vue')
      const changedItems = await openDialog(
        component,
        { backgroundColor: 'light-blue lighten-1', title: 'Mi mochila' },
        { items: this.player.inventory }
      )
      if (changedItems) this.refresh()
    },
    async refresh() {
      this.player = await ProfileService.getPlayer(this.$route.query.id)
    }
  }
}
</script>
