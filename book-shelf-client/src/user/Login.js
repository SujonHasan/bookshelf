import React from "react";
import { Link } from "react-router-dom";

function Login() {

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
        email: e.target.email.value,
        password: e.target.password.value
    }
    // console.log(e.target.email.value);
    console.log(JSON.stringify(user));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" mx-auto text-center"
      style={{ width: "300px" }}
    >
      <div data-mdb-input-init className="form-outline mb-4">
        <label className="form-label">Email address</label>
        <input
          type="email"
          name="email"
          placeholder="jon@gmail.com"
          className="form-control"
        />
      </div>

      <div data-mdb-input-init className="form-outline mb-4">
        <label className="form-label">Password</label>
        <input
          type="password"
          name="password"
          placeholder="******"
          className="form-control"
        />
      </div>

      <div className="row mb-4">
        <div className="col">
          <a href="#!">Forgot password?</a>
        </div>
      </div>

      <div>
        <button type="submit" className="btn btn-primary px-5">
          Sign in
        </button>
        <p>
          {" "}
          <Link to="/registration">Create new Account</Link>{" "}
        </p>
      </div>
    </form>
  );
}

export default Login;
