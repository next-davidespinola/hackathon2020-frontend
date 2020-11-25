<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
    <GlobalDialog />
  </v-app>
</template>

<script>
import GlobalDialog from './components/dialog/GlobalDialog'

export default {
  name: 'App',

  components: { GlobalDialog },

  data: () => ({
    //
  })
}
</script>
