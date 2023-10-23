import firestore from '@react-native-firebase/firestore';

export async function getLocationCollection() {
  const usersCollection = firestore().collection('Locations');
}
