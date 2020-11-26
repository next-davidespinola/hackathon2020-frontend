<template>
  <v-dialog v-model="open" scrollable fullscreen transition="slide-y-reverse-transition" origin="center bottom">
    <v-card class="white--text" :class="{ [options.backgroundColor]: !!options.backgroundColor }">
      <v-card-title class="d-flex justify-space-between">
        <span>{{ options.title }}</span>
        <v-btn icon class="white--text ma-2" @click="close()">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <component :is="content" :data="data" @close="close($event)" />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { state, closeDialog } from './'

export default {
  name: 'GlobalDialog',
  data: () => ({
    open: false
  }),
  computed: {
    content() {
      return state.component
    },
    data() {
      return state.data
    },
    options() {
      const { backgroundColor, title } = state.options || {}
      return { backgroundColor, title }
    }
  },
  methods: {
    close(result) {
      closeDialog(result)
    }
  },
  watch: {
    content() {
      this.open = !!this.content
    },
    open() {
      if (this.open === false) closeDialog()
    }
  }
}
</script>
