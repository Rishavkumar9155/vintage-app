import React from 'react';
import Navbar from '../../src/components/Navbar';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};
export default Layout;