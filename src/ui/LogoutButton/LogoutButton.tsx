import { logoutUser } from '@store/slices/auth/auth';
import { useAppDispatch } from '@hooks/redux';
import Exit from '@assets/icons/Exit';
import { useNavigate } from 'react-router-dom';
import useWindowDimensions from '@hooks/useWindowDimensions';

const LogoutButton = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { width } = useWindowDimensions();

  const handleLogout = (e: any) => {
    e.preventDefault();
    dispatch(logoutUser()).then((resultAction) => {
      if (logoutUser.fulfilled.match(resultAction)) {
        navigate('/login');
      }
    });
  };

  if (width <= 640) {
    return (
      <button
        type="button"
        onClick={handleLogout}
        className="w-10 h-10 items-center self-start justify-center flex max-sm:self-end"
        aria-label="Logout"
      >
        <Exit />
      </button>
    );
  }
  return (
    <button
      type="button"
      className="max-w-[80px] text-white px-4 py-2 border-white border-[1px] self-start justify-end flex max-sm:self-end rounded-xl max-sm:px-2 max-sm:py-1 max-sm:text-ts"
      onClick={handleLogout}
      aria-label="Logout"
    >
      Выход
    </button>
  );
};

export default LogoutButton;
