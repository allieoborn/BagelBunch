<template>
  <div style="height: 100%" class="d-flex flex-row">
    <div class="scroller bagels">
      <v-item-group v-model="selectedBagel">
        <div v-for="(bagel, i) in menu.bagels" :key="i">
          <v-item v-slot="{ active, toggle }">
            <v-card
              class="ma-1"
              :color="active ? 'primary' : 'secondary'"
              @click="remakeDishList(toggle)"
            >
              <h3 class="ma-0">{{ bagel.name }}</h3>
            </v-card>
          </v-item>
        </div>
      </v-item-group>
    </div>

    <div class="scroller bagels">
      <v-item-group v-model="selectedToppings" multiple>
        <div v-for="(topping, i) in menu.toppings" :key="i">
          <v-item v-slot="{ active, toggle }">
            <v-card
              class="ma-1"
              :color="active ? 'primary' : 'secondary'"
              @click="remakeDishList(toggle)"
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
      selectedBagel: [],
      selectedToppings: [],
      dish: this.dishProp,
    };
  },
  props: {
    dishProp: Object,
  },
  methods: {
    remakeDishList(toggle) {
      toggle();
      if (this.selectedBagel.length === 0) return;

      this.$emit("dishEdit", {
        dish: [
          this.menu.bagels[this.selectedBagel],
          ...this.selectedToppings.map((t) => this.menu.toppings[t]),
        ],
      });
    },
  },
  computed: {
    ...mapGetters({
      menu: "parsedMenu",
    }),
  },
  created() {
    if (this.dish != null) {
      const bagelNames = this.menu.bagels.map((b) => b.name);
      this.selectedBagel = bagelNames.indexOf(this.dish.dish[0]);

      const toppingNames = this.menu.toppings.map((b) => b.name);
      for (var item of this.dish.dish.slice(1, this.dish.dish.length)) {
        this.selectedToppings.push(toppingNames.indexOf(item));
      }
    }
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