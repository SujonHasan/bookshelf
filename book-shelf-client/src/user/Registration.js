import { Link } from "react-router-dom";

const Registration = () => {

  const handleSubmit = (e) =>{

    e.preventDefault();

    const target = e.target;

    const user = {
      firstName: target.firstName.value,
      lastName: target.lastName.value,
      email: target.email.value,
      password: target.password.value,
      confirmPassword: target.confirmPassword.value
    }

    console.log(JSON.stringify(user));
  }

  
  return (
    <form onSubmit={handleSubmit}  className=" mx-auto text-center" style={{ width: "300px" }}>
      <div className="form-outline mb-4">
        <label className="form-label text-bold">firstName</label>
        <input
          type="text"
          name="firstName"
          placeholder="firstName"
          className="form-control"
        />
      </div>
      <div className="form-outline mb-4">
        <label className="form-label">lastName</label>
        <input
          type="text"
          name="lastName"
          placeholder="lastName"
          className="form-control"
        />
      </div>
      <div data-mdb-input-init className="form-outline mb-4">

      <label className="form-label">
          Email address
        </label>
        <input
          type="email"
          name="email"
          placeholder="jon@gmail.com"
          className="form-control"
        />
        
      </div>

      <div data-mdb-input-init className="form-outline mb-4">
      <label className="form-label">
          Password
        </label>
        <input
          type="password"
          name="password"
          placeholder=""
          className="form-control"
        />
        
      </div>

      <div data-mdb-input-init className="form-outline mb-4">
      <label className="form-label">
          Confirm Password
        </label>
        <input
          type="password"
          name="confirmPassword"
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
          Sign Up
        </button>

        <p>
          Already Have an account <Link to="/login">Please Login</Link>{" "}
        </p>
      </div>
    </form>
  );
};

export default Registration;
