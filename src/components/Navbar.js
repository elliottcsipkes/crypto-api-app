import React from "react";
import { FaCoins } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ setPage }) => {
  return (
    <div className="navbar">
      <Link to="/">
        <div className="icon-logo" onClick={() => setPage(1)}>
          <FaCoins className="icon" />
          <h1>
            {" "}
            Coin <span className="purple">Search</span>
          </h1>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
