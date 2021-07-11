// import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import "../App.css";
import "rsuite/dist/styles/rsuite-default.css";
import { Navbar } from "rsuite";
import NavItem from "react-bootstrap/Nav";
import { NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom"

export default function Navigation() {
  function dropdownItemColor() {
    document.getElementsByClassName("dropdown-item").style.backgroundColor =
      "#FFF";
  }

  return (
    <div className="nav-container">
      <Navbar className="nav-wrapper">
        <Navbar.Header className="nav-logo">
          <Link as={Link} to="/" className="navbar-brand logo">
            RentCouver
          </Link>
        </Navbar.Header>
        <Navbar.Body className="nav-body">

          <NavItem className="nav-body-item-list nav-list-main">
            <NavItem.Item>
              <Link className="nav-link" to="/home">
                <FontAwesomeIcon icon={faHome} />
              &nbsp; Home
            </Link>
            </NavItem.Item>
            <NavItem.Item>
              <Link className="nav-link" to="/property_listings">
                Properties
            </Link>
            </NavItem.Item>
            <NavItem.Item>
              <Link className="nav-link" to="/">
                About us
            </Link>
            </NavItem.Item>
          </NavItem>

          <NavItem className="nav-body-item-list">
            <FontAwesomeIcon className="user-icon" icon={faUser} />
            <NavDropdown
              className="profile-tab basic-nav-dropdown"
              title="Profile"
            >
              <NavDropdown.Item
                as={Link}
                className="dropdown-item"
                onClick={() => dropdownItemColor}
                to="/user/11"
              >
                Dashboard
            </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                className="dropdown-item"
                onClick={() => dropdownItemColor}
                to="/"
              >
                My properties
            </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                className="dropdown-item"
                onClick={() => dropdownItemColor}
                to="/rent_history/10"
              >
                Rent history
            </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                className="dropdown-item"
                onClick={() => dropdownItemColor}
                to="/"
              >
                References
            </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                className="dropdown-item"
                onClick={() => dropdownItemColor}
                to="/"
              >
                App status
            </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                as={Link}
                className="dropdown-item"
                onClick={() => dropdownItemColor}
                to="/app_list/1"
              >
                Received Apps
            </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                className="dropdown-item"
                onClick={() => dropdownItemColor}
                to="/ref_request_list/1"
              >
                Reference requests
            </NavDropdown.Item>
            </NavDropdown>
          </NavItem>
        </Navbar.Body>
      </Navbar>
    </div>
  );
}
