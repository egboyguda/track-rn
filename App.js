import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AccountScreen from './src/screens/accountScreen';
import SignInScreen from './src/screens/signInScreen';
import SignUpScreen from './src/screens/signUpScreen';
import trackCreateScreen from './src/screens/trackCreateScreen';
import trackDetailScreen from './src/screens/trackDetailScreen';
import trackListScreen from './src/screens/trackListScreen';
import { Provider as AuthProvider } from './src/context/autContext';
import { setNavigator } from './src/navigationRes';
import initialScreen from './src/screens/initialScreen';
import { Provider as LocationProvider } from './src/context/LocayionContext';
import { Provider as TrackProvider } from './src/context/TrackContext';
import { FontAwesome } from '@expo/vector-icons';
const trackListFlow = createStackNavigator({
  TrackList: trackListScreen,
  TrackDetail: trackDetailScreen,
});

trackListFlow.navigationOptions = {
  tabBarIcon: <FontAwesome name='list-ul' size={24} color='black' />,
};
const switchNavigator = createSwitchNavigator({
  Initial: initialScreen,
  loginFlow: createStackNavigator({
    Signup: SignUpScreen,
    Signin: SignInScreen,
  }),
  mainFlow: createBottomTabNavigator({
    TrackListFLow: trackListFlow,
    CreateTrack: trackCreateScreen,
    Account: AccountScreen,
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <LocationProvider>
        <TrackProvider>
          <App
            ref={(navigator) => {
              setNavigator(navigator);
            }}
          />
        </TrackProvider>
      </LocationProvider>
    </AuthProvider>
  );
};
