<template>
  <v-card
    class="mx-auto"
    outlined
  >
    <v-list-item>
      <v-list-item-avatar
        size="100"
      >
        <ProgressButton
          level="5"
          size="90"
          width="9"
          color="light-blue lighten-3"
          :maxValue="nextLevelPoints"
          :currentValue="currentLevelPoints"
        />
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">
          Headline 5
        </v-list-item-title>
        <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
        <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
import ProgressButton from '@/components/ProgressButton.vue'

export default {
  name: 'UserInfoCard',
  components: {
    ProgressButton
  },
  data: () => ({
    currentLevelPoints: 80,
    nextLevelPoints: 100,
  })
}
</script>
