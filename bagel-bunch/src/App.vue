<template>
  <v-app>
    <!-- Top Nav Bar -->
    <v-app-bar app :color="site.mainColor" dark>
      <v-app-bar-nav-icon @click.stop="drawer = true"></v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <img src="favicon.ico" alt="Bagel-Logo" width="50" class="mx-5"/>
      <div class="h3 my-0">{{ site.compName }}</div>

      <v-spacer></v-spacer>

      <div v-if="loggedIn">
        <router-link class="mx-5" :to="{ name: 'Profile' }">
          <v-icon>mdi-account</v-icon>
        </router-link>
        <v-btn text @click="logOut()">Log Out</v-btn>
      </div>
    </v-app-bar>

    <!-- Drawer, I wasn't able to move to Component -->
    <v-navigation-drawer name="Drawer" v-model="drawer" absolute temporary>
      <!-- User Name and Email -->
      <v-list-item>
        <!-- Back Button -->
        <v-icon text class="mr-5" @click.stop="drawer = false">
          mdi-chevron-left
        </v-icon>
        <v-list-item-content>
          <v-list-item-title class="title">
            {{ user.name }}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ user.email }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <div v-for="item in items" :key="item.title" @click.stop="drawer = false">
          <v-list-item v-if="displayItem(item)" link>
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
    logIn() {
      this.$func.login()
    },
    logOut() {
      this.$func.logout()
    },
    displayItem(item) {
      // Displays when logged out or logged on 
      //  but Doesn't display a route no-matter what.
      return item.meta.drawer && (item.meta.requiresAuth == this.$store.state.loggedIn)
    }
  },
  computed: {
    // This makes the routes in the router display in
    //  the Drawer, based on the meta: data. But if
    //  We don't want that, we can use something else. 
    //  If we don't want the drawer, just let me know.
    items() {
      return this.$router.options.routes;
    },
    loggedIn() {
      return this.$store.state.loggedIn;
    },
    ...mapGetters({
      user: "user",
      site: "site"
    })
  }
};
</script>
