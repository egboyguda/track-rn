import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Text, Button } from 'react-native-elements';
import Spacer from './spacer';

const Form = ({ title, onChangeMail, onChangePass, btnLogic, err }) => {
  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3 style={{ textAlign: 'center' }}>
          {title}
        </Text>
      </Spacer>

      <Input
        label='Email'
        onChangeText={(val) => {
          onChangeMail(val);
        }}
      />
      <Input
        label='Password'
        secureTextEntry
        onChangeText={(val) => {
          onChangePass(val);
        }}
      />
      {err !== '' ? <Text style={styles.err}>{err}</Text> : null}
      <Spacer>
        <Button
          title='Submit'
          onPress={() => {
            btnLogic();
          }}
        />
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  err: {
    fontSize: 16,
    color: 'red',
  },
});
export default Form;
