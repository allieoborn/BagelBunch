import Vue from 'vue';
import axios from "axios";
import store from '../store';

const myAxios = axios.create({
  // baseURL: process.env.NODE_ENV === 'production' ? 'https://us-central1-bagelbunch-b5e21.cloudfunctions.net' : 'http://localhost:8080',
  baseURL: 'https://us-central1-bagelbunch-b5e21.cloudfunctions.net',

// If we need  too override this for any reason
//  I haven't looked up if it's as easy as adding
//  it on the call
  headers: {
    "content-type": "application/json"
  },
  responseType: "json"
});

// This is just so the accountID and email 
//  is sent on every request if we used this axios
myAxios.interceptors.request.use(config => {
  if (config.data === undefined) {
    config.data = {};
  }

  const accountID = store.state.user.accountID;
  if (accountID !== undefined) {
    config.data['accountID'] = accountID;
  }

  return config;

}, error => Promise.reject(error));

Vue.prototype.$http = myAxios
export default myAxios;

