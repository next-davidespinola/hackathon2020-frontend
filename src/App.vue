<template>
  <v-app>
    <v-main class="pt-6 pb-6 pl-4 pr-4">
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
