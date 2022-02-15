import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';
import { Context as TrackContext } from '../context/TrackContext';

const trackDetailScreen = ({ navigation }) => {
  const { state } = useContext(TrackContext);
  const _id = navigation.getParam('_id');
  const track = state.find((e) => e._id === _id);
  const initialCoords = track.locations[0].coords;
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        ...initialCoords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Polyline
        coordinates={track.locations.map((item) => item.coords)}
        strokeColor='#000'
        fillColor='rgba(255,0,0,0.5)'
        strokeWidth={5}
        lineDashPattern={[0]}
      />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default trackDetailScreen;
