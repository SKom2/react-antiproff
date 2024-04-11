import Header from '@components/Header/Header';
import UserList from '@components/UserList/UserList';

const Home = () => {
  return (
    <>
      <Header />
      <main className="px-9 pt-12 pb-[69px]">
        <UserList />
      </main>
    </>
  );
};

export default Home;
