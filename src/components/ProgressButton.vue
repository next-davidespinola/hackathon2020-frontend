<template>
  <div class="progress-button-container">
    <v-btn
      class="ma-2"
      outlined
      large
      fab
      color="white"
    >
      <v-progress-circular
        :size="size"
        :width="width"
        :value="70"
        :color="color"
      >
        <div v-if="level" class="d-flex flex-column align-center">
          <h1> {{level}} </h1>
          <p> Nivel </p>
        </div>

        <v-icon v-else large>
          mdi-diamond-stone
        </v-icon>
      </v-progress-circular>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'ProgressButton',
  props: {
    level: Number,
    color: String,
    size: String,
    width: String
  },
  data: () => ({
    //
  })
}
</script>
