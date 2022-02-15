import { Context as LocationContext } from '../context/LocayionContext';
import {
  Accuracy,
  requestForegroundPermissionsAsync,
  watchPositionAsync,
} from 'expo-location';
import { useContext, useEffect, useState } from 'react';

export default (shouldTrack, callback) => {
  const [err, setErr] = useState(null);
  let subscriber;

  const { addLocation, state } = useContext(LocationContext);

  //n dd gamit pag disable sa location pag track
  useEffect(() => {
    const startWatching = async () => {
      try {
        //dd aaruon muna nya an permision
        const { granted } = await requestForegroundPermissionsAsync();
        if (!granted) {
          throw new Error('please enable location services');
        }
        //dd pag imud sa location kun dn na
        subscriber = await watchPositionAsync(
          {
            accuracy: Accuracy.BestForNavigation,
            // kun pera ka interval cya mag rerefreshscreen
            timeInterval: 500,
            distanceInterval: 10,
          },
          callback
        );
      } catch (error) {
        setErr(error);
      }
    };
    if (shouldTrack) {
      startWatching();
    } else {
      if (subscriber) {
        subscriber.remove();
      }
      subscriber = null;
    }
    //ini clean up function n
    //para diri mag daramo an call sa startwatching
    //e mag iba utro an call back
    // bale mag iba nga an call back destroy
    //an una na instance sa startwatching
    //katapus rerun nala utro an start watching

    return () => {
      if (subscriber) {
        subscriber.remove();
      }
    };
  }, [shouldTrack, callback, subscriber]);
  return [err];
};
