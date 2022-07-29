import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { post } from "../services/service";
import signupcss from "./Signup.css";

const Signup = () => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [age, setAge] = React.useState(0);
  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [password2, setPassword2] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [imgUrl, setImgUrl] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const createUser = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setStatus("Please fill out username and password");
    }
    if (password !== password2) {
      setStatus("Passwords do not match.");
    } else {
      setFirstName("");
      setLastName("");
      setAge("");
      setEmail("");
      setUsername("");
      setPassword("");
      setStatus("Login");
      let response = await post("/users/signup", {
        firstName: firstName,
        lastName: lastName,
        username: username,
        password: password,
        email: email,
        age: age,
        profilePic: imgUrl,
      });
      console.log(response.data);
    }
  };
  const handleFileUpload = async (e) => {
    setLoading(true);
    const uploadData = new FormData();
    uploadData.append("imageUrl", e.target.files[0]);
    let response = await post("/users/add-picture", uploadData);
    console.log(response.data);
    setImgUrl(response.data.path);
    setLoading(false);
  };

  return (
    <div className="signupcss">
      <form onSubmit={createUser} className="signupform">
        <img
          src={imgUrl}
          alt="profile"
          style={{ width: "100", height: "100" }}
        />

        <div className="nameinput">
          <div className="nameinputbox">
            <label>First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="nameinputbox">
            <label>Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className="ageemail">
          <div className="ageemailbox">
            <label>Age</label>
            <input
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="ageemailbox">
            <label>Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <div className="passwordoconfirm">
          <div className="passwordoconfirmbox">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="passwordoconfirmbox">
            <label>Confirm Password</label>
            <input
              type="password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />
          </div>
        </div>
        <div className="profileimg">
          <label>Profile Image</label>
          <input
            type="file"
            onChange={handleFileUpload}
            placeholder="Upload File"
          />
        </div>
        <br></br>
        <div className="">
          <button className="submitbutton" type="submit" disabled={loading}>
            Create Account
          </button>
        </div>
        <h3>{status}</h3>
      </form>
    </div>
  );
};

export default Signup;
