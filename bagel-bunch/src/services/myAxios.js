import axios from "axios";
import store from '../store';

const myAxios = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'https://us-central1-bagelbunch-b5e21.cloudfunctions.net' : 'http://localhost:8080'
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

  const email = store.state.user.email;
  if (email !== undefined) {
    config.data['email'] = email;
  }

  return config;

}, error => Promise.reject(error));

Vue.prototype.$http = myAxios
export default myAxios;

