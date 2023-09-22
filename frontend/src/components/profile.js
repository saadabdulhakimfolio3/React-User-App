import { useContext, useRef, useState } from "react";
import { UserContext } from "../App";

export default function Profile() {
  const passwordRef = useRef();
  const emailRef = useRef();
  const phoneNumberRef = useRef();
  const nameRef = useRef();
  const { auth, user, changeEmail, changePassword, changeProfile } =
    useContext(UserContext);

  function handleEmailUpdate(e) {
    e.preventDefault();
    try {
      changeEmail(emailRef.current.value)
        .then(() => {
          alert("Email Updated!");
        })
        .catch(() => {
          alert("Email Could Not Be Verified!");
        });
    } catch (e) {
      alert("Try Again Later!");
    }
  }

  function handlePasswordUpdate(e) {
    e.preventDefault();
    try {
      changePassword(passwordRef.current.value)
        .then(() => {
          alert("Password Changed!");
        })
        .catch(() => {
          alert("Password Should Have Atleast 6 Characters!");
        });
    } catch (e) {
      alert("Try Again Later!");
    }
  }

  function handleNameUpdate(e) {
    e.preventDefault();
    try {
      changeProfile({ displayName: nameRef.current.value })
        .then(() => {
          alert("Name Changed!");
        })
        .catch((e) => {
          console.log(e);
          alert("Name Update Failed!");
        });
    } catch (e) {
      alert("Try Again Later!");
    }
  }

  return (
    <div class="container rounded bg-white mt-5">
      <div class="row">
        <div class="col-md-4 border-right">
          <div class="d-flex flex-column align-items-center text-center p-3 py-5">
            <span class="text-black-50">Name: </span>
            <span class="text-black-50">Email: </span>
          </div>
        </div>
        <div class="col-md-8">
          <div class="p-3 py-5">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h6 class="text-right">Edit Profile</h6>
            </div>
            <div class="row mt-2">
              <div class="col-md-6">
                <input
                  type="text"
                  class="form-control"
                  placeholder="New Name"
                  ref={nameRef}
                />
              </div>
              <div class="col-md-6">
                <button
                  class="btn btn-primary profile-button"
                  type="submit"
                  onClick={handleNameUpdate}
                >
                  Update
                </button>
              </div>
            </div>{" "}
            <div class="row mt-3">
              <div class="col-md-6">
                <input
                  ref={emailRef}
                  type="email"
                  class="form-control"
                  placeholder="New Email"
                />
              </div>
              <div class="col-md-6">
                <button
                  class="btn btn-primary profile-button"
                  type="submit"
                  onClick={handleEmailUpdate}
                >
                  Update
                </button>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-6">
                <input
                  ref={passwordRef}
                  type="password"
                  class="form-control"
                  placeholder="New Password"
                />
              </div>
              <div class="col-md-6">
                <button
                  class="btn btn-primary profile-button"
                  type="submit"
                  onClick={handlePasswordUpdate}
                >
                  Update
                </button>
              </div>
            </div>
            <div class="mt-5 text-right"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
