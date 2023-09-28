import api from './index';
const photosEndpoint = '/photos';
export const getAlbums = () => api.get(photosEndpoint);
export const getAlbumsById = id => api.get(`${photosEndpoint}/${id}`);
