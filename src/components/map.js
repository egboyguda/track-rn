import React, { useContext } from 'react';
import { Text, StyleSheet, View, ActivityIndicator } from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps';
import { Context as locationContext } from '../context/LocayionContext';

const Map = () => {
  const {
    state: { currentLocation, locations },
  } = useContext(locationContext);
  if (!currentLocation) {
    return (
      <ActivityIndicator size='large' style={{ marginTop: 200 }} color='red' />
    );
  }
  return (
    <MapView
      style={style.map}
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Circle
        center={currentLocation.coords}
        radius={50}
        strokeColor='rgba(158,158,255,1.0)'
        fillColor='rgba(158,158,255, 0.3) '
      />
      <Polyline
        coordinates={locations.map((item) => item.coords)}
        strokeColor='#000'
        fillColor='rgba(255,0,0,0.5)'
        strokeWidth={5}
        lineDashPattern={[0]}
      />
    </MapView>
  );
};
const style = StyleSheet.create({
  map: {
    height: 300,
  },
});
export default Map;
