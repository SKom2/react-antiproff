import { FC } from 'react';
import { IUser } from '@models/IUser';

const UserDisplay: FC<{ user: IUser }> = ({ user }) => (
  <div className="flex gap-8 max-sm:flex-col-reverse max-sm:items-center max-sm:gap-4">
    <img
      src={user.avatar}
      alt="User Avatar"
      className="rounded-[50%] w-[187px] h-[187px] object-cover max-lg:w-[130px] max-lg:h-[130px] max-sm:w-[187px] max-sm:h-[187px]"
    />
    <div className="mt-[29px] max-lg:mt-4 max-sm:mt-0">
      <p className="text-white text-h1 max-lg:text-h1s">
        {user.first_name} {user.last_name}
      </p>
      <p className="text-white mt-2 text-[32px] text-start max-lg:text-t max-sm:text-center max-sm:mt-4">
        Партнер
      </p>
    </div>
  </div>
);

export default UserDisplay;
