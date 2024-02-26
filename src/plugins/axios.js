import axios from 'axios';

export const baseURL = 'https://jsonplaceholder.typicode.com';

const http = axios.create({
  baseURL: baseURL
});

export default http;
