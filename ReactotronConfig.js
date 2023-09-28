import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';

Reactotron.configure({host: '192.168.1.16'}) // Replace with your host IP address
  .useReactNative()
  .use(reactotronRedux())
  .connect();

if (__DEV__) {
  Reactotron.clear();
}

console.tron = Reactotron;
