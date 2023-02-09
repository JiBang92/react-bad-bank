import { Link } from "react-router-dom";
import bankIcon from "../icons/bank-icon.png";
import Home from "./Home";
import Account from "./Account";
import AllData from "./AllData";

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <img src={bankIcon} alt="Bank Icon" width="70px" />
          <h1 className="title">Bad Bank</h1>
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
              <li className="nav-item">
                <Link className="nav-item nav-home" to="/" element={Home}>
                  <button className="btn btn-background-slide">Home</button>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-item" to="/Account/" element={Account}>
                  <button className="btn btn-background-slide">
                    Login / Create Account
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-item" to="/AllData/" element={AllData}>
                  <button className="btn btn-background-slide">All Data</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
