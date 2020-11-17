import Vue from "vue";
import store from "../store";

import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [

  /*
    The Drawer renders from the routes Array
    it uses the path, name, and icon to display. 
    set drawer to false and it will not display,
    set requiresAuth to True and it will not 
    display unless logged in.
  */
  {
    path: "/", name: "Home", component: () => import("../views/Home.vue"),
    meta: {
      requiresAuth: true,
      drawer: true,
      requiredTypes: [],
      icon: "mdi-home"
    }
  },
  {
    path: "/profile", name: "Profile", component: () => import("../views/Profile.vue"),
    meta: {
      requiresAuth: true,
      drawer: true,
      requiredTypes: [],
      icon: "mdi-account"
    }
  },
  {
    path: "/login", name: "Login", component: () => import("../views/Login.vue"),
    meta: {
      requiresAuth: false,
      drawer: false,
      requiredTypes: [],
      icon: 'mdi-arrow-up'
    }
  },
  {
    path: "/createAccount", name: "CreateAccount", component: () => import("../views/CreateAccount.vue"),
    meta: {
      requiresAuth: false,
      drawer: false,
      requiredTypes: [],
      icon: 'mdi-arrow-up'
    }
  },
  {
    path: "/admin", name: "Admin", component: () => import("../views/Admin.vue"),
    meta: {
      requiresAuth: true,
      drawer: true,
      requiredTypes: ['manager'],
      icon: "mdi-account-key"
    }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {

  // If no last, set to "Home"
  to.params.last = from.name ? from.name : "Home";

  if (to.matched.some(record => record.meta.requiresAuth)) {

    if (!store.state.loggedIn) {
      next({ name: 'Login' })
    } else {
      // Could do a status check here
      next()
    }
  } else {
    next();
  }
});

export default router;
