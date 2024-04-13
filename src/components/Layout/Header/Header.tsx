import React, { FC } from 'react';
import { IUser } from '@models/IUser';
import useWindowDimensions from '@hooks/useWindowDimensions';
import LogoutButton from '@ui/LogoutButton/LogoutButton';
import BackButton from '@ui/BackButton/BackButton';
import AboutTeam from '@components/AboutTeam/AboutTeam';
import Hero from '@components/Hero/Hero';

interface HeaderProps {
  user?: IUser;
}

const Header: FC<HeaderProps> = ({ user }) => {
  const { width } = useWindowDimensions();
  const userPage = !!user;

  return (
    <header
      className={`bg-violet pt-8 pb-16 px-20 max-lg:pt-6 max-lg:px-3 ${userPage ? 'max-lg:pb-16' : 'max-lg:pb-10'} max-sm:pt-3`}
    >
      <div
        className={`grid grid-cols-[1fr_10fr_1fr] gap-5 max-sm:flex ${userPage ? 'max-sm:flex-col' : 'max-sm:flex-col-reverse'} max-sm:gap-3`}
      >
        {userPage && width < 640 && (
          <nav className="flex justify-between">
            <BackButton />
            <LogoutButton />
          </nav>
        )}
        {userPage && width > 640 ? <BackButton /> : <div />}
        {userPage ? <Hero user={user} /> : <AboutTeam />}
        {(!userPage || width > 640) && <LogoutButton />}
      </div>
    </header>
  );
};

Header.defaultProps = {
  user: undefined,
};

export default Header;
