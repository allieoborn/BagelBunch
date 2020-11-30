<template>
  <div style="height: 100%" class="d-flex flex-row">
    <div class="scroller bagels">
      <v-item-group>
        <div v-for="(bagel, i) in menu.bagels" :key="i">
          <v-item v-slot="{ active, toggle }">
            <v-card
              class="ma-1"
              :color="active ? 'primary' : 'secondary'"
              @click="updateBagel(bagel, toggle)"
            >
              <h3 class="ma-0">{{ bagel.name }}</h3>
            </v-card>
          </v-item>
        </div>
      </v-item-group>
    </div>

    <div class="scroller bagels">
      <v-item-group multiple>
        <div v-for="(topping, i) in menu.toppings" :key="i">
          <v-item v-slot="{ active, toggle }">
            <v-card
              class="ma-1"
              :color="active ? 'primary' : 'secondary'"
              @click="updateToppings(topping, toggle)"
            >
              <h3 class="ma-0">{{ topping.name }}</h3>
            </v-card>
          </v-item>
        </div>
      </v-item-group>
    </div>
  </div>
</template>


<script>
import { mapGetters } from "vuex";
export default {
  name: "SelectBagelOptions",
  data() {
    return {
      bagel: null,
      toppings: [],
    };
  },
  methods: {
    updateBagel(bagel, toggle) {
      toggle();
      this.bagel = bagel;
    },
    updateToppings(topping, toggle) {
      toggle();
      // check if topping is already in the list and remove it if it is
      if (this.toppings.includes(topping)) {
        const index = this.toppings.indexOf(topping);
        if (index > -1) {
          this.toppings.splice(index, 1);
        }
      } else {
        // otherwise add it to the list
        this.toppings.push(topping);
      }
    },
  },
  computed: {
    ...mapGetters({
      menu: "parsedMenu",
    }),
  },
};
</script>

<style>
.bagels {
  width: 50%;
}

.scroller {
  height: 100%;
  overflow-y: scroll;
}
</style>