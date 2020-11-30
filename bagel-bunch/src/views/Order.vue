<template>
  <div>
    <v-container v-if="!orderSubmitted">
      <!-- Top stuff -->
      <div class="d-flex justify-space-between">
        <h1>Order</h1>
        <v-btn color="primary" @click="submitOrder">Order Complete</v-btn>
      </div>
      <hr />

      <!-- Card for each dish in the order so far -->
      <v-expansion-panels>
        <dish-card
          v-for="(d, i) of this.order.dishes"
          :key="i"
          :dishProp="d.dish"
          class="my-3"
        />
      </v-expansion-panels>

      <!-- Add item button -->
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

    <v-overlay :value="overlay">
      <edit-item-overlay
        :dishNameProp="currentDish"
        :dishProp="dishToEdit"
        :overlayProp="[overlay]"
        @switchOff="switchOff"
        @dishDone="dishDone($event)"
      />
    </v-overlay>
  </div>
</template>

<script>
import DishCard from "@/components/DishCard.vue";
import EditItemOverlay from "@/components/EditItemOverlay/EditItemOverlay.vue";

export default {
  name: "Home",
  components: {
    DishCard,
    EditItemOverlay,
  },
  data() {
    return {
      order: {
        // account ID is automatically sent so we don't need to handle it here
        milliseconds: 1234, // number
        cost: 2345, // number
        dishes: [],
      },
      orderSubmitted: false,
      overlay: false,
      currentDish: "Item 1",
      dishToEdit: [],
    };
  },
  methods: {
    newDish() {
      this.overlay = true;
      this.currentDish = `Item ${this.order.dishes.length + 1}`;
    },
    dishDone(thisDish) {
      this.order.dishes.push({ dish: thisDish });
    },
    submitOrder() {
      this.$func.order(this.order).then((resp) => {
        this.orderSubmitted = resp; // possibly make an animation for order sent, order recieved
      });
    },
    switchOff() {
      this.overlay = false;
    },
  },
};
</script>
