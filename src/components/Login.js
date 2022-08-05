import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import logincss from "./Login.css";
import { useNavigate } from "react-router-dom";
import { post } from "../services/service";
import logo from "../images/Park Pals-1.png";

const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [status, setStatus] = React.useState("");
  let navigate = useNavigate();

  const userLogin = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setStatus("Username or password incorrect.");
    } else {
      try {
        let response = await post("/users/login", {
          username: username,
          password: password,
        });
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("username", response.data.username);
        localStorage.setItem("profilePic", response.data.profilePic);
        setStatus(username);
        navigate(`/user/${response.data.username}`);
      } catch (err) {
        console.error(err.message);
        setStatus("Username or password incorrect.");
      }
    }
  };
  // function signupForm() {

  // }

  return (
    <div className="logincss">
      <div className="navcheat">
        <Navbar />
      </div>
      <form onSubmit={userLogin} className="login">
        <img src={logo} alt="company logos" className="loginlogo" />
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>
        <button className="loginButton" type="submit">
          Login
        </button>
        <p> {status} </p>
      </form>
    </div>
  );
};

export default Login;
