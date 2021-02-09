import React from 'react';
import { AuthProvider } from './Auth';
import { ToastProvider } from './Toast';

const Provider: React.FC = ({ children }) => (
  <AuthProvider>
    <ToastProvider>{children}</ToastProvider>
  </AuthProvider>
);

export default Provider;
