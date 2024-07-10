/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./Userinfo.css";

const UserInfo = ({ user }) => {
  return (
    <div className="user-container">
      <div className="user-info">
        <img src={user.avatar_url} alt={`${user.login}'s avatar`} />
        <h2>{user.login}</h2>
        <hr />
        <ul className="user-details">
          <li>{user.bio}</li>
          <li>Location: {user.location}</li>
          <li>Followers: {user.followers}</li>
          <li>Following: {user.following}</li>
        </ul>
        <hr />
        <br />
        <Link className="button" to={`/followers/${user.login}`}>
          View Followers
        </Link>
      </div>
    </div>
  );
};

export default UserInfo;
