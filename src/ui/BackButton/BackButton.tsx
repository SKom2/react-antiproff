import React from 'react';
import { useNavigate } from 'react-router-dom';
import useWindowDimensions from '@hooks/useWindowDimensions';
import ArrowLeft from '@assets/icons/ArrowLeft';

const BackButton = () => {
  const navigate = useNavigate();
  const { width } = useWindowDimensions();

  if (width < 640) {
    return (
      <button
        type="button"
        className="flex justify-center items-center text-white w-10 h-10"
        onClick={() => navigate('/')}
        aria-label="Back"
      >
        <ArrowLeft />
      </button>
    );
  }

  return (
    <button
      type="button"
      className="max-w-[80px] self-start flex text-white px-4 py-2 border-white border-[1px] rounded-xl"
      onClick={() => navigate('/')}
    >
      Назад
    </button>
  );
};

export default BackButton;
