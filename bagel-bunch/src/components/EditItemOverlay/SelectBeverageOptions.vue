<template>
  <div
    style="height: 100%"
    class="d-flex flex-column justify-center align-center"
  >
    <v-item-group>
      <div v-for="(beverage, i) in menu.beverages" :key="i">
        <v-item v-slot="{ active, toggle }">
          <v-card
            class="ma-1"
            :color="active ? 'primary' : 'secondary'"
            @click="updateBeverage(beverage, toggle)"
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
  data() {
    return {
      beverage: null,
    };
  },
  methods: {
    updateBeverage(beverage, toggle) {
      toggle();
      this.beverage = beverage;
      console.log(beverage);
      this.$emit("dishEdit", [this.beverage.name]);
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
</style>