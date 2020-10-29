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
      first_name: "Andrew",
      last_name: "McMullin",
      email: "mcmullinboy15@gmail.com"
    }
  },
  getters: {
    user(state) {
      let updateuser = { 
        name: `${state.user.first_name} ${state.user.last_name}`
      }
      return { 
        ...state.user, 
        ...updateuser
      };
    },
    site(state) {
      return state.site;
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
