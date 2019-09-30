import React, { Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
 } from 'reactstrap';

export default class TopBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
    
        <Navbar id="top-header" dark expand="lg">
          <FontAwesomeIcon icon="seedling" className="fact-icon" style={{marginRight: '5px'}}/>
          <NavbarBrand href="/">Plant Finder</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>

              <NavItem>
                <NavLink href="https://data.sfgov.org/resource/vmnk-skih.json" target="_blank" rel="noopener noreferrer">API Link</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
   
    
    );
  }
}

