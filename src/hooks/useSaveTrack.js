import { useContext } from 'react';
//para magamit ko an mga state tas function sa trackcontext
import { Context as TrackContext } from '../context/TrackContext';
import { navigate } from '../navigationRes';
import { Context as LocationContext } from '../context/LocayionContext';

export default () => {
  const { createTrack } = useContext(TrackContext);
  const { state, reset } = useContext(LocationContext);

  const saveTrack = async () => {
    await createTrack(state.name, state.locations);
    //console.log('click');
    reset();
    navigate('TrackList')
  };

  return [saveTrack];
};
