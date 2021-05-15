import { useState } from "react";

import "./Signup.scss";
import { Link } from "react-router-dom";

const Signup = () => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [CnPassword, setCnPassword] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="signup">
      <div className="signup_left">
        <Link to={"/"} className="signup_left-goback">
          ←
        </Link>

        <div className="signup-main">
          <form className="signup-form" onSubmit={(e) => onSubmit(e)}>
            <div className="signup-form-title">Create an Account</div>
            <label htmlFor="first-name" className="signup-form-label">
              First Name
            </label>
            <input
              id="first-name"
              type="text"
              className="signup-form-input"
              value={FirstName}
              autoComplete="off"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <label htmlFor="last-name" className="signup-form-label">
              Last Name
            </label>
            <input
              id="last-name"
              type="text"
              className="signup-form-input"
              value={LastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              autoComplete="off"
            />
            <label htmlFor="email" className="signup-form-label">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="signup-form-input"
              value={Email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              autoComplete="off"
            />
            <label htmlFor="password" className="signup-form-label">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="signup-form-input"
              value={Password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              autoComplete="off"
            />
            <label htmlFor="confirm-pass" className="signup-form-label">
              Confirm Password
            </label>
            <input
              id="confirm-pass"
              type="password"
              className="signup-form-input"
              value={CnPassword}
              onChange={(e) => {
                setCnPassword(e.target.value);
              }}
              autoComplete="off"
            />
            <button className="signup-form-btn">Sign Up</button>
          </form>
          <div className="signup-already">
            If already a user, then{" "}
            <Link className="signup-already-link" to={"/login"}>
              Login here! →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;
