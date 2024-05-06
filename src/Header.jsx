import { Link } from "react-router-dom";
export function Header() {
  return (
    <header>
      <div className="banner">
        <nav className="navbar">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/home">
              <h3> PantryPal</h3>
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
                  <div>
                    <Link className="nav-link " aria-current="page" to="/signup">
                      <h5>SignUp</h5>
                    </Link>
                  </div>
                  <div>
                    <Link className="nav-link" to="/login">
                      <h5>LogIn</h5>
                    </Link>
                  </div>
                </div>
              ) : (
                <div>
                  <Link className="nav-link" to="/logout">
                    <h5> LogOut</h5>
                  </Link>
                </div>
              )}
              <div>
                <Link className="nav-link" to="/pantry">
                  <h5>myPantry</h5>
                </Link>
              </div>
              <div>
                <Link className="nav-link" to="/">
                  <h5> Ingredients</h5>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
