<template>
<v-container>
  <div class="content-section container"> 
    <div v-if="alert" :class="[ 'alert', `alert-${alert.type}` ]">{{ alert.title }}</div>

    <fieldset class="border-bottom form-group">
      <legend>
        <h2>Profile Page</h2>
      </legend>
    </fieldset>

    <div class="row">
      <h5 class="spacing">Name:</h5> 
      <h5 v-if="!this.editing">{{ this.account.name }}</h5>
      <input
        v-else
        v-model="form.name"
        type="text"
        class="form-control"
        id="inputName"
        placeholder="New Name"
      />
    </div>
    <div class="row">
        <h5 class="spacing">E-mail:</h5> 
        <h5>{{ this.account.email }}</h5>
    </div>
    <div class="row">
      <h5 class="spacing">Password:</h5> 
      <h5 v-if="!this.editing">{{ previous_pass }}</h5>
      <input
        v-else
        v-model="form.password"
        :type="(previous_pass === previous_pass_stars)? 'password' : 'text'"
        class="form-control"
        id="inputPassword"
        :placeholder="`Previous: ${previous_pass}`"
      />
      <v-btn
        fab
        text
        small
        class="ml-5"
        @click="togglePreviousPass"
      >
        <v-icon v-if="previous_pass === previous_pass_stars">mdi-eye</v-icon>
        <v-icon v-else>mdi-eye-off</v-icon>
      </v-btn>
    </div>
    <div class="row">
      <h5 class="spacing">Balance:</h5> 
      <h5 v-if="!this.editing">{{ this.account.money }}</h5>
      <input
        v-else
        v-model="form.balance"
        type="number"
        class="form-control"
        id="inputBalance"
        placeholder="Amount to Add"
      />
    </div>

    <div class="mx-auto my-5">
      <v-btn
        v-if="!this.editing"
        @click="editInfo"
        class="col-5 black--text"
        color="primary"
      >
        Edit Info
      </v-btn>

      <v-row class="container" v-else >
        <v-btn
          @click="saveInfo"
          class="col-3 black--text mx-auto"
          color="primary"
          :loading="loading"
        >
          Save Info
        </v-btn>

        <v-btn
          @click="cancel"
          class="col-3 black--text mx-auto"
          color="primary"
        >
          Cancel
        </v-btn>
      </v-row>
    </div>
  </div>
</v-container>

</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        password: "",
        balance: ""
      },
      account: this.$store.getters.user,
      previous_pass: "",
      previous_pass_stars: "",
      editing: false,
      loading: false,
      alert: null,
    }
  },
  watch: {
    account: function () {
      this.stars()
    }
  },
  mounted() {
    this.stars()
  },
  methods: {
    stars() {
      var stars = "*".repeat(this.account.password.length)
      this.previous_pass = stars
      this.previous_pass_stars = stars
    },
    togglePreviousPass() {
      this.previous_pass = (this.previous_pass === this.previous_pass_stars) ? this.account.password : this.previous_pass_stars
    },
    editInfo() {
      this.editing = true;
    },
    cancel() {
      this.editing = false;
      this.loading = false;
      this.form = {
        name: "",
        password: "",
        balance: ""
      }
      this.stars()
    },
    async saveInfo() {
      this.loading = true;
      let resp1 = await this.$func.updateName(this.form.name)
      let resp2 = await this.$func.updatePassword(this.form.password);
      let resp3 = await this.$func.addMoney(parseInt(this.form.balance, 10));
      if (resp1 || resp2 || resp3) {
        this.alert = { title: "Account Successfully Updated!", type: "success" }
      } else {
        this.alert = { title: "Update failed and/or Nothing was Changed, Please Try again", type: "danger" }
      }
      setTimeout(() => this.alert = null, 2000)
      this.cancel()
    },
  },
};
</script>

<style>
.spacing {
  padding: 7px;
  display: inline;
}

.row {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
}
</style>
