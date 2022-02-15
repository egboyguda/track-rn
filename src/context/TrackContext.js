import createDataContext from './createDataContext';
import trackerApi from '../api/track';

const trackReducer = (state, action) => {
  switch (action.type) {
    case 'fetch':
      return action.payload;
    default:
      return state;
  }
};

const fetchTracks = (dispatch) => async () => {
  const res = await trackerApi.get('/tracks');
  dispatch({ type: 'fetch', payload: res.data });
};
const createTrack = (dispatch) => async (name, locations) => {
  const res = await trackerApi.post('/track', {
    name,
    locations,
  });
  console.log(res.data);
};

export const { Provider, Context } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  []
);
