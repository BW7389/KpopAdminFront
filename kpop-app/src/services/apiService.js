import axios from 'axios';
import apiEndpoints from './apiEndpoints'; 

const apiClient = axios.create({
  baseURL: apiEndpoints,
  headers: {
    'Content-Type': 'application/json',
  },
});

class ApiService {
  
  async getData(endpoint) {
    try {
      const response = await apiClient.get(endpoint);
      return response.data; 
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; 
    }
  }

  async postData(endpoint, data) {
    try {
      const response = await apiClient.post(endpoint, data);
      return response.data; 
    } catch (error) {
      console.error('Error posting data:', error);
      throw error; 
    }
  }

}

export default new ApiService();
