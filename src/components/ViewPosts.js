import React from "react";
import { get, post } from "../services/service";
import Viewpostscss from "./ViewPosts.css";

const ViewPosts = () => {
  const [posts, setPosts] = React.useState([]);
  const username = localStorage.getItem("username");
  const profilePic = localStorage.getItem("profilePic");

  const getPosts = async () => {
    let response = await get("/posts/user-pen");
    console.log(response.data);
    setPosts(response.data);
  };

  React.useEffect(function () {
    getPosts();
  }, []);

  const addLike = async (postId) => {
    let response = await post(`/posts/likes/${postId}`);
  };
  return (
    <div className="userdashboard">
      {posts &&
        posts.slice(0, 3).map(function (post) {
          return (
            <div className="postbox">
              <p>
                {" "}
                <img
                  src={profilePic}
                  alt="profile pic"
                  className="postprofilepic"
                />
                {username} {Date(post.createdAt).slice(0, 15)}
              </p>
              <p>{post.content}</p>

              <p>{post.likes.length}</p>
              <button
                onClick={() => {
                  addLike(post._id);
                }}
              >
                Like
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default ViewPosts;
