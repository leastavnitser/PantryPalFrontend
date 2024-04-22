import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="signup">
      <h3>Signup</h3>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div className="container bucket">
          <div className="row g-3">
            <div className="col">
              Name: <input name="name" type="text" className="form-control" />
            </div>
          </div>
          <div className="col">
            Email: <input name="email" type="email" className="form-control" />
          </div>
          <div className="col">
            Password: <input name="password" type="password" className="form-control" />
          </div>
          <div className="col">
            Password confirmation: <input name="password_confirmation" type="password" className="form-control" />
          </div>
          <button type="submit" className="btn btn-outline-danger">
            Signup
          </button>
        </div>
      </form>
    </div>
  );
}
