import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import Login from './pages/Login';
import { appTheme } from './app.theme';
import Dashboard from './pages/Dashboard';
import Statistics from './pages/Statistics';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';


function App() {
  return (
    <div className="App">
      <ThemeProvider theme = {appTheme}>
      <BrowserRouter>
        <Routes >
          <Route path="/" element={<Login></Login>} />
          <Route path="/dashboard" element={<Dashboard></Dashboard>} />
            <Route path="/statistics" element={<Statistics></Statistics>} />
            {/* <Route path="/maintenance" element={<Maintenance></Maintenance>} />
            <Route path="/offer" element={<Offer></Offer>} />
            <Route path="/sales" element={<Sales></Sales>} />
            <Route path="/setting" element={<Setting></Setting>} /> */}
        </Routes>
      </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
