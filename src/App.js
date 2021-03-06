import React, { useState } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Navbar from './Navbar';
import Radio from './Radio';
import Workout from './Workout';
import Love from './Love';

const App = () => {

  const [search, setSearch] = useState("");

  const change = (e) => {
    setSearch(e.target.value)
  }


  return (
    <>
      <Navbar search={search} change={change} />
      <Switch>
        <Route exact path="/Music-Player/" component={Radio} />
        <Route exact path="/workout" component={Workout} />
        <Route exact path="/love" render={() => <Love data={search} />} />
        <Redirect to="/Music-Player/" />
      </Switch>
    </>
  )
}

export default App;
