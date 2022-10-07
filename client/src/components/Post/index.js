import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../actions/post.actions";
import { isEmpty } from "../../Utils";
import Card from "./Card";
import NewPost from "./NewPost";

const Post = () => {
  const [loadPost, setLoadPost] = useState(true);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postReducer);

  useEffect(() => {
    if (loadPost) {
      dispatch(getPosts());
      setLoadPost(false);
    }
  }, [loadPost, dispatch]);

  return (
    <div className="home__container__content">
      <NewPost />
      <ul className="posts">
      {!isEmpty(posts[0]) &&
        posts.map((post) => {
          return <Card post={post} key={post._id} />;
        })}
    </ul>
    </div>
    
  );
};

export default Post;
