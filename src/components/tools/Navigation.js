import React from 'react';
import {
  Col, Container,
  Row
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import withWindowDimensions from '../people/withWindowDimensions';

import MobileNavigation from './MobileNavigation';

class Navigation extends React.Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
    };

    this.showMenu = this.showMenu.bind(this);

    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });
    }
  }

  render() {
    // need to use inline styles for veertical alignment of columns so that defaults are overridden
    let window = this.props.windowWidth;
    let padding;

    // dynamically determine left and right padding around projects grid

    if (window >= 1200) {
      //xl
      padding = 28;
    } else if (window >= 992) {
      // lg
      padding = 22;
    } else if (window >= 768) {
      // m
      padding = 10;
    } else if (window >= 576) {
      // s
      padding = 2;
    } else {
      // Return the mobile nav
      return <MobileNavigation />;
    }

    const verticalAlign = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    };
    return (
      <center>
        <Container
          fluid
          style={{
            margin: 0,
            padding: `0 ${padding}%`,
            paddingTop: '0.5rem',
            backgroundColor: this.props.backgroundColor || '#f2f4f5',
            maxWidth: '100vw',
          }}>
          <Row
            style={{
              padding: 0,
              margin: 0,
              justifyContent: 'center',
            }}>
            <Col xs="2" style={verticalAlign}>
              <Link to="/">
                <img
                  alt="Home"
                  src={require('../homepage/images/DAML_Full_Grey_Transparent.svg')}
                  width="50"
                  height="50"
                />
              </Link>
            </Col>
            {/* <Col xs="2" style={verticalAlign}>
              <Link to="/initiatives" className="nav-link-col">
                Initiatives
              </Link>
            </Col> */}
            <Col xs="2" style={verticalAlign}>
              <Link to="/join" className="nav-link-col">
                Join the Team
              </Link>
            </Col>
            <Col xs="2" style={verticalAlign}>
              <Link to="/projects" className="nav-link-col">
                Projects
              </Link>
            </Col>
            <Col xs="2" style={verticalAlign}>
              <Link to="/people" className="nav-link-col">
                People
              </Link>
            </Col>
            <Col xs="2" style={verticalAlign}>
              <Link to="/courses" className="nav-link-col">
                Courses
              </Link>
            </Col>
            {/*<Col xs="1" style={verticalAlign}>
              <Link to="/scholars" className="nav-link-col">
                Scholars
              </Link>
            </Col>*/}
            {/*
            <Col xs="2" style={verticalAlign}>
              <Link to="/papers" className="nav-link-col">
                Papers
              </Link>
            </Col>
            */}
            {/* <Col xs="2" style={verticalAlign}>
              <Link to="/GPU" className="nav-link-col">
                GPUs
              </Link>
            </Col> */}
          </Row>
        </Container>
      </center>
    );
  }
}

export default withWindowDimensions(Navigation);
