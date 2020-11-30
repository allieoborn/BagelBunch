<template>
  <v-expansion-panel>
    <v-expansion-panel-header>
      <h4 class="mb-0 mr-4">{{ dish[0] }}</h4>
    </v-expansion-panel-header>

    <v-expansion-panel-content>
      <v-card class="d-flex flex-row align-center pa-3">
        <v-container>
          <v-row v-for="ing of dish.slice(1, dish.length)" :key="ing">{{
            ing
          }}</v-row>
        </v-container>
        <v-btn @click="addIngredient">Add Ingredient</v-btn>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {
  name: "DishCard",
  data() {
    return {
      dish: this.dishProp,
    };
  },
  props: {
    dishProp: Array,
  },
  methods: {
    addIngredient() {
      this.dish.push("Another Thing");
    },
  },
};
</script>

<style>
</style>