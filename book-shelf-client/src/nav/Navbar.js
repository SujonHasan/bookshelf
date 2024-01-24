/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-5">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          BookShelf
        </a>
    
        <div className="d-flex">
          <div className="d-flex gap-3">
            <a className="nav-link active" aria-current="page" href="/">
              Home
            </a>
            <a className="nav-link" href="/registration">
              Sign Up
            </a>
            <a className="nav-link" href="/login">
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
