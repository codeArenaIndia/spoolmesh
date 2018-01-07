import React, { Component } from 'react';
import{
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

//Componets
import Header from './components/headerComponents/header';
import Footer from './components/footerComponents/footer';
import Homepage from './components/pages/homepage';
import Products from './components/pages/products';

//css
import './Assets/css/default.min.css';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Header />
        <Route exact path='/' component={Homepage} />
        <Route exact path='/Products' component={Products}/>
      <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
