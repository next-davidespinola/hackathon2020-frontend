<template>
  <v-card
    class=""
    rounded="xl"
    min-width="296"
    outlined
  >
    <v-list-item>
      <v-list-item-avatar
        size="90"
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
        <v-list-item-title class="text-h4 font-weight-bold mb-1">
          José
        </v-list-item-title>
        <v-list-item-subtitle class="text-body-1 font-weight-regular amber--text lighten-2">
          <v-icon class="amber--text lighten-2" small>
            mdi-cash-multiple
          </v-icon>
          10 Euros
        </v-list-item-subtitle>
        <v-list-item-subtitle class="text-body-1 font-weight-regular deep-purple--text lighten-2">
          <v-icon class="deep-purple--text lighten-2" small>
            mdi-diamond-stone
          </v-icon>
          800 Gemas
        </v-list-item-subtitle>
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
