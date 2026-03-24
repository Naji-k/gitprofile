import { useParams } from 'react-router-dom';
import DetailPage from '../detail-page/index.tsx';
import { Navigate } from 'react-router-dom';

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

export function ProjectDetailRoute() {
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
