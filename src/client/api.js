import axios from 'axios'
import { createSDK } from '@refetty/sdk'
import { getToken } from './auth';

export const request = axios.create({
  baseURL: 'https://pingcast-api.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

const handler = options => state =>
  request({
    ...options,
    headers: {
      ...options.headers,
      ...(state.token && { Authorization: `Bearer ${state.token}` })
    }
  });
  
const api = createSDK(handler, {
  initialState: {token: getToken()},
})

export default api;