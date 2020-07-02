import React, { createContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const history = useHistory();
  const [user, setUser] = useState({ isUserLogged: false });
  const loginStatus = sessionStorage.isUserLogged === 'true' || false;

  useEffect(() => {}, [user]);

  const signIn = (password) => {
    if (password === 'centralsalvavidas') {
      sessionStorage.setItem('isUserLogged', true);
      setUser({ isUserLogged: true });
      history.push('/');
    }
  };

  return (
    <AuthContext.Provider value={{ loginStatus, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default AuthContext;
