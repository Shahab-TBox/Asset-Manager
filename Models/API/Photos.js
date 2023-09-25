import api from './index';
const photosEndpoint = '/photos';
export const getPhotos = () => api.get(photosEndpoint);
export const getPhotosById = id => api.get(`${photosEndpoint}/${id}`);
