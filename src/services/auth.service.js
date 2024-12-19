/* eslint-disable */
import api from './api.service.js';
import Axios from 'axios';

const RESOURCE_NAME = process.env.VUE_APP_BASE_URL;

export default {
  async login(user, psw) {
    let body = {
      "email": user,
      "password": psw
    }
    
    const login = await api.axiosPost(`login`, body)
    if(!login.message) {
      $cookies.set('t', login.data.token ,'10min', null, null, null, "Strict")
      $cookies.set('rt', login.data.refresh_token ,'30d', null, null, null, "Strict")
    }
    return login
   
  },
  async register(user, psw, firstName, lastName) {
    console.log("registering new account")
    const body = {
      "email": user,
      "password": psw,
      "firstName": firstName,
      "lastName": lastName

    }
    
    const register = await Axios.post(`${RESOURCE_NAME}user/register/`, body)
    .catch(error => {
      console.clear()
      return false
    })

    if(register) {
      const loginBody = {
        "email": user,
        "password": psw
      }
      
      const login = await Axios.post(`${RESOURCE_NAME}login`, loginBody)
      $cookies.set('t', login.data.token ,'10min', null, null, null, "Strict")
      $cookies.set('rt', login.data.refresh_token ,'30d', null, null, null, "Strict")
    }
    return register
  },
  logout() {
    $cookies.set('t', "" ,'0min', null, null, null, "Strict")
    $cookies.set('rt', "" ,'0d', null, null, null, "Strict")
  }
  
};