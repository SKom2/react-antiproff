import Header from '@components/Layout/Header/Header';
import UserList from '@components/User/UserList';
import Main from '@components/Layout/Main/Main';

const Home = () => {
  return (
    <>
      <Header />
      <Main>
        <UserList />
      </Main>
    </>
  );
};

export default Home;
