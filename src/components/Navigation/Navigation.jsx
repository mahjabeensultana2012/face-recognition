import React from 'react';

const Navigition = ({ onRouteChange }) => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <p
        onClick={onRouteChange}
        className="f3 link dim black underline pa3 pointer"
      >
        {' '}
        Sign Out
      </p>
    </nav>
  );
};

export default Navigition;
