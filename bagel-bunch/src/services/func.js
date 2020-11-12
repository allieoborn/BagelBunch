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

  async getAccountID() {

  },

  async updateName() {
    // newName

  },

  async updatePassword() {
    // newPassword

  },

  async addMoney() {

  },

  // I want to move this function to the store
  //  Maybe all of these can get moved there but whatever
  login(data) {
    console.log(data)
    axios.post('/bagel/login', {"email": "wdashner11@gmail.com", "password":"different_password"})
    .then(data => {
      console.log(data)
    })
    .catch(error => {
      console.log(error)
    })


    // Http({ method: 'post', url: '/login', data: { email: "asdf", password:"asdf" } } )
    // Http.post('https://us-central1-bagelbunch-b5e21.cloudfunctions.net/login', { email: "asdf", password:"asdf" }, {
    //   headers: {
    //        'content-type': 'application/json',
    //   }
    // })
    // .then(resp => console.log(resp))
    // .catch(error => console.log(error))
    
    // fetch('https://us-central1-bagelbunch-b5e21.cloudfunctions.net/login', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({"email": "wdashner11@gmail.com", "password":"different_password"}),
    // })
    // .then((res) => res.json())
    // .then((data) => console.log('asdf', data))
    // .catch(error => console.log('hello', error))

    // store.state.loggedIn = true;
    // router.push({ name: "Home" })
  },

  async logout() {  
    if (confirm("Are you sure you want to log out?")) {
      store.state.loggedIn = false;
      router.push({ name: "Login" });
      // store.state.user = null;
      // store.state.accountID = undefined;
    }
  },
}

Vue.prototype.$func = functions;
export default functions;