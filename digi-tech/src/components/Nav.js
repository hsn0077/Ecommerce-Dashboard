import React, { Component } from "react";
import "../components/Header.css";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
// import { BiSolidUser } from "react-icons/bi";

export default class Header extends Component {
  render() {
    // const openInNewTab = (url) => {
    //   window.open(url, "_blank", "noreferrer");
    // };
     const auth = localStorage.getItem("user");
    const ad = localStorage.getItem("admin");
    const logout = () => {
      localStorage.clear();
    };
    return (
      <div className="container-flex">
        <div className="navbar-top">
          <Link className="navbar-brand" to="#">
            DiGi-Tech
          </Link>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-lg-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn" type="submit">
              <BiSearch />
            </button>
            {/* <button className="user-btn">
              <BiSolidUser />
            </button> */}
            <button className="signup" id="sign_up" >
              {auth ? (
                <Link onClick={logout} to="/login">
                {JSON.parse(auth).firstName} (Logout)
                  {/* <BiSolidUser/> */}
                </Link>
              ) : <>
              {ad ? 
                <Link onClick={logout} to="/login">
                {JSON.parse(ad).name} (Logout)
                  {/* <BiSolidUser/> */}
                </Link>
               : <Link id="login" to="/login">LOGIN</Link>}
                </>
              }
            </button>
          </form>

          {/* onClick={() => openInNewTab("Signup.js")} */}
        </div>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  HOME <span className="sr-only">(current)</span>
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" href="#">
                  Link
                </Link>
              </li> */}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  PRODUCTS
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/laptop">
                    Laptops
                  </Link>
                  <Link className="dropdown-item" href="#">
                    GPU
                  </Link>
                  {/* <div className="dropdown-divider"></div> */}
                  <Link className="dropdown-item" href="#">
                    Keyboard
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/laptop'>
                  ABOUT US
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/laptop'>
                  CONTACT US
                </Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" to="/addproduct">
                  Add Products
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        </div>
    );
  }
}
