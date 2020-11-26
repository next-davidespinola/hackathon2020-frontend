<template>
  <v-card class="mt-5 pa-4" rounded="xl" outlined>
    <div class="d-flex align-center">
      <v-img class="align-self-start mr-5" max-width="44" :src="getImageUrl()"></v-img>
      <div class="pa-0">
        <p class="text-left font-weight-bold mb-2">
          {{ questDetail.name }}
        </p>
        <div class="d-flex flex-row justify-left">
          <p class="d-flex mr-2 mb-0 text-caption font-weight-medium deep-purple--text text--lighten-3">
            +{{ questDetail.rewardGems }}
            <v-icon small class="small deep-purple--text text--lighten-3"> mdi-diamond-stone </v-icon>
          </p>
          <p class="d-flex ml-2 mb-0 text-caption font-weight-medium blue--text text--lighten-2">
            +{{ questDetail.rewardExp }}
            <v-icon small class="blue--text text--lighten-2"> mdi-decagram-outline </v-icon>
          </p>
        </div>
      </div>
    </div>
    <v-card-actions v-if="questDetail.completed" class="pa-0 justify-end">
      <div class="mt-2 d-flex justify-center">
        <v-btn @click="$emit('click')" class="white--text" color="light-blue">
          Reclamar recompensa
        </v-btn>
      </div>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'QuestInfoCard',
  props: {
    questDetail: Object
  },
  data: () => ({
    //
  }),
  methods: {
    getImageUrl() {
      return require(this.questDetail.completed ? '../assets/images/done.svg' : '../assets/images/todo.svg')
    }
  }
}
</script>
