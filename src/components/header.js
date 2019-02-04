import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {

    render(){
        return(
        <div>
            <nav>
                <div className="container">  
              <div className="nav-wrapper">
      <a href="#" className="brand-logo">Logo</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to='/' >View user</Link></li>
        <li><Link to='/adduser' >Add user</Link></li>
        <li><Link to='/about' >About</Link></li>
      </ul>
      </div>

    </div>
            </nav>
        </div>
        )
    }
}

export default Header;