import StreamVideoProvider from '@/providers/StreamProviderClient';
import { ReactNode } from 'react';
 

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;