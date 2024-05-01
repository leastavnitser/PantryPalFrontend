import { Link } from "react-router-dom";
export function Header() {
  return (
    <header>
      <div className="banner">
        <nav className="navbar">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              PantryPal
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              {localStorage.jwt === undefined ? (
                <div>
                  <Link className="nav-link " aria-current="page" to="/signup">
                    SignUp
                  </Link>

                  <Link className="nav-link" to="/login">
                    LogIn
                  </Link>
                </div>
              ) : (
                <Link className="nav-link" to="/logout">
                  LogOut
                </Link>
              )}

              <Link className="nav-link" to="/pantry">
                myPantry
              </Link>

              <Link className="nav-link" to="/signup">
                myRecipes
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
