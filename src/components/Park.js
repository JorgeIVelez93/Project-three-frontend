import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { post } from "../services/service";
import parkcss from "./Park.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import likeLogo from "../images/icons8-heart-48.png";

const Park = () => {
  const params = useParams();
  const [park, setPark] = React.useState([]);
  const [parkId, setParkId] = React.useState("");
  const [backgroundImg, setbackgroundImg] = React.useState("");
  const [parkName, setparkName] = React.useState("");

  const options = {
    method: "GET",
    url: "https://jonahtaylor-national-park-service-v1.p.rapidapi.com/parks",
    params: { parkCode: `${params.park}`, limit: "467" },
    headers: {
      "X-Api-Key": "Ugag0XoGygR4Ac2YSQIzHwGprPqtVuqT1F2bnxFb",
      "X-RapidAPI-Key": "fc5ddf5126msh1d48379b21e9d23p19d5aajsn82e9df5dbeec",
      "X-RapidAPI-Host": "jonahtaylor-national-park-service-v1.p.rapidapi.com",
    },
  };
  React.useEffect(function () {
    getPark();
  }, []);

  const getPark = async () => {
    let response = await axios.request(options);
    console.log(response.data.data);
    setPark(response.data.data);
  };
  const favorite = async (pickPark) => {
    console.log(pickPark);
    // setParkId(pickPark.parkCode);
    // setbackgroundImg(pickPark.images[0].url);
    // setparkName(pickPark.name);

    let response = await post("/users/fav-park", {
      postId: pickPark.parkCode,
      backgroundImg: pickPark.images[0].url,
      parkName: pickPark.name,
    });
    console.log(response);
  };

  //   console.log(params.park);
  return (
    <div className="favoriteparks">
      <Navbar />
      {park &&
        park.map(function (parkInfo) {
          return (
            <div
              className="singlepark"
              style={{
                backgroundImage: `url(${parkInfo.images[0].url})`,
                backgroundSize: "cover",
                backgroundPosition: "0",
              }}
            >
              <h1>{parkInfo.fullName}</h1>;
              <h2>
                {parkInfo.addresses[0].city}, {parkInfo.addresses[0].stateCode}
              </h2>
              <p>{parkInfo.description}</p>
              <p>{parkInfo.weatherInfo}</p>;
              <img
                src={likeLogo}
                alt="favorites"
                onClick={() => favorite(park[0])}
              />
              {/* <button type="button" onClick={() => favorite(park[0])}>
                Favorite
              </button> */}
              ;
            </div>
          );
        })}
      <Footer />
    </div>
  );
};

export default Park;
