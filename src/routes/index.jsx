import React  from 'react';
import { Switch, Route } from 'react-router-dom';


import Feed from '../pages/Feed/index'
import Login from '../pages/LogIn/index'
import SignUp from '../pages/SignUp/index'


const Routes = () => {
  return (

          <Switch>
            <Route exact path='/' component={Feed} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signUp' component={SignUp} />
          </Switch>
      
  );
}

export default Routes;