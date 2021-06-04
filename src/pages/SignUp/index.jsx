import React, { useCallback , useState } from "react";
import './styles.scss'

import api from '../../services/swagger_api'

import logo from '../../assets/logo.svg'

function SignUp() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();

   try {
    const response = await api.post('/login', {
       username, 
       password
     });

     console.log(response.data);

     alert('Registado com sucesso:)');

   } catch (error) {
     console.log(JSON.stringify(error.message));
   }
    

    
    

  },[username, password]);

  return (
    <div id="page-create-orphanage">
      
      <main>
        <div className="logo-container">
          <img src={logo} alt="InstaPic" />  
        </div>
        
        <form className="login-form" onSubmit={handleSubmit}>
            <legend>Registo</legend>

      
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
            

          <button className="confirm-button" type="submit">
            Registar
          </button>

        <div className="register-container">

        
        <p className="register">
            Ainda não te registaste? 

            <a >Clica aqui</a>
        </p>

        </div>
        </form>


      </main>
    </div>
  
  );
}

export default SignUp;