import React from "react";
import { get, post, remove } from "../services/service";
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

  // console.log(posts[0]._id);
  React.useEffect(function () {
    getPosts();
  }, []);

  const addLike = async (postId) => {
    let response = await post(`/posts/likes/${postId}`);
  };
  const removeLike = async (postId) => {
    let response = await post(`/posts/remove-like/${postId}`);
  };

  const deletePost = async (postId) => {
    let response = await remove(`/posts/delete-post/${postId}`);
  };
  return (
    <div className="userdashboard">
      {posts &&
        posts.slice(0, 4).map(function (post) {
          return (
            <div className="postbox">
              <p className="userPTag">
                {" "}
                <img
                  src={profilePic}
                  alt="profile pic"
                  className="postprofilepic"
                />
                {username}: {Date(post.createdAt).slice(0, 15)}
                <br></br>Likes: {post.likes.length}
              </p>
              <p className="contentPTag">
                {post.content} <br></br>
              </p>
              <div className="buttons">
                <button
                  className="upvote"
                  onClick={() => {
                    addLike(post._id);
                  }}
                >
                  Upvote
                </button>
                <button
                  className="downvote"
                  onClick={() => {
                    removeLike(post._id);
                  }}
                >
                  Downvote
                </button>
                <button
                  className="delete"
                  onClick={() => {
                    deletePost(post._id);
                  }}
                >
                  Delete
                </button>
              </div>
              {/* <p className="postLikes">Up Votes {post.likes.length}</p> */}
            </div>
          );
        })}
    </div>
  );
};

export default ViewPosts;
