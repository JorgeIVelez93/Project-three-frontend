import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import parkscss from "./Parks.css";
import Navbar from "./Navbar";

const Parks = () => {
  const [parks, setParks] = React.useState([]);
  const [allParks, setaAllParks] = React.useState([]);

  const options = {
    method: "GET",
    url: "https://jonahtaylor-national-park-service-v1.p.rapidapi.com/parks",
    params: { limit: "467" },
    headers: {
      "X-Api-Key": process.env.REACT_APP_PARK_API,
      "X-RapidAPI-Key": "fc5ddf5126msh1d48379b21e9d23p19d5aajsn82e9df5dbeec",
      "X-RapidAPI-Host": "jonahtaylor-national-park-service-v1.p.rapidapi.com",
    },
  };

  React.useEffect(function () {
    getParks();
  }, []);

  const getParks = async () => {
    let response = await axios.request(options);

    setParks(response.data.data);
    setaAllParks(response.data.data);
  };

  const filterArrByLetter = (start, end) => {
    let begin = start.charCodeAt(0);
    let finish = end.charCodeAt(0);
    let parkByLetter = [...allParks].filter(function (park) {
      return (
        park.fullName.toLowerCase().charCodeAt(0) >= begin &&
        park.fullName.toLowerCase().charCodeAt(0) <= finish
      );
    });
    let removedParks = parks.filter(function (parkName) {
      return parkName.fullName === parkByLetter;
    });
    setParks(parkByLetter);
  };

  return (
    <div className="parkscssdiv">
      <Navbar />
      <br></br>
      <div className="parklistbuttons">
        <button
          className="parksbutton"
          onClick={(e) => filterArrByLetter("a", "d")}
          value="1"
        >
          A-D
        </button>
        <button
          className="parksbutton"
          onClick={(e) => filterArrByLetter("e", "h")}
          value="2"
        >
          E-H
        </button>
        <button
          className="parksbutton"
          onClick={(e) => filterArrByLetter("i", "l")}
          value="3"
        >
          I-L
        </button>
        <button
          className="parksbutton"
          onClick={(e) => filterArrByLetter("m", "p")}
          value="4"
        >
          M-P
        </button>
        <button
          className="parksbutton"
          onClick={(e) => filterArrByLetter("q", "t")}
          value="5"
        >
          Q-T
        </button>
        <button
          className="parksbutton"
          onClick={(e) => filterArrByLetter("u", "z")}
          value="6"
        >
          U-Z
        </button>
        <button
          className="parksbutton"
          onClick={(e) => filterArrByLetter("a", "z")}
          value="7"
        >
          View All
        </button>
      </div>
      {parks &&
        parks.map(function (park) {
          return (
            <div className="parklistmap">
              <Link to={`/park/${park.parkCode}`} style={{ color: "#F3DEFF" }}>
                <p>{park.fullName}</p>
              </Link>

              <p style={{ color: "#F3DEFF" }}>
                {park.addresses[0].city} {park.addresses[0].stateCode}
              </p>
            </div>
          );
        })}
    </div>
  );
};

export default Parks;
