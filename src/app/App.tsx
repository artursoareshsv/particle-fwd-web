import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import { Home } from './home/Home';
import Viewer from './viewer/Viewer';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/viewer/:id/:image" component={Viewer}></Route>
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
