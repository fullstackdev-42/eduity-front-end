/* eslint-disable */
import api from './api.service.js';

export default {
  async getUser(id) {
       
    return await api.axiosGet(`users/${id}`)
   
  },
  async getUsers() {
    return await api.axiosGet(`users?page=1`)
  },
  async getOrgs() {
    return await api.axiosGet(`organizations?page=1`)
  }
  
};