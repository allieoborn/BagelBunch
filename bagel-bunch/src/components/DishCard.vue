<template>
  <div>
    <v-card class="d-flex flex-row align-center pa-3">
      <h4 class="mb-0 mr-4">{{ dish[0] }}</h4>
      <v-btn @click="addIngredient">Add Ingredient</v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "DishCard",
  props: {
    dish: Array,
  },
  methods: {
    addIngredient() {
      this.dish.push("Another Thing");
    },
  },
  created() {
    console.log(this.dish);
  },
};
</script>

<style>
</style>