import { useSearchUser } from "../Hooks/useSearchUser";
// import NotFoundPage from "./NotfoundPage";
import UserInfo from "../Components/UserInfo/UserInfo";
import Header from "../Components/Headers/Header";
import RepoList from "../Components/Repository/RepoList";
import NotFoundPage from "./notfoundPage";

const HomePage = () => {
  const { user, isError, handleSearch } = useSearchUser();
  const username = user?.login || "";

  if (isError) {
    return <NotFoundPage />;
  }

  return (
    <div>
      <Header username={username} handleSearch={handleSearch} />
      {user && (
        <>
          <UserInfo user={user} />
          <RepoList username={user.login} />
        </>
      )}
    </div>
  );
};

export default HomePage;
