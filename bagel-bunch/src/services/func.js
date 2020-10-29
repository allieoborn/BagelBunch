import Vue from 'vue'
import store from '../store'
import router from '../router'

// Adds accountID and email every request 
import http from "./myAxios"
console.log(http)

// All POST Requests
// Commonly Returns { success: Bool, error: String, id: for getAccountID-only }

const functions = {

  async createAccount() {
    // Needs :: name, email, password, type: ('customer', 'chef', 'cashier', 'manager'), money, favorite,

  },

  async getAccountID() {

  },

  async updateName() {
    // Needs :: name
  },

  async updatePassword() {
    // Needs :: password

  },

  async addMoney() {

  },

  // I want to move this function to the store
  //  Maybe all of these can get moved there but whatever
  async login() {
    alert("Logging you in ...");
    store.state.loggedIn = true;
    router.push({ name: "Home" })
  },

  async logout() {  
    if (confirm("Are you sure you want to log out?")) {
      store.state.loggedIn = false;
      router.push({ name: "Login" });
    }
  },
}

Vue.prototype.$func = functions;
export default functions;