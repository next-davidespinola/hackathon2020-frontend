<template>
  <v-card
    class=""
    rounded="xl"
    min-width="296"
    outlined
  >
    <v-list-item v-if="user">
      <v-list-item-avatar
        size="90"
      >
        <ProgressButton
          :level="user.level"
          size="90"
          width="9"
          color="light-blue lighten-3"
          :maxValue="user.currentExp + user.nextLevelExp"
          :currentValue="user.currentExp"
        />
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="text-h4 font-weight-bold mb-1">
          {{ user.nickName }}
        </v-list-item-title>
        <div class="d-flex align-center text-body-1 font-weight-regular">
          <v-icon class="amber--text lighten-2 mr-1" small>
            mdi-cash-multiple
          </v-icon>
          <p class="ma-0 black--text"> {{ user.money }} Euros </p>
        </div>
        <div class="d-flex align-center text-body-1 font-weight-regular">
          <v-icon class="deep-purple--text lighten-2 mr-1" small>
            mdi-diamond-stone
          </v-icon>
          <p class="ma-0 black--text"> {{ user.gems }} Gemas </p>
        </div>
        <div class="text-body-1 font-weight-regular d-flex align-start">
          <v-icon class="blue--text text--lighten-2 mt-1 mr-1" small>
            mdi-decagram-outline
          </v-icon>
          <p class="ma-0 black--text"> {{ user.currentExp }} Puntos de Experiencia </p>
        </div>
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
  props: {
    user: Object
  },
  data: () => ({
    //
  })
}
</script>
