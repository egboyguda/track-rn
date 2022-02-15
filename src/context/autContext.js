//ini an skeleton sa kontext
import createDataContext from './createDataContext';
//ini man an api
import trackerApi from '../api/track';
//dd ig c save an token
import AsyncStorage from '@react-native-async-storage/async-storage';
//n call n para maka navigate sa iba na screen
import { navigate } from '../navigationRes';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'addErr':
      return { ...state, errorMsg: action.payload };
    case 'sign':
      return { token: action.payload, errorMsg: '' };
    case 'clear':
      return { ...state, errorMsg: '' };
    case 'signOut':
      return { ...state, token: null };
    default:
      return state;
  }
};

const signup =
  (dispatch) =>
  async ({ email, password }, callback) => {
    try {
      const res = await trackerApi.post('/signup', {
        email,
        password,
      });
      await AsyncStorage.setItem('token', res.data.token);
      //await AsyncStorage.getItem('token');
      dispatch({ type: 'sign', payload: res.data.token });
      //navigate to main flow
      navigate('mainFlow');
    } catch (error) {
      dispatch({ type: 'addErr', payload: 'something went wrong' });
    }
  };

const tryLocalSignIn = (dispatch) => async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    dispatch({ type: 'sign', payload: token });
    navigate('mainFlow');
  } else {
    navigate('loginFlow');
  }
};
const signIn =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const res = await trackerApi.post('/signin', {
        email,
        password,
      });
      await AsyncStorage.setItem('token', res.data.token);
      dispatch({ type: 'sign', payload: res.data.token });
      navigate('mainFlow');
    } catch (error) {
      dispatch({ type: 'addErr', payload: error.message });
    }
  };
const signOut = (dispatch) => async () => {
  await AsyncStorage.removeItem('token');
  dispatch({ type: 'signOut' });
  navigate('Signup');
};

const clearErrMsg = (dispatch) => () => {
  dispatch({ type: 'clear' });
};
export const { Provider, Context } = createDataContext(
  authReducer,
  { signIn, signOut, signup, clearErrMsg, tryLocalSignIn },
  { token: null, errorMsg: '' }
);
