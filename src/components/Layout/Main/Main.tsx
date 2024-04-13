import React, { FC } from 'react';

interface MainProps {
  children: React.ReactNode;
}

const Main: FC<MainProps> = ({ children }) => {
  return (
    <main className="px-9 pt-12 pb-[69px] max-sm:py-8 max-sm:px-4">
      {children}
    </main>
  );
};

export default Main;
