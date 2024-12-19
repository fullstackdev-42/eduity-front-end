/* eslint-disable */
import api from './api.service.js';

export default {
  async getOrgs() {
    return await api.axiosGet(`organizations?page=1`)
  }
  
};