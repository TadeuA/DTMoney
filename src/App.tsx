import React from 'react';
import { AppProvider } from './hooks';
import { Routes } from './routes';

export const App: React.FC = () => (
  <AppProvider>
    <Routes />
  </AppProvider>
);
