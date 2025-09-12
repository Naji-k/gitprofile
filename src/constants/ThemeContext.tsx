import { ReactNode } from 'react';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  document.documentElement.setAttribute('data-theme', 'winter');

  return <>{children}</>;
};
