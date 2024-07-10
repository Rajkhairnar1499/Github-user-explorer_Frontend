import Header from "../Components/Headers/Header";
import RepoDetails from "../Components/Repository/ReposDetails";
import { useParams } from "react-router-dom";

import { useGetUserReposQuery } from "../Features/reposApi";

const RepositoryDetailsPage = () => {
  const { username, repoName } = useParams();
  const {
    data: repos,
    isLoading,
    isError,
  } = useGetUserReposQuery(username || "", {
    skip: !username,
  });

  if (isLoading)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        Loading...
      </div>
    );
  if (isError) return <div>Error occurred while fetching repositories.</div>;

  const repo = repos?.find((repo) => repo.name === repoName);

  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        {repo && <RepoDetails repo={repo} />}
      </div>
    </div>
  );
};

export default RepositoryDetailsPage;
