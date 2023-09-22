import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
function SignIn(props) {
  const passwordRef = useRef();
  const emailRef = useRef();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signIn } = useContext(UserContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (emailRef.current.value == "") {
      alert("You must register an email.");
    } else if (passwordRef.current.value == "") {
      alert("You must use a password.");
    } else {
      try {
        signIn(emailRef.current.value, passwordRef.current.value)
          .then((promiseFulfilled) => {
            alert("Successfully Logged In!");
            navigate("/home");
          })
          .catch(() => {
            alert("Authentication Failed, Check Your Credentials!");
          });
      } catch (e) {
        console.log(e);
        alert("Failed to login.");
      }
    }
  }

  return (
    <div class="container rounded bg-white mt-5">
      <form>
        <div className="form-outline mb-4">
          <input
            ref={emailRef}
            type="email"
            id="form2Example1"
            className="form-control"
          />
          <label className="form-label" htmlFor="form2Example1">
            Email address
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            ref={passwordRef}
            type="password"
            id="form2Example2"
            className="form-control"
          />
          <label className="form-label" htmlFor="form2Example2">
            Password
          </label>
        </div>

        <button
          type="button"
          className="btn btn-primary btn-block mb-4"
          onClick={handleSubmit}
        >
          Sign in
        </button>

        <div className="text-center">
          <p>
            Not a member? <a href="/register">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
