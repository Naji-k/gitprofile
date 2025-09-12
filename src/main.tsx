import React from 'react';
import ReactDOM from 'react-dom/client';
import GitProfile from './components/gitprofile.tsx';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import DetailPage from './components/detail-page/index.tsx';
import { ThemeProvider } from './constants/ThemeContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<GitProfile config={CONFIG} />} />
          <Route
            path="/projects/slack-bot"
            element={
              <DetailPage
                title="Slack Bot Project"
                markdownPath="/content/slack-bot.md"
              />
            }
          />
          <Route
            path="/projects/ai-projects"
            element={
              <DetailPage title="" markdownPath="/content/ai-projects.md" />
            }
          />
          <Route path="/projects" element={<Navigate to="/" replace />} />
          <Route path="/projects/" element={<Navigate to="/" replace />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
