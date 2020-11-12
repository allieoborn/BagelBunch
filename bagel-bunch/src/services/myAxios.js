import Vue from 'vue';
import axios from "axios";
import store from '../store';

const myAxios = axios.create({
  // baseURL: process.env.NODE_ENV === 'production' ? 'https://us-central1-bagelbunch-b5e21.cloudfunctions.net' : 'http://localhost:8080',
  // baseURL: 'http://us-central1-bagelbunch-b5e21.cloudfunctions.net',
  // baseURL: 'https://jsonplaceholder.typicode.com/',
  baseURL: 'https://us-central1-ezsalt-iot-dev-env.cloudfunctions.net',

  headers: { 
    "Content-Type": "application/json",
    // "Access-Control-Allow-Origin": "true"
   },
  responseType: "json"
});

// This is just so the accountID and email 
//  is sent on every request if we used this axios
myAxios.interceptors.request.use(config => {
  console.log('config: ', config)
  console.log('config.data: ', config.data)

  if (config.data === undefined) {
    config.data = {};
  }

  const accountID = store.state.user.accountID;
  if (accountID !== undefined) {
    config.data['accountID'] = accountID;
  }

  return config;
}, function (error) {
  console.log('interceptors.request Error: ', error)
  return Promise.reject(error);
});

myAxios.interceptors.response.use(response => {
  return response;
}, error => Promise.reject(error));

Vue.prototype.$http = myAxios
export default myAxios;

