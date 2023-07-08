import React, { Component } from "react";
import { Link } from "react-router-dom";
export class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a
            className="navbar-brand"
            style={{ fontFamily: "abril fatface" }}
           href="/"
          >
            The <span style={{color:'green'}}>Current</span> Times
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ fontFamily: 'fira code' }}>
              <li className="nav-item"><Link className="nav-link" aria-current="page" to="/general">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" aria-current="page" to="/Business">Business</Link></li>
              <li className="nav-item"><Link className="nav-link" aria-current="page" to="/Entertainment">Entertainment</Link></li>
              <li className="nav-item"><Link className="nav-link" aria-current="page" to="/Health">Health</Link></li>
              <li className="nav-item"><Link className="nav-link" aria-current="page" to="/Science">Science</Link></li>
              <li className="nav-item"><Link className="nav-link" aria-current="page" to="/Sports">Sports</Link></li>
              <li className="nav-item"><Link className="nav-link" aria-current="page" to="/Technology">Technology</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
