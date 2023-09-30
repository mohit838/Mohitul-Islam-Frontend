import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CMSHome from './componets/CMSHome';
import FrontHome from './componets/FrontHome';
import Login from './componets/auth/Login';
import Register from './componets/auth/Register';
import NotFound from './componets/common/NotFound';
import FrontBlog from './componets/font-pages/FrontBlog';
import DashboardLayout from './componets/layouts/cms-layouts/DashboardLayout';
import ProtectedRoute from './routes/ProtectedRoute';

function App() {
  return (
    <Routes>
      {/* Frontend Routing Start */}
      <Route
        path='/'
        element={<FrontHome />}
        exact
      />
      <Route
        path='/blog'
        element={<FrontBlog />}
        exact
      />
      {/* Frontend Routing End */}

      {/* CMS Routing */}
      <Route
        path='/cms'
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
        exact
      />

      <Route
        path='/dashboard'
        element={
          <ProtectedRoute>
            <CMSHome />
          </ProtectedRoute>
        }
        exact
      />

      {/* Public Routes */}
      <Route
        path='/login'
        element={<Login />}
        exact
      />

      <Route
        path='/registration'
        element={<Register />}
        exact
      />

      {/* Not Found Route */}
      <Route
        path='*'
        element={<NotFound />}
        exact
      />
    </Routes>
  );
}

export default App;
