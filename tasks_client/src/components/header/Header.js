import React, { Component } from 'react';
import logo from './logo.svg';
    import Navbar from 'react-bootstrap/Navbar';
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

    class Header extends Component {
        render() {

            return (
                <div>
                    <Navbar>
                        <Navbar.Brand>
                        <img src={logo} class="AppLogo" alt="logo" />   The Task Manager
                        </Navbar.Brand>
                    </Navbar>
                </div>
            );
        }
    }

export default Header;