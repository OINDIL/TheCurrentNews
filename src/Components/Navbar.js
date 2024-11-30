import React, { Component } from "react";
import { Link } from "react-router-dom";
export class Navbar extends Component {

  render() {
    // console.log(this.props.mode)
    return (
      <nav className={`navbar fixed-top navbar-expand-lg bg-${this.props.mode}`}>
        <div className="container-fluid">
          <a
            className={`navbar-brand text-${this.props.mode === 'light' ? 'dark' : 'light'}`}
            style={{ fontFamily: "abril fatface" }}
            href="/"
          >
            The <span style={{ color: 'green' }}>Current</span> Times
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
              <li className="nav-item"><Link className={`nav-link text-${this.props.mode === 'light' ? 'dark' : 'light'}`} aria-current="page" to="/general">Home</Link></li>
              <li className="nav-item"><Link className={`nav-link text-${this.props.mode === 'light' ? 'dark' : 'light'}`} aria-current="page" to="/Business">Business</Link></li>
              <li className="nav-item"><Link className={`nav-link text-${this.props.mode === 'light' ? 'dark' : 'light'}`} aria-current="page" to="/Entertainment">Entertainment</Link></li>
              <li className="nav-item"><Link className={`nav-link text-${this.props.mode === 'light' ? 'dark' : 'light'}`} aria-current="page" to="/Health">Health</Link></li>
              <li className="nav-item"><Link className={`nav-link text-${this.props.mode === 'light' ? 'dark' : 'light'}`} aria-current="page" to="/Science">Science</Link></li>
              <li className="nav-item"><Link className={`nav-link text-${this.props.mode === 'light' ? 'dark' : 'light'}`} aria-current="page" to="/Sports">Sports</Link></li>
              <li className="nav-item"><Link className={`nav-link text-${this.props.mode === 'light' ? 'dark' : 'light'}`} aria-current="page" to="/Technology">Technology</Link></li>
            </ul>
            <div className={`form-check-reverse form-switch text-${this.props.mode === 'light' ? 'dark' : 'light'}`} >
              <input onClick={this.props.setMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{ fontFamily: 'fira code' }}>DarkMode</label>
            </div>
          </div>
        </div>

      </nav>
    );
  }
}

export default Navbar;
