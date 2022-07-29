import React from "react";
import { get, post } from "../services/service";
import Viewpostscss from "./ViewPosts.css";

const ViewPosts = () => {
  const [posts, setPosts] = React.useState([]);

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
    <div>
      {posts &&
        posts.map(function (post) {
          return (
            <div className="postbox">
              <p>{post.content}</p>
              <button
                onClick={() => {
                  addLike(post._id);
                }}
              >
                Like
              </button>
              <p>{post.likes.length}</p>
              <p>{Date(post.createdAt).slice(0, 15)}</p>
            </div>
          );
        })}
    </div>
  );
};

export default ViewPosts;
