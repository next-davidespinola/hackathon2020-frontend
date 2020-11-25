<template>
  <v-dialog v-model="open" scrollable max-width="600px">
    <v-card>
      <div class="d-flex justify-end">
        <v-btn icon class="d-flex justify-end ma-2" @click="close()">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
      <component :is="content" :data="data" @close="close($event)" />
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
