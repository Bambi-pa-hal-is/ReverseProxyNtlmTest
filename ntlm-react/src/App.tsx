import { useEffect, useState } from 'react';
import './App.css';
import { AppRoutes } from './routes/AppRoutes';
import {  ThemeProvider } from '@mui/material/styles';
import useThemeStore from './hooks/ThemeStore';
import { CssBaseline } from '@mui/material';

function App() {

  const themeStore = useThemeStore();

  return (
    <ThemeProvider theme={themeStore.theme}>
    <CssBaseline />
    <AppRoutes />
  </ThemeProvider>
  );
}

export default App;
