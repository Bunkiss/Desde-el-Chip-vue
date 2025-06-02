import axios from 'axios';

const api_url = 'https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/products/';

export const getNotebooks = async () => {
    const respuesta = await axios.get(api_url);
    const data = respuesta.data;
    return data;
};
