import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Radio from './Radio';

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Radio} />
      </Switch>
    </>
  )
}

export default App;
