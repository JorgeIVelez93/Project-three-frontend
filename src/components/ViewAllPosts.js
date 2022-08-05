import React from "react";
import { get } from "../services/service";
import { post } from "../services/service";
import Navbar from "./Navbar";
import viewAllPostsCss from "./ViewAllPosts.css";
import evergreen from "../images/icons8-evergreen-75.png";

const ViewAllPosts = () => {
  const [posts, setPosts] = React.useState([]);
  const username = localStorage.getItem("username");
  const profilePic = localStorage.getItem("profilePic");

  const getPosts = async () => {
    let response = await get("/posts/all");
    console.log(response.data);
    setPosts(response.data);
  };

  React.useEffect(function () {
    getPosts();
  }, []);

  const addLike = async (postId) => {
    let response = await post(`/posts/likes/${postId}`);
  };
  const removeLike = async (postId) => {
    let repsonse = await post(`/posts/remove-like/${postId}`);
  };
  console.log(posts);
  return (
    <div>
      <Navbar />
      <div className="allUserPostsContainer">
        <div className="allPostsBackground"></div>
        <div className="allUserPosts">
          {posts.length > 0 &&
            posts.map(function (post) {
              return (
                <div className="allPostsBox">
                  <p className="allUserPTag">
                    {" "}
                    {post?.creatorId?.profilePic ? (
                      <img
                        src={post?.creatorId?.profilePic}
                        alt="profile pic"
                        className="allPostsProfilePic"
                      />
                    ) : (
                      <img
                        src={evergreen}
                        alt="profile pic"
                        className="allPostsProfilePic"
                      />
                    )}
                    {/* <img
                      src={post?.creatorId?.profilePic}
                      alt="profile pic"
                      className="allPostsProfilePic"
                    /> */}
                    {post?.creatorId?.username}{" "}
                    {Date(post.createdAt).slice(0, 15)} <br></br> Likes{" "}
                    {post.likes.length}
                  </p>
                  <p className="allContentPTag">
                    {post.content} <br></br>
                  </p>

                  {/* <p className="allPostLikes">Likes {post.likes.length}</p> */}
                  <div>
                    <button
                      className="allUpvote"
                      onClick={() => {
                        addLike(post._id);
                      }}
                    >
                      Upvote
                    </button>
                    <button
                      className="allDownvote"
                      onClick={() => {
                        removeLike(post._id);
                      }}
                    >
                      Downvote
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ViewAllPosts;
