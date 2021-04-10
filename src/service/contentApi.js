import axios from 'axios';


// viet code call data tu api
const getDataListNews = async () => {
  const urlApi = `https://606a7c88e1c2a100175459e4.mockapi.io/api/news`;
  const response = await axios.get(urlApi);
  const data = await response.status === 200 ? response.data : [];
  return data;
}
export const api = {
  getDataListNews
}