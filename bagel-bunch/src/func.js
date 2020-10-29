import Vue from 'vue'
import store from './store'
import router from './router'


const API_URL = 'https://us-central1-bagelbunch-b5e21.cloudfunctions.net/'
console.log(API_URL)

const functions = {

  // I want to move this function to the store
  //  Maybe all of these can get moved there but whatever
  login() {
    alert("Logging you in ...");
    store.state.loggedIn = true;
    router.push({ name: "Home" })
  },

  logout() {  
    if (confirm("Are you sure you want to log out?")) {
      store.state.loggedIn = false;
      router.push({ name: "Login" });
    }
  },

  createAccount() {

  },

  updatePassword() {

  },

  updateName() {

  },
  
  getAccountID() {

  },

  addMoney() {

  },
}

Vue.prototype.$func = functions;
export default functions;