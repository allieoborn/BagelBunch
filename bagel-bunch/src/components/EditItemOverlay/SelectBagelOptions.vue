<template>
  <div>
    <v-virtual-scroll
      :bench="benched"
      :items="items"
      height="200"
      width="275"
      item-height="64"
    >
      <template v-slot:default="{ item }">
        <v-list-item :key="item">
          <v-list-item-content>
            <v-list-item-title>
              {{ item }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>
      </template>
    </v-virtual-scroll>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "SelectBagelOptions",
  data: () => ({
    benched: 0,
  }),
  computed: {
    items() {
      return Array.from(this.menu.bagels, (x) => x.name);
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