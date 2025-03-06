import React from 'react';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <>
      {/* The top navbar with brand & theme toggles */}
      <NavBar />

      {/* The main dashboard layout (sidebar + content) */}
      <Dashboard />
    </>
  );
}

export default App;
