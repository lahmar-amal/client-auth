import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../Redux/actions";

const NavBar = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  return (
    <div>
      <ul>
        {isAuth ? (
          <>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/logout">
              <li onClick={() => dispatch(logout())}> Logout</li>
            </Link>
          </>
        ) : (
          <>
            <Link to="/register">
              <li>Register</li>
            </Link>

            <Link to="/login">
              <li>Login</li>
            </Link>
          </>
        )}
      </ul>
    </div>
  );
};

export default NavBar;
