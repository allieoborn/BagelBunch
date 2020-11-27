import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

    loggedIn: false,

    accountID: null,

    user: {
      type:null
    },

    menu: null,
    orders: null,

    site: {
      compName: "BagelBunch",
      mainColor: "dark",
      accentColor: "primary", // not used anywhere yet
    },

  },
  getters: {
    user(state) {
      return state.user;
    },
    site(state) {
      return state.site;
    },
    menu(state) {
      return state.menu;
    },
    orders(state) {
      return state.orders;
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
