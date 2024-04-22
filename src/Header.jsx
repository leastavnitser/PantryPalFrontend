export function Header() {
  return (
    <header>
      {/* <nav>
        <a href="#">Home</a> | <a href="">SignUp</a> |<a href="#">LogIn</a> |<a href="#">MyPantry</a> |{" "}
        <a href="#">MyRecipes</a>
      </nav> */}
      <div className="banner">
        <nav className="navbar navbar-expand-lg  navbar-light ">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              PantryPal
            </a>
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
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="#">
                    SignUp
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#reservations-new">
                    LogIn
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#rooms-index">
                    myPantry
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Login </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#signup">
                    myRecipes
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
