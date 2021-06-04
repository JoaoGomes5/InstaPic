import React, { useCallback , useContext , useState} from "react";

import './styles.scss'

import api from '../../services/swagger_api'

import logo from '../../assets/logo.svg'
import { Context } from "../../Context/AuthContext";

function LogIn() { 
  const { authenticated , handleLogin} = useContext(Context);

  console.log('Login', authenticated );

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  return (
    <div id="page-create-orphanage">
      
      <main>
        <div className="logo-container">
          <img src={logo} alt="InstaPic" />  
        </div>
        
        <form className="login-form" >
            <legend>Autentição</legend>

      
            <div className="input-block">
              <label htmlFor="name">Nome de utilizador</label>
                <input 
                  id="username" 
                  value={username} 
                  onChange={event => setUsername(event.target.value)}
                />
            </div>

            <div className="input-block">
              <label htmlFor="password">Password</label>
                <input 
                  id="password" 
                  type="password"
                  value={password} 
                  onChange={event => setPassword(event.target.value)}
                />
            </div>
            

          <button className="confirm-button" type="submit" onClick={() => handleLogin(username, password)}>
            Entrar
          </button>

        <div className="register-container">

        
        <p className="register">
            Ainda não te registaste? 

            <button type="button" >Clica aqui</button>
        </p>

        </div>
        </form>


      </main>
    </div>
  
  );
}

export default LogIn;