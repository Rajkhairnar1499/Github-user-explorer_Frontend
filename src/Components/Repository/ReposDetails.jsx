/* eslint-disable react/prop-types */
import Github from "../../assets/githubName.svg";
import Verified from "../../assets/verified.svg";
import { formatDate } from "../../utils/helper";
import "./RepoDetails.css";

const RepoDetails = ({ repo }) => {
  return (
    <>
      <h1 className="name">Repository Details</h1>
      <div className="repo-container">
        <div className="repo-details">
          <h2 className="name">Application</h2>
          <h1 className="name">{repo.name}</h1>
          <div className="verified">
            <h5>Verifiied by GitHub</h5>
            <img src={Verified} alt="" width={15} />
          </div>
          <p className="verifiedText">
            GitHub confirm that this app meets the requirement for verification
          </p>
          <p className="border"></p>
          <h3 className="description">{repo.description}</h3>

          <p className="language">
            <strong>Language</strong> :{repo.language}
          </p>

          <p className="border"></p>

          <p className="date">Created At : {formatDate(repo.created_at)} </p>
          <p className="date">Updated At : {formatDate(repo.updated_at)} </p>

          <img src={Github} alt="logo" width={100} />
        </div>
      </div>
    </>
  );
};

export default RepoDetails;
