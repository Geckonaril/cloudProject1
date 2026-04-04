import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://18.198.24.112/api',
});

export const getBooks    = (params) => API.get('/books', { params });
export const getBook     = (id)     => API.get(`/books/${id}`);
export const createBook  = (data)   => API.post('/books', data);
export const updateBook  = (id, data) => API.put(`/books/${id}`, data);
export const deleteBook  = (id)     => API.delete(`/books/${id}`);