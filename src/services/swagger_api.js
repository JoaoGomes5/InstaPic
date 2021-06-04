import axios from 'axios';

const api = axios.create({
  baseURL: 'http://ec2-18-217-238-128.us-east-2.compute.amazonaws.com:8003',
});

export default api;