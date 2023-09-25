import {Alert} from 'react-native';
import {UserModel} from '../../Models/UserModel';

import {login} from '../../Redux/authSlice';

export function handleLogin(Username, Password, dispatch) {
  if (
    Username === UserModel.username &&
    Password === UserModel.password //&&
  ) {
    dispatch(login({username: Username, password: Password}));
  } else {
    Alert.alert(
      'Error',
      `Incorrect username, password, or date you entered: ${Username} ${Password}`,
    );
  }
}
