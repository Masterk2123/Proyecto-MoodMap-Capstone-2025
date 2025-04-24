import axios from 'axios';

const API_URL = 'http://localhost:9001/api/auth/';

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    console.error('Login error:', error);

    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data?.error || 'Error en el login');
    }

    throw new Error('Error desconocido en el login');
  }
};
