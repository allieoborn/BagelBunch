<template>
  <v-container fluid>
    <v-data-iterator
      :items="filteredItems"
      :items-per-page.sync="itemsPerPage"
      :page="page"
      :search="search"
      :sort-by="sortBy.toLowerCase()"
      :sort-desc="sortDesc"
      hide-default-footer
      
    >
      <!-- Header -->
      <template v-slot:header>
        <v-toolbar
          color="primary"
          class="mb-1"
          light
        >
        
          <v-text-field
            v-model="search"
            clearable
            flat
            solo-inverted
            hide-details
            prepend-inner-icon="mdi-magnify"
            label="Search"
            
          ></v-text-field>

          <template v-if="$vuetify.breakpoint.mdAndUp">

            <v-spacer></v-spacer>

            <v-select
              v-model="sortBy"
              flat
              solo-inverted
              hide-details
              :items="keys"
              item-text="text"
              item-value="value"
              prepend-inner-icon="mdi-magnify"
              label="Sort by"
            ></v-select>

            <v-spacer></v-spacer>

            <v-btn-toggle
              v-model="sortDesc"
              mandatory
            >
              <v-btn
                large
                depressed
                color="primary"
                :value="false"
              >
                <v-icon>mdi-arrow-up</v-icon>
              </v-btn>
              <v-btn
                large
                depressed
                color="primary"
                :value="true"
              >
                <v-icon>mdi-arrow-down</v-icon>
              </v-btn>
            </v-btn-toggle>
            
          </template>

        </v-toolbar>
      </template>

      <!-- Cards -->
      <template  v-slot:default="props">
        <v-row >
          <v-col
            v-for="item in props.items"
            :key="item.orderID"
            cols="12"
            sm="12"
            md="6"
            lg="6"
          >
            <v-card>
              <v-card-title class="subheading font-weight-bold">

                <v-select 
                  @change="sendOrderUpdate"
                  :items="getSelectItems(item)"
                  :label="item.status.toUpperCase()"
                  background-color="primary"
                  solo
                  light
                  hide-details
                ></v-select>

              </v-card-title>

              <v-divider class="mt-0"></v-divider>

              <v-row>
                <v-card light color="primary" class="mx-auto py-2 px-5">Dishes:</v-card>
              </v-row>

              <v-list dense>

                <v-list-item v-for="(dish, idx) in item.dishes" :key="idx">

                  <v-card light color="primary" class="my-2 align-end"> 
                    <!-- color="primary"> -->
                    <v-list-item-content >
                      <v-col 
                        v-for="(asdf, idx) in dish.dish" 
                        :key="idx" 
                        class="px-4 py-1"
                      >
                        {{ asdf }}
                      </v-col>  
                    </v-list-item-content>
                  </v-card>
                </v-list-item>
                <v-divider></v-divider>

                <v-list-item>

                  <v-list-item-content>
                    Cost: ${{ item.cost }}
                  </v-list-item-content>

                  <v-list-item-content class="align-end">
                    Pick-up Time: {{ formatTime(item.milliseconds) }}
                  </v-list-item-content>

                </v-list-item>

              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </template>

      <!-- Footer -->
      <template v-slot:footer>
        <v-row
          class="mt-2"
          align="center"
          justify="center"
        >
          <span class="grey--text">Items per page</span>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                dark
                text
                color="primary"
                class="ml-2"
                v-bind="attrs"
                v-on="on"
              >
                {{ itemsPerPage }}
                <v-icon >mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(number, index) in itemsPerPageArray"
                :key="index"
                @click="updateItemsPerPage(number)"
              >
                <v-list-item-title>{{ number }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-spacer></v-spacer>

          <span
            class="mr-4 grey--text"
          >
            Page {{ page }} of {{ numberOfPages }}
          </span>
          <v-btn
            fab
            color="primary"
            class="mr-1"
            @click="formerPage"
          >
            <v-icon class="black--text" >mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn
            fab
            color="primary"
            class="ml-1"
            @click="nextPage"
          >
            <v-icon class="black--text" >mdi-chevron-right</v-icon>
          </v-btn>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "Chef",
  data () {
    return {

      itemsPerPageArray: [1, 2, 3, 4],
      search: '',
      filter: {},
      sortDesc: false,
      page: 1,
      itemsPerPage: 2,
      sortBy: 'miliseconds',
      keys: [
        { text: "Status", value: "status" },
        { text: "Cost", value: "cost" },
        { text: "Time", value: "miliseconds" },
      ],
      orderTypes: [
        "in-progress", 
        "completed", 
        "delivered", 
        "cancelled"
      ]
    }
  },
  computed: {
    numberOfPages () {
      return Math.ceil(this.items.length / this.itemsPerPage)
    },
    filteredKeys () {
      return this.keys
      // return this.keys.filter(key => key !== 'milliseconds')
    },
    ...mapGetters({ items: "orders", user: "user" }),
    filteredItems() {
      return this.items.filter((order) => 
        this.user.type === "manager" 
        || 
        ["ordered", "in-progress"].includes(order.status)
      )
    }
  },
  methods: {
    getSelectItems(item) {
      let dict = [];
      for (let asdf of this.orderTypes) {
        dict.push({ text: asdf, value: { orderID: item.orderID, status: asdf }});
      }
      return dict;
    },
    sendOrderUpdate(order) {
      // console.log("asdf", order)
      this.$func.updateOrderStatus(order);
    },
    formatTime(mili) {
      var date = new Date(mili);
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? '0'+minutes : minutes;
      var strTime = hours + ':' + minutes + ' ' + ampm;
      return strTime;
    },
    nextPage () {
      if (this.page + 1 <= this.numberOfPages) this.page += 1
    },
    formerPage () {
      if (this.page - 1 >= 1) this.page -= 1
    },
    updateItemsPerPage (number) {
      this.itemsPerPage = number
    },
  },
}
</script>

<style>
</style>