import React from 'react';
import { Outlet } from 'react-router-dom';
import AppHeader from './AppHeader';
import Sidebar from './Sidebar';

const DashboardLayout = () => {
  return (
    <>
      <AppHeader />
      <Sidebar />
      <Outlet />
    </>
  );
};

export default DashboardLayout;
