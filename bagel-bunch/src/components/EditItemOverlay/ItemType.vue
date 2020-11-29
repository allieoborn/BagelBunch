<template>
  <div style="width: 100%">
    <v-item-group style="width=100%">
      <v-container>
        <v-row>
          <v-col
            :cols="12 / itemTypes.length"
            v-for="item in itemTypes"
            :key="item"
          >
            <v-item v-slot="{ active, toggle }">
              <v-card
                :color="active ? 'primary' : ''"
                dark
                height="100"
                @click="toggle"
              >
                <v-scroll-y-transition>
                  <div
                    style="height: 100%"
                    class="d-flex justify-center align-center"
                    @click="updateType(item)"
                  >
                    <h3>{{ item }}</h3>
                  </div>
                </v-scroll-y-transition>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
  </div>
</template>

<script>
export default {
  name: "ItemType",
  data() {
    return {
      itemTypes: ["Bagel", "Beverage", "Shmear"],
    };
  },
  methods: {
    updateType(value) {
      this.$emit("makeSelection", value);
    },
  },
};
</script>

<style>
</style>