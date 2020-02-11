import React from 'react';
// import './App.css';
import Login from './components/login';
import Register from './components/register';
import Example from './components/navigation';
import { Link, BrowserRouter, Route, Switch, Router } from 'react-router-dom';
import { Container } from 'reactstrap';

function App() {
  return (
    <div className="App">
      {/* <Container>
        <BrowserRouter>
        <Switch>
          <Route exact path ='/' component={Login}/>
          <Route path ='/register' component={Register}/>
        </Switch>
        </BrowserRouter>
      </Container> */}

      <Example/>
    </div>
  );
}

export default App;
