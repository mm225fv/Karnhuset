import React from 'react';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Dashboard />
    </div>
  );
};

export default App;
