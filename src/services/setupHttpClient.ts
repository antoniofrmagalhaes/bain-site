import axios from 'axios';

// eslint-disable-next-line no-unused-vars
export function setupHttpClient(ctx = undefined) {
  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  });

  return api;
}
