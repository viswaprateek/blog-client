import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useSelector,useDispatch } from "react-redux";
import { resetState } from "../../redux/slices/userAuthorSlice";

function Header() {
  let { loginUserStatus, errorOccurred, errMsg,currentUser } = useSelector(
    (state) => state.userAuthoruserAuthorLoginReducer
  );

  let dispatch=useDispatch()

    function signOut(){
      //remove token from local storage
      localStorage.removeItem('token')
      dispatch(resetState())
    }

  return (
    <nav
      className="navbar navbar-expand-sm fs-5 shadow-sm"
      style={{ backgroundColor: "var(--light-olive)" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="" width="60px" className="rounded" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {loginUserStatus === false ? (
              <>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to=""
                    style={{ color: "var(--light-grey)" }}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="signup"
                    style={{ color: "var(--light-grey)" }}
                  >
                    SignUp
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="signin"
                    style={{ color: "var(--light-grey)" }}
                  >
                    SignIn
                  </NavLink>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="signin"
                  style={{ color: "var(--light-grey)" }}
                  onClick={signOut}
                >
                  <p className="fs-3 ">Welcome {currentUser.username},</p>
                  Signout
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
