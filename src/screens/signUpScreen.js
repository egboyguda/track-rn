import React, { useState, useContext, useEffect } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Form from '../components/form';
import { NavigationEvents } from 'react-navigation';
import { Context as authContext } from '../context/autContext';

const SignUpScreen = ({ navigation }) => {
  //dd gn kuwa an value sa context to mga
  //functiom tas data
  const { state, signup, clearErrMsg } = useContext(authContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //console.log(state);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrMsg} />
      <Form
        err={state.errorMsg}
        title={'Sign Up'}
        onChangeMail={(val) => {
          setEmail(val);
        }}
        onChangePass={(val) => {
          setPassword(val);
        }}
        btnLogic={() => {
          console.log(email, password);
          signup({ email, password });
        }}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Signin');
        }}
      >
        <Text style={{ color: 'blue', marginLeft: 15 }}>
          already have an account?
        </Text>
      </TouchableOpacity>
    </View>
  );
};
SignUpScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    borderColor: 'red',
    borderWidth: 1,
  },
});

export default SignUpScreen;
