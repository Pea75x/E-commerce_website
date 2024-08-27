import Directory from '../../components/directory/directory.tsx';
import { Outlet } from 'react-router-dom';
import React from 'react';

function Home() {
  return (
    <div>
      <Outlet />
      <Directory />
    </div>
  );
}

export default Home;
