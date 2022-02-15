//import '../_mockLocation';
import React, { useCallback, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import Map from '../components/map';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';

import useLocation from '../hooks/useLocation';
import { Context as locationContext } from '../context/LocayionContext';
import { withNavigationFocus } from 'react-navigation';
import TrackForm from '../components/trackForm';
import { Entypo } from '@expo/vector-icons';

const trackCreateScreen = ({ isFocused }) => {
  const { addLocation, state } = useContext(locationContext);
  //n dd gn gamit para dri cge run cn na call back ma run la pag mag
  //mag iba an balyu sa recording
  //pag mag iba an balyu cn ma rerun an useeffect
  //console.log(state.locations);
  const callback = useCallback(
    (location) => {
      addLocation(location, state.recording);
    },
    [state.recording]
  );

  const [err] = useLocation(isFocused || state.recording, callback);

  return (
    <SafeAreaView forInset={{ top: 'always' }}>
      <Text h3 style={{ textAlign: 'center' }}>
        Map Screen
      </Text>
      <Map />
      <TrackForm />
      {err ? <Text>Please enable location services</Text> : null}
    </SafeAreaView>
  );
};

trackCreateScreen.navigationOptions = {
  title: 'Add Track',
  tabBarIcon: <Entypo name='map' size={24} color='black' />,
};
const styles = StyleSheet.create({});

//withnavigation n dd pag imud kun naka focus cya
export default withNavigationFocus(trackCreateScreen);
