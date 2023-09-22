import React, { useContext, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Alert } from "bootstrap";
import { UserContext } from "../App";
export default function SignUp(props) {
  const passwordRef = useRef();
  const emailRef = useRef();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signUp } = useContext(UserContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (emailRef.current.value == "") {
      alert("You must register an email.");
    } else if (passwordRef.current.value == "") {
      alert("You must use a password.");
    } else {
      try {
        signUp(emailRef.current.value, passwordRef.current.value)
          .then((promiseFulfilled) => {
            alert("Account has been created!");
            navigate("/");
          })
          .catch(() => {
            alert("Account already exists!");
          });
      } catch (e) {
        console.log(e);
        alert("Failed to create an account, check your network connection!");
      }
    }
  }

  return (
    <div class="container rounded bg-white mt-5">
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            ref={emailRef}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            autoComplete="off"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            ref={passwordRef}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            maxLength={10}
            minLength={6}
            autoComplete="off"
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Register
        </button>

        <div class="mt-5 text-right"></div>
      </form>
    </div>
  );
}
