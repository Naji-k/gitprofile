import React from 'react';
import ReactDOM from 'react-dom/client';
import GitProfile from './components/gitprofile.tsx';
import {
  HashRouter,
  Route,
  Routes,
  Navigate,
  useParams,
} from 'react-router-dom';
import DetailPage from './components/detail-page/index.tsx';
import { ThemeProvider } from './constants/ThemeContext.tsx';

const PROJECT_MARKDOWN_MAP: Record<
  string,
  { title?: string; markdownPath: string; url?: string }
> = {
  ADStore: {
    title: 'ADStore',
    markdownPath: 'https://github.com/Naji-k/ADStore/blob/master/Readme.md',
    url: 'https://github.com/Naji-k/ADStore',
  },
  MyFlix: {
    title: 'MyFlix',
    markdownPath: 'https://github.com/Naji-k/MyFlix/blob/main/README.md',
    url: 'https://github.com/Naji-k/MyFlix',
  },
  'ft_transcendence-pong': {
    title: 'ft_transcendence-pong',
    markdownPath:
      'https://github.com/Naji-k/ft_transcendence-pong/blob/main/Readme.md',
    url: 'https://github.com/Naji-k/ft_transcendence-pong',
  },
  Webserv: {
    title: 'Webserv',
    markdownPath: 'https://github.com/julicaro31/Webserv/blob/main/Readme.md',
    url: 'https://github.com/julicaro31/Webserv',
  },
};

function ProjectDetailRoute() {
  const { projectName } = useParams<{ projectName: string }>();
  const project = projectName ? PROJECT_MARKDOWN_MAP[projectName] : undefined;

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <DetailPage
      title={project.title}
      markdownPath={project.markdownPath}
      url={project.url}
    />
  );
}
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
          <Route
            path="/projects/:projectName"
            element={<ProjectDetailRoute />}
          />
          <Route path="/projects" element={<Navigate to="/" replace />} />
          <Route path="/projects/" element={<Navigate to="/" replace />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
