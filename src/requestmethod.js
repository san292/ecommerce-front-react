import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDA3MmE3ZGM1MjNmNzI5NDNkZWNhMiIsImlzYWRtaW4iOnRydWUsImlhdCI6MTY0ODc1MjM2NCwiZXhwIjoxNjQ5NjE2MzY0fQ.BAsd74QIW_-ZPvGlF-EMSKrK6mCOsQnpzpLVnxZV0K4';

export const publicRequest = axios.create({
  baseUrl: BASE_URL
});
export const userRequest = axios.create({
  baseUrl: BASE_URL,
  header: { token: `Bearer ${TOKEN}` }
});
