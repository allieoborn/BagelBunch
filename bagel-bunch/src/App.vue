<template>
  <v-app>
    <!-- Top Nav Bar -->
    <v-app-bar app :color="site.mainColor" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <div class="h3 my-0">{{ site.compName }}</div>

      <v-spacer></v-spacer>

      <router-link
        v-if="$store.state.loggedIn"
        class="mx-5"
        :to="{ name: 'Profile' }"
      >
        <v-icon>mdi-account</v-icon>
      </router-link>
      <v-btn text v-else @click="signIn()">Sign In</v-btn>
    </v-app-bar>

    <!-- Drawer, I wasn't able to move to Component -->
    <v-navigation-drawer name="Drawer" v-model="drawer" absolute temporary>
      <v-list-item>
        <v-icon text class="mr-5" @click.stop="drawer = !drawer">
          mdi-chevron-left
        </v-icon>
        <v-list-item-content>
          <v-list-item-title class="title">
            {{ user.first_name }} {{ user.last_name }}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ user.email }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <div v-for="item in items" :key="item.title">
          <v-list-item v-if="item.meta.drawer && $store.state.loggedIn" link>
            <v-btn text block :to="item.path">
              <v-list-item-icon>
                <v-icon>{{ item.meta.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.name }}</v-list-item-title>
              </v-list-item-content>
            </v-btn>
          </v-list-item>
        </div>

        <v-list-item v-if="!$store.state.loggedIn">
          <v-btn text block @click="signIn()">
            <v-list-item-content>Please Sign-In</v-list-item-content>
          </v-btn>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Main -->
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "App",
  data: () => ({
    drawer: null
  }),
  methods: {
    signIn() {
      this.drawer = false;
      alert("Signing you in ...");
      this.$store.state.loggedIn = true;
    }
  },
  computed: {
    items() {
      return this.$router.options.routes;
    },
    ...mapGetters({
      user: "user",
      site: "site"
    })
  }
};
</script>
