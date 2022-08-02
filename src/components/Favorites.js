import React from "react";
import axios from "axios";
import { get } from "../services/service";
import favoritescss from "./Favorites.css";
import { Link } from "react-router-dom";

const Favorites = () => {
  const [favParks, setFavParks] = React.useState([]);

  const getFavs = async () => {
    let response = await get("/users/all-parks");
    console.log(response.data);
    setFavParks(response.data);
  };

  React.useEffect(function () {
    getFavs();
  }, []);

  return (
    <div>
      {favParks &&
        favParks.map(function (fav) {
          return (
            <div
              className="favoritesdiv"
              style={{
                backgroundImage: `url(${fav.backgroundImg})`,
                backgroundSize: "cover",
                position: "0,0",
              }}
            >
              <Link to="">{fav.parkName}</Link>
            </div>
          );
        })}
    </div>
  );
};

export default Favorites;
