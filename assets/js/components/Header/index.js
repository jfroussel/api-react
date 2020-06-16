import React from "react";
import { Link } from "react-router-dom";
const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        REACTLAND
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/customers">
              Clients <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/invoices">
              Factures
            </Link>
          </li>
        </ul>
        <button className="btn btn-primary my-2 my-sm-0" type="submit">
          Se connecter
        </button>
      </div>
    </nav>
  );
};

export default Header;
<h1>Header</h1>;
