export function Header() {
  return (
    // <header>
    //   <nav>
    //     <a href="#">Home</a> | <a href="">SignUp</a> |<a href="#">LogIn</a> |<a href="#">MyPantry</a> |{" "}
    //     <a href="#">MyRecipes</a>
    //   </nav>
    // </header>
    <div className="banner">
      <nav className="navbar navbar-expand-lg  navbar-dark ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            AirBNB
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
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#reservations-new">
                  Book a Room
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#rooms-index">
                  All Rooms
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Login </a>
              </li>
              <li className="nav-item">
                <Link to="/signup">Signup</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
