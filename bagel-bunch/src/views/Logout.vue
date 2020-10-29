<template>
  <v-container>
    You are Logged Out
  </v-container>
</template>

<script>
export default {
  name: "Logout",
  methods: {
    logout() {
      let next = null;
      if (confirm("Are you sure you want to log out?")) {
        next = "Login";
        this.$store.state.loggedIn = false;
        // this.$store.state.user = null;
        // auth().logout()
      } else {
        next = this.$route.params.last;
      }
      // This Component tries to logout on mounted
      //  Therefore it is better to go away from
      //  this Component no matter what
      this.$router.push({ name: next });
    }
  },
  mounted() {
    this.logout();
  }
};
</script>
