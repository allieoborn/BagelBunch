<template>
  <div v-if="menu" class="content-section container">

  <!-- <h3>{{ name.charAt(0).toUpperCase() + name.slice(1) }}</h3> -->

  <v-data-table
    :headers="headers"
    :items="menu"
    :items-per-page="15"
    sort-by="type"
    class="elevation-1"
    dense
    filterable
  >
    <template v-slot:top>
      <v-toolbar flat >
        <v-toolbar-title>AdminMenu</v-toolbar-title>

        <v-spacer></v-spacer>

        <h4 v-if="sending">Sending Update ...</h4>

        <v-spacer></v-spacer>

        <v-dialog
          v-model="dialog"
          max-width="500px"
        >

          <!-- New and Update Buttons -->
          <template v-slot:activator="{ on, attrs }">
            
            <v-btn
              color="primary"
              dark
              class="mb-2 ml-2"
              @click="updateMenu"
            >
              <!-- Send Updated Menu -->
              <v-progress-circular v-if="sending"
                indeterminate
                color="white"
              ></v-progress-circular>
              <v-icon v-else>mdi-send</v-icon>
            </v-btn>

            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              <!-- New Item -->
              <v-icon>mdi-shape-square-rounded-plus</v-icon>
            </v-btn>

          </template>

          <!-- Data Popup -->
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.type"
                      label="Type"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.name"
                      label="Name"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.cost"
                      label="Cost"
                      type="number"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.amount"
                      label="Amount"
                      type="number"
                    ></v-text-field>
                  </v-col>

                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="primary"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="primary" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "AdminMenu", 
  data: () => ({
    sending: false,
    dialog: false,
    dialogDelete: false,
    headers: [
      { text: 'Type', value: 'type', align: 'start', sortable: false },
      { text: 'Name', value: 'name' },
      { text: 'Cost', value: 'cost' },
      { text: 'Amount', value: 'amount' },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
    editedIndex: -1,
    editedItem: {
      name: '',
      cost: 0,
      amount: 0
    },
    defaultItem: {
      name: '',
      cost: 0,
      amount: 0
    },
  }),
  methods: {

    updateMenu() {
      this.sending = true;
      this.$func.updateMenu()
      .then(() => this.doneUpdating())
    },
    doneUpdating() {
      
      this.sending = false;
    },
    editItem (item) {
      this.editedIndex = this.menu.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      this.editedIndex = this.menu.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm () {
      this.menu.splice(this.editedIndex, 1)
      this.closeDelete()
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.menu[this.editedIndex], this.editedItem)
      } else {
        this.menu.push(this.editedItem)
      }
      this.close()
    },
  },
  computed: {
    ...mapGetters({
      menu: "menu",
    }),
   
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },
  },
  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    },
  },
}
</script>
