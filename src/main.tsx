import React from 'react';
import ReactDOM from 'react-dom/client';
import GitProfile from './components/gitprofile.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailPage from './components/detail-page/index.tsx';
import { ThemeProvider } from './constants/ThemeContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GitProfile config={CONFIG} />} />
          <Route path="/docs" element={<DetailPage title="Documentation" />} />
          <Route path="/detail/:slug" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
