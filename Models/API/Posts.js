import api from './index';
const postsEndpoint = '/posts';
export const getPosts = () => api.get(postsEndpoint);
export const getPostsById = id => api.get(`${postsEndpoint}/${id}`);
