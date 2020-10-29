import Vue from 'vue'
import store from '../store'
import router from '../router'

// Adds accountID and email every request 
import axios from "./myAxios"
console.log(axios)

// All POST Requests
// Commonly Returns { success: Bool, error: String, id: for getAccountID-only }

const functions = {

  async createAccount(data) {
    console.log("Creating Your New Account: ", data)
    // Needs :: name, email, password, type: ('customer', 'chef', 'cashier', 'manager'), money, favorite,

  },

  async getAccountID() {

  },

  async updateName(name=null) {
    console.log("Updating Name to: ", name)

  },

  async updatePassword(pass=null) {
    console.log("Updating Password to: ", pass)

  },

  async addMoney() {

  },

  // I want to move this function to the store
  //  Maybe all of these can get moved there but whatever
  async login(email=null, pass=null) {
    console.log("Attempting to log you in: ", email, pass)

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