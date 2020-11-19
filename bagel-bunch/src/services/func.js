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
      store.state.menu = resp.data;
    }

    return resp.data;
  },

  async updateMenu() {
    let resp = await axios.post('/updateMenu', store.state.menu);
    return resp.data.success;
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
      router.push({ name: "Home" });
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

Vue.prototype.$func = functions;
export default functions;