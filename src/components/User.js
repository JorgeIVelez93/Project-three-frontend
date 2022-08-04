import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import Usercss from "./Users.css";
import CreatePost from "./CreatePost";
import ViewPosts from "./ViewPosts";
import Favorites from "./Favorites";
import Footer from "./Footer";

// key: Ugag0XoGygR4Ac2YSQIzHwGprPqtVuqT1F2bnxFb

const User = () => {
  const [events, setEvents] = React.useState({});
  const [comment, setComment] = React.useState("");
  const params = useParams();

  const options = {
    method: "GET",
    url: "https://jonahtaylor-national-park-service-v1.p.rapidapi.com/newsreleases",
    headers: {
      "X-Api-Key": "Ugag0XoGygR4Ac2YSQIzHwGprPqtVuqT1F2bnxFb",
      "X-RapidAPI-Key": "fc5ddf5126msh1d48379b21e9d23p19d5aajsn82e9df5dbeec",
      "X-RapidAPI-Host": "jonahtaylor-national-park-service-v1.p.rapidapi.com",
    },
  };
  React.useEffect(function () {
    getEvents();
  }, []);

  const getEvents = async () => {
    let response = await axios.request(options);
    console.log(response.data.data);
    setEvents(response.data);
  };

  return (
    <div className="usercssbody">
      <Navbar />
      <div className="userpage">
        <div className="postsection">
          <h2>Personal Pens</h2>

          <CreatePost />

          <ViewPosts />
        </div>
        <div className="favoritessection">
          <h2>Favorite Parks</h2>
          <Favorites />
        </div>
        <div className="newssection">
          <h2>News</h2>
          {events.data &&
            events.data.slice(0, 5).map(function (news) {
              return (
                <div
                  className="news"
                  style={{
                    backgroundImage: `url(${news.image.url})`,
                    backgroundSize: "cover",
                    position: "0",
                  }}
                >
                  <a
                    style={{
                      textDecoration: "none",
                      color: "blue",
                      textAlign: "center",
                    }}
                    href={news.url}
                  >
                    <p>{news.title}</p>
                  </a>
                </div>
              );
            })}
        </div>
      </div>
      <div className="footerUser">
        <Footer />
      </div>
    </div>
  );
};

export default User;
