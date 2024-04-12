import React, { FC } from 'react';

interface MainProps {
  children: React.ReactNode;
}

const Main: FC<MainProps> = ({ children }) => {
  return <main className="px-9 pt-12 pb-[69px]">{children}</main>;
};

export default Main;
