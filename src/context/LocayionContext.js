import createDataContext from './createDataContext';

const locationReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return { ...state, currentLocation: action.payload };
    case 'startRecord':
      return { ...state, recording: true };
    case 'stopRecord':
      return { ...state, recording: false };
    case 'addLocation':
      return { ...state, locations: [...state.locations, action.payload] };
    case 'changeName':
      return { ...state, name: action.payload };
    case 'reset':
      return {
        ...state,
        locations: [],
        name: '',
      };
    default:
      return state;
  }
};

const reset = (dispatch) => () => {
  dispatch({ type: 'reset' });
};
const changeName = (dispatch) => (name) => {
  dispatch({ type: 'changeName', payload: name });
};

const startRecording = (dispatch) => () => {
  dispatch({ type: 'startRecord' });
};
const stopRecording = (dispatch) => () => {
  dispatch({ type: 'stopRecord' });
};
const addLocation = (dispatch) => (location, recording) => {
  dispatch({ type: 'add', payload: location });
  if (recording) {
    dispatch({ type: 'addLocation', payload: location });
  }
};

export const { Provider, Context } = createDataContext(
  locationReducer,
  {
    startRecording,
    stopRecording,
    addLocation,
    changeName,
    reset,
  },
  {
    recording: false,
    locations: [],
    currentLocation: null,
    name: '',
  }
);
