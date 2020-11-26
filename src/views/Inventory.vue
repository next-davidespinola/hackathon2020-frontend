<template>
  <div>
    <ImageInfoSection
      class="d-flex flex-column text-center"
      title="Mi nivel"
      titleIcon="mdi-bag-personal"
      titleColor="blue"
      :imgSrc="imgSrc"
      :cardColor="'deep-blue'"
    >
      <div class="pt-2 pb-2 pr-4 pl-4">
        <p class="mb-1 font-weight-regular text-h6 grey--text text--lighten-3">{{ motivationMessage }}</p>
        <p v-if="backgroundCount" class="mb-1 text-h4 white--text font-weight-medium">
          {{ backgroundCount }} fondo{{ plural(backgroundCount) }}
        </p>
        <p v-if="petCount" class="text-h4 white--text font-weight-medium">
          {{ petCount }} mascota{{ plural(petCount) }}
        </p>
      </div>
    </ImageInfoSection>

    <v-container class="px-0">
      <v-row>
        <v-col v-for="(item, index) in items" :key="index" cols="6">
          <ShopItem @click="useItem(item)" v-bind="item" :button-disabled="item.used" :button-text="buttonText(item)" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ImageInfoSection from '@/components/ImageInfoSection.vue'
import ShopItem from '../components/ShopItem.vue'
import cloneDeep from 'lodash/cloneDeep'
import ProfileService from '@/services/ProfileService'

export default {
  name: 'Inventory',
  components: {
    ImageInfoSection,
    ShopItem
  },
  props: {
    data: { type: Object, required: true }
  },
  data() {
    return {
      imgSrc: 'bag.png',
      items: [],
      originalPet: null,
      originalBackground: null
    }
  },
  mounted() {
    this.items = cloneDeep(this.data.items)
    this.originalPet = (this.items.find(item => item.used && item.type === 'pet') || {}).id
    this.originalBackground = (this.items.find(item => item.used && item.type === 'background') || {}).id
  },
  computed: {
    backgroundCount() {
      return this.items.filter(item => item.type === 'background').length
    },
    petCount() {
      return this.items.filter(item => item.type === 'pet').length
    },
    motivationMessage() {
      return this.backgroundCount + this.petCount > 0
        ? '¡Tienes muchas cosas en tu mochila!'
        : '¡Vamos a la tienda a comprar regalos!'
    }
  },
  methods: {
    buttonText(item) {
      return item.used ? 'Actual' : 'Usar'
    },
    plural(count) {
      return count > 1 ? 's' : ''
    },
    useItem(selectedItem) {
      this.items
        .filter(item => item.used && item.type === selectedItem.type)
        .forEach(item => {
          item.used = false
        })
      selectedItem.used = true
    },
    async onClose() {
      const selectedPet = (this.items.find(item => item.used && item.type === 'pet') || {}).id
      const selectedBackground = (this.items.find(item => item.used && item.type === 'background') || {}).id
      const changedSelection = await ProfileService.updateUsedItems(
        this.originalPet,
        selectedPet,
        this.originalBackground,
        selectedBackground
      )
      return changedSelection
    }
  }
}
</script>
