import { ReactNode } from 'react';
import { Metadata } from 'next';

import '../styles/global.scss';

export const metadata: Metadata = {
  title: 'Home Template',
  description: 'This is a template project',
};

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <h1>App Layout</h1>
      <br />
      {children}
    </div>
  );
}
