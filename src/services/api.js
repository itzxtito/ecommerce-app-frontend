import axios from 'axios';

// Use environment variable for deployment flexibility
const API_BASE_URL = import.meta.env.VITE_API_URL;

export const fetchProducts = async () => {
  try {
    const res = await axios.get(`${API_BASE_URL}/products`);
    return res.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};
