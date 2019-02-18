import React, { Component } from 'react';
import './Header.css';
class Header extends Component {
    render() {
      return (
    <div className="header">
        <div className="logo-img">
            <img className="logo"src ={"https://www.docplanner.com/img/logo-default-group-en.svg?v=1" }/>
        </div>

        <div className="nav">
            <a className="menu"href="#"> About us </a>
            <a className="menu" href="#"> Career </a>
            <a className="menu" href="#"> Departments </a>
        </div>

  
    </div>
      );
    }
  }




export default Header;