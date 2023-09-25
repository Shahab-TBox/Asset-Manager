import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {PersistGate} from 'redux-persist/integration/react'; // Import PersistGate correctly
import {persistor} from './Views/Redux/store';
import store from './Views/Redux/store';
import {Provider} from 'react-redux';

const Main = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Main); // Register the Main component
