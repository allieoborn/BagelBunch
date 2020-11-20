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
    path: "/", name: "Order", component: () => import("../views/Order.vue"),
    meta: {
      requiresAuth: true,
      drawer: true,
      requiredTypes: [],
      icon: "mdi-food"
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
    path: "/admin-menu", name: "admin-menu", component: () => import("../views/AdminMenu.vue"),
    meta: {
      requiresAuth: true,
      drawer: true,
      requiredTypes: ['manager'],
      icon: "mdi-shield-edit"
    }
  },
  {
    path: "/newEmployee", name: "Create New", component: () => import("../views/NewEmployee.vue"),
    meta: {
      requiresAuth: true,
      drawer: true,
      requiredTypes: ['manager'],
      icon: "mdi-shield-plus"
    }
  },
  {
    path: "/chef-view", name: "chef-view", component: () => import("../views/Chef.vue"),
    meta: {
      requiresAuth: true,
      drawer: true,
      requiredTypes: ['manager', 'chef'],
      icon: "mdi-chef-hat"
    }
  },
  {
    path: "/cashier-view", name: "cashier-view", component: () => import("../views/Cashier.vue"),
    meta: {
      requiresAuth: true,
      drawer: true,
      requiredTypes: ['manager', 'cashier'],
      icon: "mdi-cash-check"
    }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {

  // If no last, set to "Order"
  to.params.last = from.name ? from.name : "Order";

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
