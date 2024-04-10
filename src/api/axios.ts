import axios, { CreateAxiosDefaults } from 'axios';
import API_URL from '@utils/constants';
import getContentType from '@api/api.helper';

const axiosOptions: CreateAxiosDefaults = {
  baseURL: API_URL,
  headers: getContentType(),
};

const axiosClassic = axios.create(axiosOptions);

export default axiosClassic;
