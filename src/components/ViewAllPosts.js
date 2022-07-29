import React from "react";
import { get } from "../services/service";
import { post } from "../services/service";

const ViewAllPosts = () => {
  const [posts, setPosts] = React.useState([]);

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
  console.log(posts);
  return (
    <div>
      {posts.length > 0 &&
        posts.map(function (post) {
          return (
            <div>
              <p>{post.content}</p>
              <p>{post.createdAt}</p>
              <p>{post.likes.length}</p>
              <p>{post.creatorId.username}</p>
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

export default ViewAllPosts;
