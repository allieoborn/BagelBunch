<template>
  <v-container class="py-0 pl-0 pr-0">
    <v-row class="ma-0">
      <v-col cols="6" class="pa-0 ma-0">
        <v-virtual-scroll
          :bench="benched"
          :items="bagels"
          height="200"
          width="275"
          item-height="64"
        >
          <template v-slot:default="{ item }">
            <v-list-item :key="item">
              <v-list-item-content>
                <h3 class="mb-0">
                  {{ item }}
                </h3>
              </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>
          </template>
        </v-virtual-scroll>
      </v-col>

      <v-col cols="6" class="pa-0 ma-0">
        <v-virtual-scroll
          :bench="benched"
          :items="toppings"
          height="200"
          width="275"
          item-height="64"
        >
          <template v-slot:default="{ item }">
            <v-list-item :key="item">
              <v-list-item-content>
                <h3 class="mb-0">
                  {{ item }}
                </h3>
              </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>
          </template>
        </v-virtual-scroll>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "SelectBagelOptions",
  data: () => ({
    benched: 0,
  }),
  computed: {
    bagels() {
      return Array.from(this.menu.bagels, (x) => x.name);
    },
    toppings() {
      return Array.from(this.menu.toppings, (x) => x.name);
    },
    length() {
      return 9;
    },
    ...mapGetters({
      menu: "parsedMenu",
    }),
  },
  created() {
    console.log(this.menu.bagels);
  },
};
</script>

<style>
</style>