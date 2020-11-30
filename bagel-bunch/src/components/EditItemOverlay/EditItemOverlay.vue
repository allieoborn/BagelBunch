<template>
  <v-card color="primary" class="pa-6">
    <h1>{{ dishName }}</h1>
    <hr class="white" />

    <v-stepper v-model="e1" non-linear>
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1" editable>
          Select Item Type
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 2" step="2" editable>
          Select Options
        </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card
            class="mb-4 d-flex align-center justify-space-between"
            color="grey lighten-1"
            height="200"
            width="550"
          >
            <item-type @makeSelection="newSelection($event)" />
          </v-card>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-card
            class="mb-0"
            color="grey lighten-1"
            height="200px"
            width="550"
          >
            <select-bagel-options
              v-if="ThisItemType === 'Bagel'"
              @dishEdit="dishEdit($event)"
            />
            <select-beverage-options
              v-if="ThisItemType === 'Beverage'"
              @dishEdit="dishEdit($event)"
            />
            <select-shmear-options
              v-if="ThisItemType === 'Shmear'"
              @dishEdit="dishEdit($event)"
            />
          </v-card>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
    <v-container>
      <v-row class="justify-center">
        <v-btn color="secondary" @click="dishDone"> Done </v-btn>
      </v-row>
      <v-row class="justify-center">
        <v-btn @click="turnOffOverlay" text> Cancel </v-btn>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import ItemType from "./ItemType.vue";
import { mapGetters } from "vuex";
import SelectBagelOptions from "./SelectBagelOptions/SelectBagelOptions.vue";
import SelectBeverageOptions from "./SelectBeverageOptions.vue";
import SelectShmearOptions from "./SelectShmearOptions.vue";

export default {
  components: {
    ItemType,
    SelectBagelOptions,
    SelectBeverageOptions,
    SelectShmearOptions,
  },
  name: "EditItemOverlay",
  props: {
    dishProp: Array,
    dishNameProp: String,
    overlayProp: Array,
  },
  data() {
    return {
      dish: this.dishProp,
      dishName: this.dishNameProp,
      e1: 1,
      overlay: this.overlayProp[0],
      ThisItemType: "Bagel",
    };
  },
  methods: {
    turnOffOverlay() {
      this.$emit("switchOff", false);
    },
    newSelection(value) {
      this.ThisItemType = value;
      this.e1 = 2;
    },
    dishEdit(newDishList) {
      this.dish = newDishList;
    },
    dishDone() {
      this.$emit("dishDone", this.dish);
      this.turnOffOverlay();
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