import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import logincss from "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [status, setStatus] = React.useState("");
  let navigate = useNavigate();

  const userLogin = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setStatus("Please fill out username and password");
    } else {
      try {
        let response = await axios.post("http://localhost:4000/users/login", {
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
        setStatus("Please fill out username and password");
      }
    }
  };
  // function signupForm() {

  // }

  return (
    <div className="logincss">
      <Navbar />
      <form onSubmit={userLogin} className="login">
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
        <button type="submit">
          {/* <Link to={`/user/${username}`}>Login</Link> */}Login
        </button>
      </form>
      <h1> {status} </h1>
    </div>
  );
};

export default Login;
