import React , { createContext, useState } from 'react';
import api from '../services/swagger_api';

const Context = createContext();

function AuthProvider({ children }) {

  const [authenticated, setAuthenticated] = useState(false);

  async function handleLogin (username, password) {
    const { data: { token } } = await api.post('login', {
      password,
      username
    });

    localStorage.setItem('@InstaPic:token', JSON.stringify(token));

    api.defaults.headers.authorization = token;

    setAuthenticated(true);

    console.log(username, password);
  }


  return (
    <Context.Provider value={ { authenticated , handleLogin} }>
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };