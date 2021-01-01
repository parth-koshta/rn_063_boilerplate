import Axios from 'axios';
import { BASE_URL } from '../Configs/APIConfig';

const getInstance = Axios.create({
  baseURL: BASE_URL,
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
  },
});

export default { getInstance };
