import { ReactNode } from 'react';
f
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  document.documentElement.setAttribute('data-theme', 'winter');

  return <>{children}</>;
};
