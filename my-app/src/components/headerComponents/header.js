import React, { Component } from 'react';
import{
  Link
} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
          <Link to="/">
          <div className="logo">
                SPOOLMESH
              </div>
          </Link>
          <nav>
            <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/Movies">Movies</Link>
                </li>
                <li>
                  <Link to="/Sitcoms">Sitcoms</Link>
                </li>
                <li>
                  <Link to="/Animes">Animes</Link>
                </li>
                <li>
                  <Link to="/Misc">Misc</Link>
                </li>
            </ul>
          </nav>
          <div className="login">
            login
          </div>
      </header>
    );
  }
}

export default Header;
