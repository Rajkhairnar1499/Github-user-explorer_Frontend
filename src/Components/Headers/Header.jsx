/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./Header.css";
import SearchBar from "../Search/Searchbar";

const Header = ({ username, handleSearch }) => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        Git Finder
      </Link>
      <SearchBar username={username} handleSearch={handleSearch} />
    </header>
  );
};

export default Header;
