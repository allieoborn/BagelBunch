<template>
  <div>
    <v-container v-if="!orderSubmitted">
      <!-- Top stuff -->
      <div class="d-flex justify-space-between">
        <h1>Order</h1>
        <v-btn color="primary" class="black--text" @click="submitOrder">Order Complete</v-btn>
      </div>
      <hr />

      <!-- Card for each dish in the order so far -->
      <v-expansion-panels :key="updateItem">
        <dish-card
          v-for="(d, i) of this.dishes"
          :key="i"
          :dishProp="d.dish"
          class="my-3"
          @delete="deleteDish(d)"
          @edit="editDish($event)"
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
      milliseconds: 1234, // number
      cost: 2345, // number
      dishes: [],
      orderSubmitted: false,
      overlay: false,
      currentDish: "Item 1",
      dishToEdit: null,
      updateItem: false,
    };
  },
  methods: {
    newDish() {
      this.overlay = true;
      this.currentDish = `Item ${this.dishes.length + 1}`;
    },
    dishDone(thisDish) {
      if (this.dishToEdit != null) {
        this.deleteDish(thisDish);
        this.dishes.push({ dish: thisDish.dish.map((d) => d.name) });
        this.updateItem = !this.updateItem;
      } else {
        this.dishes.push({ dish: thisDish.dish.map((d) => d.name) });
      }
    },
    deleteDish(dish) {
      var indexToDelete = null;
      if (this.dishToEdit != null) {
        // editing and deleting the old item
        this.dishes.forEach((thisDish, i) => {
          if (thisDish.dish[0] == this.dishToEdit.dish[0]) {
            indexToDelete = i;
          }
        });
        this.dishes.splice(indexToDelete, 1);
      } else {
        // hitting the delete button
        this.dishes.forEach((thisDish, i) => {
          if (thisDish.dish[0] == dish.dish[0]) {
            indexToDelete = i;
          }
        });
        this.dishes.splice(indexToDelete, 1);
      }
    },
    editDish(dish) {
      this.dishToEdit = { dish: dish };
      this.overlay = true;
    },
    submitOrder() {
      this.$func
        .order({
          dishes: this.dishes,
          cost: this.cost,
          milliseconds: this.milliseconds,
        })
        .then((resp) => {
          this.orderSubmitted = resp; // possibly make an animation for order sent, order recieved
        });
    },
    switchOff() {
      this.overlay = false;
      this.dishToEdit = null;
    },
  },
};
</script>
