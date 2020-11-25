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
        :size="60"
        :width="5"
        :value="70"
        color="primary"
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
  },
  data: () => ({
    //
  })
}
</script>
