<template>
  <div style="height: 100%" class="d-flex flex-row">
    <div class="scroller bagels">
      <h3 class="my-0 py-2" v-for="bagel in menu.bagels" :key="bagel.name">
        {{ bagel.name }}
      </h3>
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