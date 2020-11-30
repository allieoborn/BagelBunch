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
      <h3
        class="my-0 py-2"
        v-for="topping in menu.toppings"
        :key="topping.name"
      >
        {{ topping.name }}
      </h3>
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
      toppings: null,
    };
  },
  methods: {
    updateBagel(bagel, toggle) {
      toggle();
      this.bagel = bagel;
      console.log(this.bagel);
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