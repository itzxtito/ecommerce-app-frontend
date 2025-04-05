import axios from 'axios';

const API_BASE_URL = 'http://localhost:5001/api'; // change to your Render URL after deployment

export const fetchProducts = async () => {
  try {
    const res = await axios.get(`${API_BASE_URL}/products`);
    return res.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};
