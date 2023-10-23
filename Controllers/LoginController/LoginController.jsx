import {Alert} from 'react-native';
import {UserModel} from '../../Models/UserModel';
import auth from '@react-native-firebase/auth';
import {login} from '../../Redux/authSlice';

export function handleLogin(Username, Password, dispatcher) {
  if (
    Username === UserModel.username &&
    Password === UserModel.password //&&
  ) {
    dispatcher(login({username: Username, password: Password}));
  } else {
    Alert.alert(
      'Error',
      `Incorrect username, password, or date you entered: ${Username} ${Password}`,
    );
  }
}
