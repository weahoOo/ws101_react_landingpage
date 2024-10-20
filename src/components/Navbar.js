import React from 'react';

function Navbar() {
  return (
    <header className="header_section" style={{ backgroundColor: '#00204a' }}> {/* Adding a background color */}
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container">
          <a className="navbar-brand" href="#Home">
            <span>WebDev</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#Home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#About">About</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
