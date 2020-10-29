import Vue from "vue";
import store from "../store";

import VueRouter from "vue-router";
Vue.use(VueRouter);

/* eslint-disable */
const routes = [
  // icon: null, means it won't show up in the drawer
  { path: "/", name: "Home", component: () => import("../views/Home.vue"), 
    meta: { 
      requiresAuth: true,
      drawer: true,
      icon: "mdi-home"
    }
  },
  { path: "/profile", name: "Profile", component: () => import("../views/Profile.vue"), 
    meta: { 
      requiresAuth: true,
      drawer: true,
      icon: "mdi-account"
    }
  },
  { path: "/login", name: "Login", component: () => import("../views/Login.vue"),
    meta: { 
      requiresAuth: false,
      drawer: false,
      icon: null
    }
  },
  { path: "/logout", name: "Logout", component: () => import("../views/Logout.vue"),
    meta: { 
      requiresAuth: true,
      drawer: true,
      icon: "mdi-cancel"
    }
  }
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

      next() 
    }
  } else {
    next(); 
  }
});

export default router;
