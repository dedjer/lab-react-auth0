import React from "react";
import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  UncontrolledDropdown
} from "reactstrap";
import { LinkContainer } from "react-router-bootstrap";
import { withRouter } from "react-router-dom";

//This is the singleton instance of the Auth class you just defined.
import auth0Client from "./Auth";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.signOut = this.signOut.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  signOut() {
    auth0Client.logout();
    // need withRouter to be able to access history via props
    this.props.history.replace("/home");
    this.setState({ isLoggedOut: true });
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Vehicle History</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <LinkContainer to="/home">
                  <NavLink>Home</NavLink>
                </LinkContainer>
              </NavItem>
              {auth0Client.isAuthenticated() && (
                <LinkContainer to="/secured">
                  <NavLink>Secured</NavLink>
                </LinkContainer>
              )}
              {auth0Client.isAuthenticated() && (
                <LinkContainer to="/private">
                  <NavLink>Private</NavLink>
                </LinkContainer>
              )}
              {!auth0Client.isAuthenticated() && (
                <LinkContainer onClick={auth0Client.login} to="/login">
                  <NavLink>Login</NavLink>
                </LinkContainer>
              )}
              {auth0Client.isAuthenticated() && (
                <React.Fragment>
                  <LinkContainer onClick={this.signOut} to="/logout">
                    <NavLink>Logout</NavLink>
                  </LinkContainer>
                  <a
                    class="nav-link"
                    href="https://vehicle-history.auth0.com/v2/logout"
                    onClick={this.signOut}
                  >
                    Logout Auth0
                  </a>
                </React.Fragment>
              )}
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Option
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <LinkContainer to="/home">
                      <NavLink>Option 1</NavLink>
                    </LinkContainer>
                  </DropdownItem>
                  <DropdownItem>
                    <LinkContainer to="/home">
                      <NavLink>Option 2</NavLink>
                    </LinkContainer>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
//withRouter is a component provided by React Router to enhance your component
//with navigation capabilities (e.g., access to the history object).
export default withRouter(NavBar);
