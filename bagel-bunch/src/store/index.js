import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    site: {
      compName: "BagelBunch",
      mainColor: "dark",
      accentColor: "primary" // not used anywhere yet
    },

    loggedIn: false,

    user: {
      name: null,
      email: null,
      accountID: 124665
    }
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
