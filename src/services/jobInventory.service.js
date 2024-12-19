import axios from 'axios';

export const JobInventoryService = {
    init: () => {
        axios.defaults.baseURL = 'https://data.eduity.net/v1/onet/';
    },

    get: async (resource, slug = '') => {
        try {
          return await axios.get(`${resource}${slug === '' ? '' : '/'}${slug}`);
        } catch (error) {
          throw new Error(`The following error occurred while fetching work elements: ${error}`);
        }
    },
}