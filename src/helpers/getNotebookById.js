import axios from 'axios';

const api_url = 'https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/products/';

export const getNotebookById = async (id) => {
  const response = await axios.get(`${api_url}${id}`);
  return response.data;
};
