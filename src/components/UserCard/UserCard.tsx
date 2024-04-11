import React, { FC, useEffect, useState } from 'react';
import Like from '@assets/icons/Like';
import { useNavigate } from 'react-router-dom';

interface UserCardProps {
  first_name: string;
  last_name: string;
  id: number;
  avatar: string;
}

const UserCard: FC<UserCardProps> = ({ first_name, last_name, avatar, id }) => {
  const navigate = useNavigate();
  const likeStorageKey = `liked-${id}`;

  const [isLiked, setIsLiked] = useState<boolean>(() => {
    return JSON.parse(localStorage.getItem(likeStorageKey) || 'false');
  });

  useEffect(() => {
    localStorage.setItem(likeStorageKey, JSON.stringify(isLiked));
  }, [isLiked, likeStorageKey]);

  const handleCardClick = () => {
    navigate(`/users/${id}`);
  };

  const handleLikeClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsLiked(!isLiked);
  };

  return (
    <article
      className="shadow-custom rounded-2xl pt-9 pb-[20px] px-[20px] max-w-[305px]"
      onKeyDown={handleCardClick}
      onClick={handleCardClick}
      role="presentation"
    >
      <div className="flex flex-col items-center gap-4">
        <img
          src={avatar}
          alt="User Avatar"
          className="rounded-[50%] w-[124px] h-[124px] object-cover"
        />
        <p className="text-t text-black">
          {first_name} {last_name}
        </p>
        <button
          type="button"
          aria-label="Like"
          className="self-end w-[30px] h-[28px] bg-lightGray rounded flex justify-center items-center"
          onClick={handleLikeClick}
        >
          <Like fill={isLiked} />
        </button>
      </div>
    </article>
  );
};

export default UserCard;
