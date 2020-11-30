<template>
  <div
    style="height: 100%"
    class="d-flex flex-column justify-center align-center"
  >
    <v-item-group>
      <div v-for="(shmear, i) in menu.shmears" :key="i">
        <v-item v-slot="{ active, toggle }">
          <v-card
            class="ma-1"
            :color="active ? 'primary' : 'secondary'"
            @click="updateShmear(shmear, toggle)"
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
  data() {
    return {
      shmear: null,
    };
  },
  methods: {
    updateShmear(shmear, toggle) {
      toggle();
      this.shmear = shmear;
      this.$emit("dishEdit", [this.shmear.name]);
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