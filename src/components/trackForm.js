import React, { useContext } from 'react';
import { View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Context as locationContext } from '../context/LocayionContext';
import useSaveTrack from '../hooks/useSaveTrack';
const TrackForm = () => {
  const { state, startRecording, stopRecording, changeName, addLocation } =
    useContext(locationContext);
  //console.log(state.locations.length);
  const [saveTrack] = useSaveTrack();
  return (
    <>
      <Input
        placeholder='Enter Name'
        onChangeText={(name) => {
          changeName(name);
        }}
        value={state.name}
      />
      {!state.recording ? (
        <Button
          title={'start recording'}
          onPress={() => {
            startRecording();
          }}
        />
      ) : (
        <Button
          title={'stop recording'}
          onPress={() => {
            stopRecording();
          }}
        />
      )}
      {!state.recording && state.locations.length ? (
        <Button
          title={'Save Location'}
          onPress={() => {
            //addLocation(state.locations);
            saveTrack();
          }}
        />
      ) : null}
    </>
  );
};

export default TrackForm;
