import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './componets/Home';
import Login from './componets/auth/Login';
import Register from './componets/auth/Register';
import NotFound from './componets/common/NotFound';
import DashboardLayout from './componets/layouts/DashboardLayout';
import ProtectedRoute from './routes/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route
        path='/'
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
              <Home />
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
