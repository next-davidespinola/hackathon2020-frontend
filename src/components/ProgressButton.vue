<template>
  <div>
    <v-btn
      class="ma-2"
      outlined
      large
      fab
      color="white"
    >
      <v-progress-circular
        :rotate="-90"
        :size="100"
        :width="15"
        :value="20"
        color="primary"
      >
        <!-- <v-icon dark>
          mdi-android
        </v-icon> -->

        <div class="d-flex flex-column align-center">
          <h1> 3 </h1>
          <p> Nivel </p>
        </div>
      </v-progress-circular>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'ProgressButton',

  data: () => ({
    //
  })
}
</script>
