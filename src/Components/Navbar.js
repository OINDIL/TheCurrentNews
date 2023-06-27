import React, { Component } from "react";
export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a
            className="navbar-brand"
            style={{ fontFamily: "abril fatface" }}
            href="#"
          >
            The Current Times
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link" aria-current="page" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" aria-current="page" href="#">business</a></li>
              <li className="nav-item"><a className="nav-link" aria-current="page" href="#">entertainment</a></li>
              <li className="nav-item"><a className="nav-link" aria-current="page" href="#">general</a></li>
              <li className="nav-item"><a className="nav-link" aria-current="page" href="#">health</a></li>
              <li className="nav-item"><a className="nav-link" aria-current="page" href="#">science</a></li>
              <li className="nav-item"><a className="nav-link" aria-current="page" href="#">sports</a></li>
              <li className="nav-item"><a className="nav-link" aria-current="page" href="#">technology</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
