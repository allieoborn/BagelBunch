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
        <input
          v-model="form.type"
          type="text"
          class="form-control"
          id="inputType"
          placeholder="Cashier or Chef"
        />
      </div>

      <div class="form-group">
        <label for="inputEmail1">Email address</label>
        <input
          v-model="form.email"
          type="email"
          class="form-control"
          id="inputEmail1"
          placeholder="Default email"
        />
      </div>

      <div class="form-group">
        <label for="inputPassword">Password</label>
        <input
          v-model="form.password"
          type="password"
          class="form-control"
          id="inputPassword"
          placeholder="Default password"
        />
      </div>
      

      <div class="m-5">
        <button
          @click="createAccount"
          type="submit"
          :class="['col-5', 'btn', `btn-${$store.state.site.mainColor}`]"
        >
          Create
        </button>
      </div>
    </div>
    <div v-else>
      <h1>Account Successfully Created!</h1>
      <p>Now go get yourself some bagels.</p>
      <router-link to="/login">Back to login</router-link>
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