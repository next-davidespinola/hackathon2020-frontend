<template>
  <div class="quests-view-container d-flex flex-column align-center justify-center">
    <ImageInfoSection
      class="d-flex flex-column text-center"
      title="Mi nivel"
      titleIcon="mdi-map-marker"
      titleColor="green"
      :imgSrc="imgSrc"
      :cardColor="'deep-green'"
    >
      <div class="pt-4 pr-4 pl-4">
        <p class="text-h4 font-weight-medium">Nivel {{ level }}</p>
        <p class="text-body-1 font-weight-medium grey--text text--lighten-5">
          ¡Supera retos y gana puntos de experiencia y gemas!
        </p>
      </div>
      <v-divider class="border-bold grey"></v-divider>
      <div class="pa-4">
        <p class="text-body-1 font-weight-normal white--text text-left">Tienes {{ currentExp }} puntos</p>
        <v-progress-linear
          :value="((500 - nextLevelExp) / 500) * 100"
          rounded
          height="10"
          color="blue lighten-1"
        ></v-progress-linear>
        <p class="mt-2 text-body-1 font-weight-normal white--text text-right">
          Sube de nivel con {{ currentExp + nextLevelExp }} puntos
        </p>
        <p class="mt-5 text-body-1 font-weight-medium grey--text text--lighten-5">
          ¡Te faltan <b> {{ nextLevelExp }} puntos de experiencia </b> para alcanzar tu meta!
        </p>
      </div>
    </ImageInfoSection>
    <v-container id="questsContainer">
      <QuestInfoCard
        @click="getRewards(quest, index)"
        v-for="(quest, index) in data.quests"
        :key="index"
        :questDetail="quest"
      />
    </v-container>
  </div>
</template>

<script>
import ImageInfoSection from '@/components/ImageInfoSection.vue'
import QuestInfoCard from '@/components/QuestInfoCard.vue'
import QuestService from '@/services/QuestService'

export default {
  name: 'Quests',
  components: {
    ImageInfoSection,
    QuestInfoCard
  },
  props: {
    data: { type: Object, required: true }
  },
  mounted() {
    this.level = this.data.level
    this.currentExp = this.data.currentExp
    this.nextLevelExp = this.data.nextLevelExp
  },
  data: () => ({
    imgSrc: 'experience.png',
    level: 0,
    currentExp: 0,
    nextLevelExp: 0,
    hasRewards: false
  }),
  methods: {
    async getRewards(quest, index) {
      await QuestService.getRewards(quest.id)
      this.data.quests.splice(index, 1)
      this.currentExp = this.currentExp + quest.rewardExp

      if (quest.rewardExp >= this.nextLevelExp) {
        this.level++
        this.nextLevelExp = 500 - (quest.rewardExp - this.nextLevelExp)
      } else {
        this.nextLevelExp = this.nextLevelExp - quest.rewardExp
      }
      this.hasRewards = true
    },
    onClose() {
      return this.hasRewards
    }
  }
}
</script>
