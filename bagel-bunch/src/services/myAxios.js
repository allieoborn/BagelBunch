import Vue from 'vue';
import axios from "axios";
import store from '../store';

// Creating our own Axios
const myAxios = axios.create({
  baseURL: 'http://us-central1-bagelbunch-b5e21.cloudfunctions.net',
  headers: { 
    "Content-Type": "application/json",
   },
  responseType: "json"
});

// This is just so the accountID is sent on every request
//  If is run before every Request, there is one for Responses
myAxios.interceptors.request.use(config => {

  if (config.data === undefined) {
    config.data = {};
  }

  const accountID = store.state.accountID;
  if (accountID !== undefined) {
    config.data['accountID'] = accountID;
  }

  return config

}, error => Promise.reject(error));

myAxios.interceptors.response.use(
  config => config,
  error =>  error.response
);

Vue.prototype.$http = myAxios
export default myAxios;

