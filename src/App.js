import React from 'react';
// import './App.css';
import Login from './components/login';
import Register from './components/register';
import PrivateRoute from './utlis/PrivateRoute';
import Dashboard from './components/dashboard';
import profile from './components/profile';
import { Link, BrowserRouter, Route, Switch, Router } from 'react-router-dom';
import { Container } from 'reactstrap';
import Profile from './components/profile';
import About from './components/about';

function App() {
  return (
    <div className="App">
       <Container>
        <BrowserRouter>
        <Switch>
          <Route exact path ='/' component={Login}/>
          <Route path ='/register' component={Register}/>
          <PrivateRoute path='/dashboard' component={Dashboard} />
          <PrivateRoute path ='/profile' component = {Profile}/>
          <PrivateRoute path ='/about' component = {About}/>
        </Switch>
        </BrowserRouter>
      </Container> 
    </div>
  );
}

export default App;
