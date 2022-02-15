import React, { useState, useContext, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Form from '../components/form';
import { Context as AuthContext } from '../context/autContext';
import { NavigationEvents } from 'react-navigation';
const SignInScreen = ({ navigation }) => {
  const { state, signIn, clearErrMsg } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  use;

  return (
    <View>
      <NavigationEvents onWillFocus={clearErrMsg} />
      <Form
        err={state.errorMsg}
        title={'Sign In'}
        onChangeMail={(val) => {
          setEmail(val);
        }}
        onChangePass={(val) => {
          setPassword(val);
        }}
        btnLogic={() => {
          signIn({ email, password });
        }}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Signup');
        }}
      >
        <Text style={{ color: 'blue', marginLeft: 15 }}>No Account yet?</Text>
      </TouchableOpacity>
    </View>
  );
};

SignInScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};
const styles = StyleSheet.create({});

export default SignInScreen;
