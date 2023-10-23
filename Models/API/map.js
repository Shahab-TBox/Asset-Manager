import axios from 'axios';

const API_KEY = 'AIzaSyD9P5Klbg1CK69UGsjo-5oHEpfvMrxTP1U';

const getNearbyAssets = async () => {
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=31.5204,74.3587&radius=500&type=store&key=${API_KEY}`,
    );
    console.log('idoemkem' + JSON.stringify(response.data.results));
    // Handle the response data (list of nearby shops)
    return response.data.results;
  } catch (error) {
    console.error('Error fetching nearby shops:', error);
    throw error;
  }
};

export const AssetsNearMe = [
  {
    id: 1,
    name: 'Laptop',
    longitude: 74.3589,
    latitude: 31.5206,
  },
  {
    id: 2,
    name: 'Laptop',
    longitude: 74.3587,
    latitude: 31.52,
  },
  {
    id: 3,
    name: 'Laptop',
    longitude: 74.3587,
    latitude: 31.5211,
  },
  {
    id: 4,
    name: 'Laptop',
    longitude: 74.3587,
    latitude: 31.4893,
  },
  {
    id: 5,
    name: 'Laptop',
    longitude: 74.3587,
    latitude: 31.4896,
  },
  {
    id: 6,
    name: 'Laptop',
    longitude: 74.3587,
    latitude: 31.5199,
  },
  {
    id: 7,
    name: 'Laptop',
    longitude: 74.3589,
    latitude: 31.5207,
  },
  {
    id: 8,
    name: 'Laptop',
    longitude: 74.3582,
    latitude: 31.5211,
  },
  {
    id: 9,
    name: 'Laptop',
    longitude: 74.3582,
    latitude: 31.489,
  },
  {
    id: 10,
    name: 'Laptop',
    longitude: 74.3587,
    latitude: 31.525,
  },
  {
    id: 11,
    name: 'Laptop',
    longitude: 74.3587,
    latitude: 31.521,
  },
  {
    id: 12,
    name: 'Laptop',
    longitude: 74.3587,
    latitude: 31.52,
  },
  {
    id: 13,
    name: 'Laptop',
    longitude: 74.3587,
    latitude: 31.5211,
  },
  {
    id: 14,
    name: 'Laptop',
    longitude: 74.359,
    latitude: 31.4891,
  },
  {
    id: 15,
    name: 'Laptop',
    longitude: 74.3587,
    latitude: 31.4888,
  },
];

export default getNearbyAssets;
