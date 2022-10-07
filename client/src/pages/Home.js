import React from "react";
import Header from "../layouts/Header";
import { useDispatch } from "react-redux";
import { getUser } from "../actions/user.actions";
import Post from "../components/Post";
import ListMembers from "../components/ListMembers";

const Home = () => {
  const userData = JSON.parse(window.localStorage.getItem("User"));
  const dispatch = useDispatch();

  if (userData) {
    dispatch(getUser(userData.userId));
  }

  return (
    <div className="home">
      <Header className="primaryHeader" navBar="true" />
      <div className="home__container">
        <Post />
        <ListMembers />
      </div>
    </div>
  );
};

export default Home;
