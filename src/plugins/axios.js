import axios from 'axios';

// export const baseURL = 'https://jsonplaceholder.typicode.com';
export const baseURL = `https://api.openweathermap.org`;

const http = axios.create({
  baseURL: baseURL
});

export default http;
