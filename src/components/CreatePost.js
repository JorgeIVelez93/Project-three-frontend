import React from "react";
import axios from "axios";
import { post } from "../services/service";
import CreatePostcss from "./CreatePost.css";

const CreatePost = () => {
  const [content, setContent] = React.useState("");
  const [status, setStatus] = React.useState("");

  const postContent = async () => {
    if (!content) {
      setStatus("Please enter a comment.");
    } else {
      setContent("");
      let response = await post("/posts/create", {
        content: content,
      });
      console.log(response);
    }
  };
  return (
    <div>
      <form onSubmit={postContent} className="createpost">
        <label></label>
        <textarea
          placeholder="What's on your mind?"
          rows="5"
          columns="50"
          maxlength="240"
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit" className="penbuttom">
          Pen it
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
