import React from "react";
import { get, remove } from "../services/service";
import profileCSS from "./Profile.css";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [uProfile, setUProfile] = React.useState({});
  const [flag, setFlag] = React.useState(false);
  let navigate = useNavigate();

  const getProfile = async () => {
    let response = await get(`/users/profile`);
    // console.log(response.data);
    setUProfile(response.data);
  };
  React.useEffect(function () {
    getProfile();
  }, []);

  const deleteProfile = async () => {
    let response = await remove(`/users/delete-user/${uProfile._id}`);
    localStorage.clear();
    navigate("/login");
  };
  console.log(uProfile._id);
  return (
    <div className="profilepage">
      <Navbar />
      <div className="profilediv">
        <div className="profileContainer">
          <img src={uProfile.profilePic} alt="profile pic" />
          <h1 style={{ fontSize: "20px" }}>Username: {uProfile.username}</h1>
          <h2 style={{ fontSize: "14px" }}>
            Name: {uProfile.firstName} {uProfile.lastName}
          </h2>

          <h3 style={{ fontSize: "14px" }}>Age: {uProfile.age}</h3>

          <p>
            {" "}
            Delete profile <br></br>
            {flag === false ? (
              <button onClick={() => setFlag(!flag)} className="deleteButton">
                Confirm delete
              </button>
            ) : (
              <button onClick={deleteProfile} className="deleteButton">
                Delete Profile
              </button>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
