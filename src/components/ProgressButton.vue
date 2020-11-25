<template>
  <div class="progress-button-container">
    <v-btn class="ma-2" outlined large fab color="white" @click="$emit('click')">
      <v-progress-circular :rotate="90" :size="size" :width="width" :value="progressValue" :color="color">
        <div v-if="level" class="d-flex flex-column align-center">
          <h1>{{ level }}</h1>
          <p>Nivel</p>
        </div>

        <v-icon v-else large>
          {{ icon }}
        </v-icon>
      </v-progress-circular>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'ProgressButton',
  props: {
    level: String,
    color: String,
    size: String,
    width: String,
    icon: String,
    maxValue: Number,
    currentValue: Number
  },
  computed: {
    progressValue() {
      if (!this.currentValue || !this.maxValue) {
        return 100
      }
      return (this.currentValue * 100) / this.maxValue
    }
  },
  data: () => ({
    //
  })
}
</script>
