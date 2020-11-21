<template>
  <v-container>
    <div class="d-flex justify-space-between">
      <h1>Order</h1>
      <v-btn color="primary">Done</v-btn>
    </div>
    <hr />

    <!-- Card for each dish in the order so far -->
    <v-card v-for="d of this.order.dishes" :key="d.dish[0]">
      <h4 class="pa-6">{{ d.dish[0] }}</h4>
    </v-card>
    <div
      class="d-flex flex-row pa-6 align-center justify-center"
      @click="addDish"
    >
      <h3 class="m-0 pr-6">Add Item</h3>
      <v-icon x-large>mdi-plus-circle</v-icon>
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      order: {
        accountID: "", // string
        milliseconds: 0, // number
        cost: 0, // number
        dishes: [
          { dish: ["Original Bagel", "salsa"] },
          { dish: ["Cheesy Bagel", "Something on it"] },
        ],
      },
    };
  },
  methods: {
    addDish() {
      this.order.dishes.push({ dish: ["Cheesy Bagel"] });
    },
  },
  created() {
    console.log(this.menu);
  },
  computed: {
    ...mapGetters({
      menu: "parsedMenu",
    }),
  },
};
</script>
