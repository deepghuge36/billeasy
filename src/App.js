import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Images from './components/Images';
function App() {
  return (

    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/images' component={Images} />
      </Switch>
    </Router>


  );
}

export default App;
