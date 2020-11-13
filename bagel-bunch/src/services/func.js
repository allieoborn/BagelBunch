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

  async createAccount(data) {
    console.log("Creating Your New Account: ", data)
    // name, email, password, type: ('customer', 'chef', 'cashier', 'manager'), money, favorite,

  },

  async updateName() {
    // newName

  },

  async updatePassword() {
    // newPassword

  },

  async addMoney() {

  },

  // Login
  async login(data) {
    return axios.post('/login', data)
      .then(resp => {

        // Update the store (storage)
        store.state.user = resp.data.account;
        store.state.accountID = resp.data.accountID
        store.state.loggedIn = true
        console.log("Logged In", store.state);

        // Redirect
        router.push({
           name: "Home" })

        return resp.data;

      })
      .catch(error => error.response.data)
    
  },

  async logout() {  
    if (confirm("Are you sure you want to log out?")) {
      
      // Update the store (storage)
      store.state.user = {};
      store.state.accountID = null;
      store.state.loggedIn = false;
      console.log("Logged In", store.state);

      // Redirect
      router.push({ name: "Login" });

      return true;

    } else {

      return false;
    }
  },
}

Vue.prototype.$func = functions;
export default functions;