<template>
  <div>
    <v-container v-if="!orderSubmitted">
      <div class="d-flex justify-space-between">
        <h1>Order</h1>
        <v-btn color="primary" @click="submitOrder">Done</v-btn>
      </div>
      <hr />

      <!-- Card for each dish in the order so far -->
      <v-card v-for="d of this.order.dishes" :key="d.dish[0]">
        <h4 class="pa-6">{{ d.dish[0] }}</h4>
      </v-card>
      <div
        class="d-flex flex-row pa-6 align-center justify-center"
        @click="newDish"
      >
        <h3 class="m-0 pr-6">Add Item</h3>
        <v-icon x-large>mdi-plus-circle</v-icon>
      </div>
    </v-container>

    <div v-else class="d-flex justify-center align-center">
      <h1>Order Submitted!</h1>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      order: {
        // account ID is automatically sent ?I THINK? so we don't need to handle it here
        milliseconds: 1234, // number
        cost: 2345, // number
        dishes: [
          { dish: ["Original Bagel", "salsa"] },
          { dish: ["Cheesy Bagel", "Something on it"] },
        ],
      },
      orderSubmitted: false,
    };
  },
  methods: {
    newDish() {
      this.order.dishes.push({ dish: ["Cheesy Bagel"] });
    },
    submitOrder() {
      console.log(this.order);
      this.$func.order(this.order).then((resp) => {
        this.orderSubmitted = resp;
      });
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
