import Vue from 'vue'
import store from '../store'
import router from '../router'

// Adds accountID and email every request 
import axios from "./myAxios";
// import qs from "qs";
// import cors from 'cors';
// cors({ origin: true });

// Http.create({ baseURL: 'https://us-central1-bagelbunch-b5e21.cloudfunctions.net'})

// All POST Requests
// Commonly Returns { success: Bool, error: String, id: for getAccountID-only }

const functions = {

  async getMenu() {
    let resp = await axios.post('/getMenu')

    if (resp.data.success) {
      console.log("menu: ", resp.data.menu.menu)
      store.state.menu = resp.data.menu.menu;
    }

    // let new_menu = []
    // for (const [name, val] of Object.entries(store.state.menu)) {
    //   for (const item of val) {

    //     console.log({ type: name, ...item })

    //     new_menu.push({ type: name, ...item })

    //   }
    //   // console.log(new_menu)
    // }
    // console.log( new_menu )
    // store.state.menu2 = new_menu
    // this.updateMenu()

    return resp.data;
  },

  async updateMenu() {
    let resp = await axios.post('/updateMenu', { menu: { menu: store.state.menu } });
    console.log(resp, resp.data)
    return resp.data;
  },

  async createAccount(data) {
    console.log("Creating Your New Account: ", data);
    /* Example:
      data = {
        name: "", 
        email: "", 
        password: "", 
        type: ('customer', 'chef', 'cashier', 'manager'),
        money: 0, 
        favorite: null,
    */
    let resp = await axios.post('/createAccount', data);
    console.log(resp);
    return resp.data.success;
  },

  /* For the next 3:    <Andrew>
    Another Better option that I won't do rn cuz I 
    need to sleep is just v-model all the data <input/>
    tags to the $store and then here we just need to 
    Grab it always from there instead of passing a param.
  */
  async updateName(new_name) {
    let resp = await axios.post('/updateName', { name: new_name });
    if (resp.data.success) {
      store.state.user.name = new_name;
    }

    return resp.data.success;
  },

  async updatePassword(new_pass) {
    let resp = await axios.post('/updatePassword', { password: new_pass });
    if (resp.data.success) {
      store.state.user.password = new_pass;
    }

    return resp.data.success;
  },

  async addMoney(amount) {
    let resp = await axios.post('/addMoney', { money: amount });
    if (resp.data.success) {
      store.state.user.money += amount;
    }

    return resp.data.success;
  },

  // Login
  async login(data) {
    let resp = await axios.post('/login', data);

    if (resp.data.success) {

      // Update the store (storage)
      store.state.user = resp.data.account;
      store.state.accountID = resp.data.accountID;
      store.state.loggedIn = true;

      // Redirect
      routeLogin(resp.data.account);
    }

    // The `resp.data` object will always be the 
    //  {} returned by the backend
    return resp.data;

  },


  async logout() {
    let confirmed = confirm("Are you sure you want to log out?");

    if (confirmed) {

      // Update the store (storage)
      store.state.user = {};
      store.state.accountID = null;
      store.state.loggedIn = false;

      // Redirect
      router.push({ name: "Login" });

    }

    return confirmed;
  },
}

function routeLogin(account) {
  if (account.type === "customer") {
    router.push({ name: "Order" });
  } else if (account.type === "manager") {
    router.push({ name: "admin-menu" });
  }
}

Vue.prototype.$func = functions;
export default functions;