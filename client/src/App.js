import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CMSHome from './componets/CMSHome';
import FrontHome from './componets/FrontHome';
import Login from './componets/auth/Login';
import Register from './componets/auth/Register';
import NotFound from './componets/common/NotFound';
import DashboardLayout from './componets/layouts/cms-layouts/DashboardLayout';
import ProtectedRoute from './routes/ProtectedRoute';

function App() {
  return (
    <Routes>
      {/* CMS Routing */}
      <Route
        path='/cms'
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
        exact
      >
        <Route
          path='/dashboard'
          element={
            <ProtectedRoute>
              <CMSHome />
            </ProtectedRoute>
          }
          exact
        />
      </Route>

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

      {/* Frontend Routing */}
      <Route
        path='/'
        element={<FrontHome />}
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
