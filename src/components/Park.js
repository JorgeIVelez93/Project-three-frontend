import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { post } from "../services/service";
import parkcss from "./Park.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import likeLogo from "../images/icons8-heart-48.png";
import dislikelogo from "../images/icons8-remove-30.png";

const Park = () => {
  const params = useParams();
  const [park, setPark] = React.useState([]);
  const [parkId, setParkId] = React.useState("");
  const [backgroundImg, setbackgroundImg] = React.useState("");
  const [parkName, setparkName] = React.useState("");
  const [flag, setFlag] = React.useState(true);

  const options = {
    method: "GET",
    url: "https://jonahtaylor-national-park-service-v1.p.rapidapi.com/parks",
    params: { parkCode: `${params.park}`, limit: "467" },
    headers: {
      "X-Api-Key": process.env.REACT_APP_PARK_API,
      "X-RapidAPI-Key": "fc5ddf5126msh1d48379b21e9d23p19d5aajsn82e9df5dbeec",
      "X-RapidAPI-Host": "jonahtaylor-national-park-service-v1.p.rapidapi.com",
    },
  };
  React.useEffect(function () {
    getPark();
  }, []);

  const getPark = async () => {
    let response = await axios.request(options);
    // console.log(response.data.data);
    setPark(response.data.data);
  };
  const favorite = async (pickPark) => {
    let response = await post("/users/fav-park", {
      parkCode: pickPark.parkCode,
      backgroundImg: pickPark.images[0].url,
      parkName: pickPark.name,
    });
    setFlag(!flag);
    // console.log(response);
  };
  console.log(park);
  const removeFavorite = async (pickPark) => {
    let response = await post(`/users/remove-park/${pickPark.parkCode}`);
    setFlag(!flag);
    console.log("pick", pickPark);
  };
  // console.log(park[0].images[0].url);
  return (
    <div className="parkscontainer">
      <Navbar />
      <div className="favoriteparks">
        <div
          className="viewParkBackground"
          style={{
            backgroundImage: `url(${park[0]?.images[0]?.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        {park &&
          park.map(function (parkInfo) {
            return (
              <div className="singlepark">
                <h1>
                  {parkInfo.fullName},<br></br> {parkInfo.addresses[0].city},{" "}
                  {parkInfo.addresses[0].stateCode}
                </h1>

                <p>{parkInfo.description}</p>
                <h2>How's the weather?</h2>
                <p>{parkInfo.weatherInfo}</p>
                <h2>Visit</h2>
                <p>{parkInfo.operatingHours[0].description}</p>
                {flag === true && (
                  <button
                    className="favorite"
                    onClick={() => favorite(parkInfo)}
                  >
                    Favorite
                  </button>
                )}
                {flag === false && (
                  <button
                    className="favorite"
                    onClick={() => removeFavorite(parkInfo)}
                  >
                    Unfavorite
                  </button>
                )}
              </div>
            );
          })}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Park;
