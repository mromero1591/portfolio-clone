import React, {Component} from 'react';
import './Header.css';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: true
    }
  }

  toggleMenu = () => {
    const menuStatus = this.state.showMenu ? false : true;

    this.setState({
      showMenu: menuStatus
    })
  }
  render () {
    return (
      <nav className='navbar'>
        <div className='nav navbar-logo navbar-logo-section'>
          Start BootStrap
          <button className='btn nav-btn' onClick={this.toggleMenu}>
            <span className='btn-text'>Menu</span>
            <i className="fas fa-bars"></i> 
          </button>
        </div>
        <ul className={`nav nav-items nav-right ${this.state.showMenu ? '' : 'hide'}`} >
          <li className='navbar-item'><a href="#" className="navbar-link">Services</a></li>
          <li className='navbar-item'><a href="#" className="navbar-link">Portfolio</a></li>
          <li className='navbar-item'><a href="#" className="navbar-link">About</a></li>
          <li className='navbar-item'><a href="#" className="navbar-link">Team</a></li>
          <li className='navbar-item'><a href="#" className="navbar-link">Contact</a></li>
        </ul>
      </nav>
    )
  }
}
