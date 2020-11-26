<template>
  <div class="text-center">
    <v-dialog v-model="open" persistent width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="white--text" color="light-blue" v-bind="attrs" v-on="on">
          CAMBIAR OBJETIVO
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-body-1 font-weight-bold ">
          ¿Cúal es tu objetivo?
        </v-card-title>

        <v-divider></v-divider>

        <v-container>
          <small> ¿Qué te quieres comprar? </small>
          <v-text-field
            class="mt-3"
            color="light-blue"
            label="Objetivo"
            placeholder="Objetivo"
            type="text"
            outlined
            v-model="goalDescription"
          ></v-text-field>
          <small> ¿Cuánto cuesta? </small>
          <v-text-field
            class="mt-3"
            color="light-blue"
            label="Precio"
            placeholder="Precio"
            type="number"
            outlined
            suffix="€"
            v-model="goalPrice"
          ></v-text-field>
        </v-container>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="light-blue--text" text @click="close()">
            CANCELAR
          </v-btn>
          <v-btn class="white--text" color="light-blue" @click="save()">
            GUARDAR
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import ObjectivesService from '@/services/ObjectivesService'

export default {
  name: 'ChangeGoalDialog',
  props: {
    goalId: Number
  },
  data: () => ({
    open: false,
    goalDescription: '',
    goalPrice: null,
  }),
  methods: {
    close() {
      this.goalDescription = '';
      this.goalPrice = null;
      this.open = false;
    },
    async save() {
      await ObjectivesService.editObjective(this.goalId, this.goalDescription, this.goalPrice);
      this.$emit('update', {
        name: this.goalDescription,
        price: this.goalPrice
      });
      this.close();
    }
  }
}
</script>
