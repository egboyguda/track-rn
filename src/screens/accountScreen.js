import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Context as authContext } from '../context/autContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const AccountScreen = () => {
  const { signOut } = useContext(authContext);
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <View>
        <Text>account screen</Text>
        <Button
          title='Sign Out'
          onPress={() => {
            signOut();
          }}
        />
      </View>
    </SafeAreaView>
  );
};

AccountScreen.navigationOptions = {
  tabBarIcon: <MaterialCommunityIcons name='account' size={24} color='black' />,
};
const styles = StyleSheet.create({});

export default AccountScreen;
