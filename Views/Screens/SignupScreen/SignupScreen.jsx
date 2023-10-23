import React from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {styles} from './SignupStyling';
import {handleLogin} from '../../../Controllers/LoginController/LoginController';
import {useSelector, useDispatch} from 'react-redux';

export default function SignupScreen({navigation}) {
  //const dispatch = useDispatch();
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const dispatcher = useDispatch();

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  function loginHandler() {
    handleLogin(Username, Password, dispatcher);
  }

  return (
    <SafeAreaView
      style={{
        backgroundColor: '#ECECEC',
        justifyContent: 'center',
        paddingVertical: '5%',
        height: '100%',
      }}>
      <KeyboardAvoidingView style={styles.loginContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.title}>Sign up</Text>
          <TextInput
            name="username"
            placeholder="Enter username"
            onChangeText={newText => setUsername(newText)}
            required={true}
            style={styles.input}
          />
          <TextInput
            name="password"
            required={true}
            secureTextEntry={true}
            placeholder="Enter Password"
            onChangeText={newText => setPassword(newText)}
            style={styles.input}
            textContentType="password"
          />

          {/* <BouncyCheckbox
          text="Remember Me"
          fillColor="skyblue"
          size={20}
          isChecked={true}
          onPress={() => {
            setcheckboxState(!checkboxState);

          }}
          style={{alignSelf: 'flux-start'}}></BouncyCheckbox> */}
        </View>
        <TouchableOpacity
          title="Sign Up"
          onPress={() => {
            loginHandler();
          }}
          style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Sign up</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
