import Vue from 'vue'
import store from '../store'
import router from '../router'
import axios from "./myAxios";


const functions = {
  async updateOrderStatus(order) {
    let resp = await axios.post('/updateOrderStatus', order)
    if (!resp.data.success) {
      return false;
    } else {

      this.getOrders();
      return true
    }

  },

  async getOrders(first=false) {
    let resp = await axios.post('/getOrders')

    if (resp.data.success) {
      store.state.orders = resp.data.orders;
      if (!first) {
        for (var order of store.state.orders) {
          order['account'] = await this.getAccount(order.accountID);
        }
      }
    }

    return resp.data;
  },

  async getAccount(id) {
    let resp = await axios.post('/getAccount', { requestedAccountID: id })
    return resp.data.requestedAccount;
  },

  async getMenu() {
    let resp = await axios.post('/getMenu')

    if (resp.data.success) {
      store.state.menu = resp.data.menu.menu;
    }

    return resp.data;
  },

  async updateMenu() {
    let resp = await axios.post('/updateMenu', { menu: { menu: store.state.menu } });
    return resp.data;
  },

  async createAccount(data) {
    console.log("Creating Your New Account: ", data);
    let resp = await axios.post('/createAccount', data);
    return resp.data.success;
  },

  async updateName(new_name) {
    let resp = await axios.post('/updateName', { name: new_name });

    try {

      if (resp.data.success) {
        store.state.user.name = new_name;
      }
  
      return resp.data.success;

    } catch {

      return false

    }
  },

  async updatePassword(new_pass) {
    let resp = await axios.post('/updatePassword', { password: new_pass });


    try {

      if (resp.data.success) {
        store.state.user.password = new_pass;
      }
  
      return resp.data.success;

    } catch {

      return false

    }
  },

  async addMoney(amount) {
    let resp = await axios.post('/addMoney', { money: amount });

    try {
      
      if (resp.data.success) {
        store.state.user.money += amount;
      }

      return resp.data.success;

    } catch {

      return false

    }
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

  async order(data) {
    let resp = await axios.post('/order', data)
    return resp.data.success;
  }
}

function routeLogin(account) {
  if (account.type === "customer") {
    router.push({ name: "Order" });
  } else if (account.type === "manager") {
    router.push({ name: "admin-menu" });
  } else if (account.type === "chef") {
    router.push({ name: "chef-view" });
  } else if (account.type === "cashier") {
    router.push({ name: "cashier-view" });
  }
}

Vue.prototype.$func = functions;
export default functions;