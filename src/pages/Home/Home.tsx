import Header from '@components/Header/Header';
import UserList from '@components/UserList/UserList';
import Main from '@components/Main/Main';

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
