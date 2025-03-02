import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div style={{ display: 'flex', height: 'calc(100vh - 60px)' }}>
      {/* Left sidebar */}
      <aside
        style={{
          width: '240px',
          backgroundColor: 'rgba(0, 0, 0, 0.1)', // or a slightly darker green if you want
          padding: '1rem'
        }}
      >
        <p>Sidebar content (e.g., navigation, teams, etc.)</p>
      </aside>

      {/* Main content */}
      <main style={{ flex: 1, padding: '1rem' }}>
        <h2>Recently Viewed</h2>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          {/* Example “cards” to mimic Figma’s dashboard tiles */}
          <div
            style={{
              flex: '0 0 200px',
              height: '120px',
              backgroundColor: 'rgba(0,0,0,0.05)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <span>Figma basics</span>
          </div>
          <div
            style={{
              flex: '0 0 200px',
              height: '120px',
              backgroundColor: 'rgba(0,0,0,0.05)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <span>Build your own team library</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
