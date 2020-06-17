import React, { Component } from 'react';
import { Link } from 'gatsby';
import logo from '../../images/logo.svg'
import {FaCartArrowDown} from 'react-icons/fa'

class NavBar extends Component {
    
    state = {
        navBarOpen: false,
        css: 'collapse navbar-collapse',
        links: [
            {id: 1, path: '/', text: 'Home'},
            {id: 2, path: '/about', text: 'About'},
            {id: 3, path: '/contact', text: 'Contact'}
        ]
    }

    navBarHandle = () => { 
        this.state.navBarOpen ? 
        this.setState({css: 'collapse navbar-collapse', navBarOpen: false}) :
         this.setState({css: 'collapse navbar-collapse show', navBarOpen: true})
        
    }
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-light navbar-light">
                <Link to="/" className="">
                    <img src={logo} alt='logo' />
                     {/* https://www.iconfinder.com/icons/185113/coffee_streamline_icon
                    Creative Commons (Attribution 3.0 Unported);
                    https://www.iconfinder.com/webalys  */}
                </Link>
                <button className='navbar-toggler' type='button' onClick={this.navBarHandle}>
                    <span className='navbar-toggler-icon'/>
                </button>
                <div className={this.state.css}>
                    <ul className="navbar-nav mx-auto">  
                    {this.state.links.map(link => {
                            return (
                                <li className="nav-item" key={link.id}>
                                    <Link className='nav-link ' to={link.path}>{link.text}</Link>
                                </li>
                            )
                        })}
                        <li className='nav-item ml-sm-5'><FaCartArrowDown className='cart-icon' /></li>
                    </ul>
                    
                </div>
            </nav>
        );
    }
}

export default NavBar;
