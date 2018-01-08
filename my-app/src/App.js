import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import{
  BrowserRouter as Router,
  Route,
  Link
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
      <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
