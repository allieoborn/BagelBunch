import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    site: {
      compName: "GetPuzzled",
      mainColor: "dark",
      accentColor: "primary"
    },

    loggedIn: false,

    user: {
      first_name: "Andrew",
      last_name: "McMullin",
      email: "mcmullinboy15@gmail.com"
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
