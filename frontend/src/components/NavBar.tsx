import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useTheme } from '../ThemeContext';

const NavBar: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Navbar
      expand="md"
      className="border-bottom"
      style={{ backgroundColor: 'var(--body-bg)' }}
    >
      <Container fluid>
        {/* Brand */}
        <Navbar.Brand style={{ color: 'var(--body-color)' }}>
          Kärnhuset
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="ms-auto">
            {/* Light Toggle */}
            <Nav.Link
              onClick={() => setTheme('light')}
              style={{ color: 'var(--body-color)' }}
            >
              Light
            </Nav.Link>
            {/* Dark Toggle */}
            <Nav.Link
              onClick={() => setTheme('dark')}
              style={{ color: 'var(--body-color)' }}
            >
              Dark
            </Nav.Link>
            {/* System Toggle */}
            <Nav.Link
              onClick={() => setTheme('system')}
              style={{ color: 'var(--body-color)' }}
            >
              System
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
