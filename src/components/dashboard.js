import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import Slider from './Slider';
import Cards from './cards';
import '../App.css';

const Dashboard = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Logout</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/dashboard/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">Profile</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Others
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
      <Slider/>

      <h5>
        College Finder Introduction: 
      </h5>

      <p>
      If you were to visit the major college search websites, you would conclude that people have just a few considerations when choosing a college. Based on the search options 
      common to eight of the most popular websites, students want to be able to pick a college based on its location, the location’s setting, size, 
      tuition, selectivity, test scores, majors, whether it’s a community college or four-year institution,  and if it’s public or private.

      </p>

      <p>
      The first question is whether or not these are the characteristics you should be using to pick a college. 
      Given that between financial aid and merit money few students pay full tuition, the tuition variable is pretty useless.
       A more specific average net cost or average 
      financial aid award would be useful but isn’t found as a search option on most websites.
      </p>

      <p>
      Public or private status is only moderately more useful than tuition since private colleges are likely to 
      provide much more aid that public schools. While there are instances where student have financial reasons to attend only
       public or private schools, it’s more likely to be used inappropriately as a cost filter.
      </p>

      <Cards/>
    </div>
  );
}

export default Dashboard;