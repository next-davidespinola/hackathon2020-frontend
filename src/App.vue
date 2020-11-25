<template>
  <v-app>
    <v-content>
      <router-view></router-view>
    </v-content>
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
