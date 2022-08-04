import React from "react";
import { get } from "../services/service";
import profileCSS from "./Profile.css";
import Navbar from "./Navbar";

const Profile = () => {
  const [uProfile, setUProfile] = React.useState({});
  const [flag, setFlag] = React.useState(false);

  const getProfile = async () => {
    let response = await get(`/users/profile`);
    // console.log(response.data);
    setUProfile(response.data);
  };
  React.useEffect(function () {
    getProfile();
  }, []);

  const deleteProfile = async () => {
    let response = await get(`/delete-user/${uProfile}`);
  };
  console.log(flag);
  return (
    <div className="profilepage">
      <Navbar />
      <div className="profilediv">
        <div className="profileContainer">
          <img src={uProfile.profilePic} alt="profile pic" />
          <h1>{uProfile.username}</h1>
          <h2>{uProfile.firstName}</h2>
          <h2>{uProfile.lastName}</h2>
          <h3>{uProfile.age}</h3>

          {flag === false ? (
            <button onClick={() => setFlag(!flag)}>Confirm delete</button>
          ) : (
            <button onClick={deleteProfile}>Delete Profile</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
