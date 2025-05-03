import axios from 'axios';

const api = axios.create({
  baseURL: 'https://swapi.bry.com.br/api/',
});

export const getCharacter = async (id) => {
  const response = await api.get(`/people/${id}/`);
  return response.data;
};

export const getResource = async (url) => {
  const response = await axios.get(url);
  return response.data;
};