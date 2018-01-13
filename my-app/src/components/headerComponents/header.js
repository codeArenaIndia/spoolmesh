import React, { Component } from 'react';
import{
  Link
} from 'react-router-dom';


class Header extends Component {
  render() {
    return (
      <header>
      <Link className ="head_logo" to="/">
      <div className="logo">
            <span className="mv"><i className="fa fa-cogs" aria-hidden="true"></i></span>
            <span className="dv_logo"> SPOOLMESH</span>
          </div>
      </Link>
    <ul className="nav nav-justified pull-right">
      <li className="active">
        <Link data-toggle="tooltip" title="Home!" to="/">
       <span className="mv"><i className="fa fa-home" aria-hidden="true"></i></span><span className="dv"> Home </span>
       </Link>
      </li>
      <li>
       <Link data-toggle="tooltip" title="Movies" to="/Movies">
       <span className="mv"><i className="fa fa-file-video-o" aria-hidden="true"></i></span><span className=" dv"> Movies </span>
       </Link>
      </li>
      <li  >
        <Link data-toggle="tooltip" title="Sitcoms!" to="/Sitcoms">
        <span className="mv"><i className="fa fa-television" aria-hidden="true"></i></span><span className="dv"> Sitcoms </span>  
      </Link>
      </li>
      <li>
        <Link data-toggle="tooltip" title="Animes"  to="/animes">
        <span className="mv"><i className="fa fa-bolt" aria-hidden="true"></i></span><span className="dv"> Animes </span>    
      </Link>
      </li>
      <li>
      <Link data-toggle="tooltip" title="Misc" to="/Misc">
      <span className="mv"><i className="fa fa-globe" aria-hidden="true"></i></span><span className="dv"> Misc </span>
      </Link>    
    </li>
  </ul>
      </header>
    );
  }
}

export default Header;
