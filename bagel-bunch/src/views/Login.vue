<template>
<div class="content-section container">
  <fieldset class="border-bottom form-group m-5">
    <legend><h2>Welcome to {{ $store.state.site.compName }}</h2></legend>
  </fieldset>

  <div v-if="error" class="alert alert-danger">{{ error }}</div>

  <div>
    <div class="form-group">
      <label for="inputEmail1">Email address</label>
      <input v-model="form.email" type="email" class="form-control" id="inputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    </div>
    <div class="form-group">
      <label for="inputPassword1">Password</label>
      <input v-model="form.password" type="password" class="form-control" id="inputPassword1" placeholder="Password">
    </div>
    <div class="m-5">
      <button @click="submitLogin" type="submit" :class="['btn', `btn-${$store.state.site.mainColor}`, 'm-1', 'col-5']">Login</button>
    </div>
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
        password: ""
      },
      error: null,
    };
  },
  methods: {
    async submitLogin() {
      let resp = await this.$func.login(this.form);
      console.log(resp);
      console.log(resp.data);
    },
  },
  created() {
    this.$func.login(this.form);
    // console.log(resp);
    // console.log(resp.data);
  }
};
</script>

<style>
.content-section {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding-top: 5rem;

  min-height: 45rem;
  min-width: 500px;

  padding: 0px 20%;
}
</style>