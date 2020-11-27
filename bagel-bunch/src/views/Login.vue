<template>
  <div class="content-section container">
    <fieldset class="border-bottom form-group">
      <legend>
        <h2>Welcome to {{ $store.state.site.compName }}</h2>
      </legend>
    </fieldset>

    <div v-if="error" class="alert alert-danger">{{ error }}</div>

    <div class="form-group">
      <label for="inputEmail1">Email address</label>
      <input
        @keyup.enter="submitLogin"
        v-model="form.email"
        type="email"
        class="form-control"
        id="inputEmail1"
        placeholder="Enter email"
      />
    </div>

    <div class="form-group">
      <label for="inputPassword">Password</label>
      <input
        @keyup.enter="submitLogin"
        v-model="form.password"
        type="password"
        class="form-control"
        id="inputPassword"
        placeholder="Password"
      />
    </div>

    <div class="m-5">
      <button
        @click="submitLogin"
        type="submit"
        :class="['col-5', 'btn', `btn-${$store.state.site.mainColor}`]"
      >
        Login
      </button>
    </div>

    <div class="m-5">
      <router-link to="/createAccount">Create Account</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      error: null,
    };
  },
  methods: {
    submitLogin() {
      this.$func.login(this.form).then((resp) => {
        if (!resp.success) {
          this.error = resp.error;
        }
      });
    },
    createAccount() {
      console.log("Create Account button working");
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