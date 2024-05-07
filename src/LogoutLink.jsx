import axios from "axios";

export function LogoutLink() {
  const handleClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "/";
  };

  return (
    <div className="container bucket">
      <h3>Ready to leave? We hope to see you again soon!</h3>
      <button href="#" onClick={handleClick} className="btn btn-outline-danger">
        Logout
      </button>
    </div>
  );
}
