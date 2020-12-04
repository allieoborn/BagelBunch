<template>
  <div
    style="height: 100%"
    class="d-flex flex-column justify-center align-center"
  >
    <v-item-group v-model="selectedShmear">
      <div v-for="(shmear, i) in menu.shmears" :key="i">
        <v-item v-slot="{ active, toggle }">
          <v-card
            class="ma-1"
            :color="active ? 'primary' : 'secondary'"
            @click="updateShmear(toggle)"
          >
            <h3 class="ma-0">{{ shmear.name }}</h3>
          </v-card>
        </v-item>
      </div>
    </v-item-group>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "SelectShmearOptions",
  props: {
    dishProp: Object,
  },
  data() {
    return {
      selectedShmear: [],
    };
  },
  methods: {
    updateShmear(toggle) {
      toggle();
      this.$emit("dishEdit", {
        dish: [this.menu.shmears[this.selectedShmear]],
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
      console.log(this.dish);
      console.log("Editing Bagel");
    }
  },
};
</script>

<style>
</style>