import React, { useContext, useEffect } from 'react';
import { Context as authContext } from '../context/autContext';
const initialScreen = () => {
  const { tryLocalSignIn } = useContext(authContext);
  useEffect(() => {
    tryLocalSignIn();
  }, []);
  return null;
};

export default initialScreen;
