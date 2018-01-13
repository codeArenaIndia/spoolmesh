import React, { Component } from 'react';

import{
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

//Componets
import Header from './components/headerComponents/header';
import Footer from './components/footerComponents/footer';
import Homepage from './components/pages/homepage';
import Movies from './components/pages/movies';
import Sitcoms from './components/pages/sitcoms';
import Animes from './components/pages/animes';
import Misc from './components/pages/misc';

//css
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Assets/css/default.min.css';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Header />
        <Route exact path='/' component={Homepage} />
        <Route exact path='/Movies' component={Movies}/>
        <Route exact path='/Sitcoms' component={Sitcoms}/>
        <Route exact path='/Animes' component={Animes}/>
       <Route exact path='/Misc' component={Misc}/>
      </div>
      </Router>
    );
  }
}

export default App;
