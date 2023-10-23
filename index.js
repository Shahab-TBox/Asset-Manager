import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {PersistGate} from 'redux-persist/integration/react'; // Import PersistGate correctly
import {persistor} from './Redux/store';
import store from './Redux/store';
import {Provider} from 'react-redux';
import {
  requestUserPermission,
  notifiactionListener,
} from './utils/pushnotification_helper';

const Main = () => {
  // useEffect(() => {
  //   //requestUserPermission();
  //   //notifiactionListener();
  // }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Main); // Register the Main component
