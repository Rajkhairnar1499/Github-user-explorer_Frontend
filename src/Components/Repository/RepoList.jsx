/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useGetUserReposQuery } from "../../Features/reposApi";
import "./RepoList.css";

const RepoList = ({ username }) => {
  const { data: repos, isLoading, isError } = useGetUserReposQuery(username);

  if (isLoading) return <div className="loading">Loading...</div>;
  if (isError) return <div>Error occurred while fetching repositories.</div>;

  return (
    <div className="repo-list">
      <ul>
        {repos?.map((repo) => (
          <li key={repo.id}>
            <Link to={`/repo/${username}/${repo.name}`}>{repo.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepoList;
