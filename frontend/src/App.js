import { React, useState, useEffect, useContext, createContext } from "react";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateEmail,
  updatePassword,
  updatePhoneNumber,
  updateProfile,
} from "firebase/auth";

import { Routes, Route, useNavigate } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

import SignUp from "./components/signUp";
import SignIn from "./components/signIn";
import Calender from "./components/calender";
import Dashboard from "./components/dashboard";
import Profile from "./components/profile";

export const UserContext = createContext();

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const navigate = useNavigate();
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  async function signIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch(() => {});
  }

  function changeEmail(email) {
    return updateEmail(auth.currentUser, email);
  }

  function changePassword(password) {
    return updatePassword(auth.currentUser, password);
  }

  function changeProfile(profile) {
    return updateProfile(auth.currentUser, profile);
  }

  // Automatically updates user state.
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log(user);
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/home">
          Home
        </a>
        {currentUser ? (
          <button type="submit" class="btn btn-primary" onClick={logout}>
            Sign Out
          </button>
        ) : (
          <a href="/" class="btn btn-primary" onClick={logout}>
            Login Page
          </a>
        )}
        {currentUser ? (
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/calender">
                  Calender
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/profile">
                  Profile
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <></>
        )}
      </nav>
      <UserContext.Provider
        value={{
          auth,
          currentUser,
          signIn,
          signUp,
          changeEmail,
          changePassword,
          changeProfile,
        }}
      >
        <Routes>
          <Route path="/register" element={<SignUp />}></Route>
          <Route path="/" element={<SignIn />}></Route>
          <Route path="/calender" element={<Calender />}></Route>
          <Route path="/home" element={<Dashboard />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
