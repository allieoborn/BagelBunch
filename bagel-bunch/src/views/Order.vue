<template>
  <v-container>
    <div class="d-flex justify-space-between">
      <h1>Order</h1>
      <v-btn color="primary">Done</v-btn>
    </div>
    <hr />
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      order: {
        accountID: "", // string
        milliseconds: 0, // number
        cost: 0, // number
        dishes: [{ dish: ["something"] }],
      },
    };
  },
  created() {
    console.log(this.menu);
  },
  computed: {
    ...mapGetters({
      menu: "parsedMenu",
    }),
  },
};
</script>
