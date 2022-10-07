import React from "react";

const NewPost = () => {
  return (
    <div className="newPost">
      <form action="" className="newPost--form">
        <textarea
          className="newPost--form__content"
          name="new-post"
          id="new-post"
          placeholder="What's on your mind ?"
        ></textarea>
      </form>
      <button className="newPost__button">Submit</button>
    </div>
  );
};

export default NewPost;
