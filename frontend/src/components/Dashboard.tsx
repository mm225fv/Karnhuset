import React from 'react';
import { Container, Row, Col, Nav, Button } from 'react-bootstrap';

const Dashboard: React.FC = () => {
  return (
    <div style={{ height: 'calc(100vh - 56px)' /* minus navbar height */, overflow: 'hidden' }}>
      <Container fluid className="h-100">
        <Row className="h-100">
          {/* LEFT SIDEBAR */}
          <Col
            xs={12}
            md={3}
            lg={2}
            className="border-end p-3 d-flex flex-column"
            style={{ overflowY: 'auto' }}
          >
            {/* User info + search */}
            <h5 style={{ marginBottom: '1rem' }}>Matthias Marten</h5>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Search for anything"
            />

            {/* Nav links */}
            <Nav className="flex-column">
              <Nav.Link href="#" style={{ color: 'var(--body-color)' }}>
                Recents
              </Nav.Link>
              <Nav.Link href="#" style={{ color: 'var(--body-color)' }}>
                Drafts
              </Nav.Link>
              <Nav.Link href="#" style={{ color: 'var(--body-color)' }}>
                All projects
              </Nav.Link>
              <Nav.Link href="#" style={{ color: 'var(--body-color)' }}>
                Trash
              </Nav.Link>
            </Nav>

            {/* Bottom "Ready to upgrade?" */}
            <div className="mt-auto">
              <div
                className="p-3 text-center rounded mb-3"
                style={{ backgroundColor: 'rgba(0,0,0,0.05)' }}
              >
                <p className="mb-2">Ready to upgrade?</p>
                <Button variant="primary" size="sm">
                  View Plans
                </Button>
              </div>
              <p
                className="text-center text-muted mb-0"
                style={{ fontSize: '0.9rem' }}
              >
                Explore Community
              </p>
            </div>
          </Col>

          {/* MAIN CONTENT */}
          <Col
            xs={12}
            md={9}
            lg={10}
            className="p-3"
            style={{ overflowY: 'auto' }}
          >
            {/* Row of "New design file" tiles */}
            <div className="d-flex flex-wrap gap-3 mb-4">
              {['New design file', 'New FigJam board', 'New slide deck', 'Import'].map(
                (item) => (
                  <div
                    key={item}
                    className="d-flex align-items-center justify-content-center border rounded"
                    style={{
                      width: '160px',
                      height: '80px',
                      cursor: 'pointer',
                      backgroundColor: 'rgba(0,0,0,0.05)'
                    }}
                  >
                    {item}
                  </div>
                )
              )}
            </div>

            {/* Heading: "Kärnhuset" */}
            <h4 className="mb-3">Kärnhuset</h4>

            {/* Sub-navigation */}
            <div className="d-flex gap-4 mb-3">
              <span style={{ cursor: 'pointer' }}>Recently viewed</span>
              <span style={{ cursor: 'pointer' }}>Shared files</span>
              <span style={{ cursor: 'pointer' }}>Shared projects</span>
            </div>

            {/* Example row of project "cards" */}
            <div className="row g-3">
              {['Figma basics', 'Figma basics', 'Team library'].map((card) => (
                <div className="col-12 col-sm-6 col-md-4" key={card}>
                  <div
                    className="d-flex align-items-center justify-content-center border rounded"
                    style={{
                      height: '120px',
                      cursor: 'pointer',
                      backgroundColor: 'rgba(0,0,0,0.05)'
                    }}
                  >
                    {card}
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
