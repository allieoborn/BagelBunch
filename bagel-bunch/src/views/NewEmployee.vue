<template>
  <div class="content-section container">
    <div v-if="!this.created">
      <fieldset class="border-bottom form-group">
        <legend>
          <h2>Create New Employee Account</h2>
        </legend>
      </fieldset>

      <div class="form-group">
        <label for="inputName">Name</label>
        <input
          v-model="form.name"
          type="text"
          class="form-control"
          id="inputName"
          placeholder="Employee Name"
        />
      </div>

      <div class="form-group">
        <label for="inputType">Employee Type</label>
        <v-select
          @change="form.type"
          :items="this.items"
        ></v-select>
      </div>

      <div class="form-group">
        <label for="inputEmail1">Email Address</label>
        <input
          v-model="form.email"
          type="email"
          class="form-control"
          id="inputEmail1"
          placeholder="Employee Email"
        />
      </div>

      <div class="form-group">
        <label for="inputPassword">Password</label>
        <input
          v-model="form.password"
          type="password"
          class="form-control"
          id="inputPassword"
          placeholder="Employee Password"
        />
      </div>
      

      <div class="m-5">
        <v-btn
          @click="createAccount"
          class="col-5"
          color="secondary"
        >
          Create
        </v-btn>
      </div>
    </div>
    <div v-else>
      <h1>Account Successfully Created!</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateAccount",
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        type: "",
        money: 100,
      },
      items: [
        "Cashier",
        "Chef",
        "Manager"
      ],
      created: false,
    };
  },
  methods: {
    createAccount() {
      this.$func.createAccount(this.form).then((resp) => {
        console.log(`response ${resp}`);
        if (resp) {
          console.log("Success");
          this.created = true;
        } else {
          console.log("Failure");
          this.error = resp.error;
        }
      });
    },
  },
};
</script>

<style>
.content-section {
  text-align: center;
  margin-top: 5rem;
  padding: 0px 10%;
  min-height: 45rem;
  min-width: 500px;
}
</style>