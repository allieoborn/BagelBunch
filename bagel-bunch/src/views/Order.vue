<template>
  <div>
    <v-container v-if="!orderSubmitted">
      <div class="d-flex justify-space-between">
        <h1>Order</h1>
        <v-btn @click="printOrder">Print Order</v-btn>
        <v-btn color="primary" @click="submitOrder">Order Complete</v-btn>
      </div>
      <hr />

      <!-- Card for each dish in the order so far -->
      <dish-card
        v-for="d of this.order.dishes"
        :key="d.dish[0]"
        :dish="d.dish"
        class="my-3"
      />

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
import DishCard from "@/components/DishCard.vue";

export default {
  name: "Home",
  components: {
    DishCard,
  },
  data() {
    return {
      order: {
        // account ID is automatically sent so we don't need to handle it here
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
      this.$func.order(this.order).then((resp) => {
        this.orderSubmitted = resp; // possibly make an animation for order sent, order recieved
      });
    },
    printOrder() {
      console.log(this.order);
    },
  },
  computed: {
    ...mapGetters({
      menu: "parsedMenu",
    }),
  },
};
</script>
