import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

    compName: "BagelBunch",

    loggedIn: false,

    accountID: null,
    user: {
      type: null
    },

    menu: null,
    orders: null,

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
    },
    parsedMenu(state) {
      var pMenu = {};
      for (var item of state.menu) {
        if (pMenu[item.type] == undefined) { // if there's nothing start the list
          pMenu[item.type] = [item];
        } else {
          pMenu[item.type].push(item);
        }
      }
      return pMenu;
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
