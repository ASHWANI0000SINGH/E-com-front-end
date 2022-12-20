import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const naviagte = useNavigate();
  const auth = localStorage.getItem("user");
  const clearUser = () => {
    localStorage.clear();
    naviagte("/signup");
  };

  return (
    <div>
      {auth ? (
        <ul className="nav-ul">
          <li>
            <Link to="/">Products</Link>
          </li>
          <li>
            <Link to="/add">Add Products</Link>
          </li>
          {/* <li>
            <Link to="/update"> Update Products</Link>
          </li> */}
          {/* <li>
            <Link to="/profile">Profile</Link>
          </li> */}
          <li>
            <Link onClick={clearUser} to="/signup">
              Logout ({JSON.parse(auth).name})
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="nav-ul nav-right">
          <li>
            <Link to="/">Sign Up</Link>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Nav;
