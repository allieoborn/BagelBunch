<template>
  <div
    style="height: 100%"
    class="d-flex flex-column justify-center align-center"
  >
    <v-item-group v-model="selectedBeverage">
      <div v-for="(beverage, i) in menu.beverages" :key="i">
        <v-item v-slot="{ active, toggle }">
          <v-card
            class="ma-1"
            :color="active ? 'primary' : 'secondary'"
            @click="updateBeverage(toggle)"
          >
            <h3 class="ma-0">{{ beverage.name }}</h3>
          </v-card>
        </v-item>
      </div>
    </v-item-group>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "SelectBeverageOptions",
  props: {
    dishProp: Object,
  },
  data() {
    return {
      selectedBeverage: [],
      dish: this.dishProp,
    };
  },
  methods: {
    updateBeverage(toggle) {
      toggle();
      this.$emit("dishEdit", {
        dish: [this.menu.beverages[this.selectedBeverage]],
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
      const beverageNames = this.menu.beverages.map((b) => b.name);
      this.selectedBeverage = beverageNames.indexOf(this.dish.dish[0]);
    }
  },
};
</script>

<style>
</style>