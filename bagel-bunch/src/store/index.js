import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

    loggedIn: false,

    accountID: null,

    user: {},

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
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
