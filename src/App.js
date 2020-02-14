import React from 'react';
// import './App.css';
import Login from './components/login';
import Register from './components/register';
import PrivateRoute from './utlis/PrivateRoute';
import Dashboard from './components/dashboard';
import { Link, BrowserRouter, Route, Switch, Router } from 'react-router-dom';
import { Container } from 'reactstrap';

function App() {
  return (
    <div className="App">
       <Container>
        <BrowserRouter>
        <Switch>
          <Route exact path ='/' component={Login}/>
          <Route path ='/register' component={Register}/>
          <PrivateRoute path='/dashboard' component={Dashboard} />
        </Switch>
        </BrowserRouter>
      </Container> 
    </div>
  );
}

export default App;
