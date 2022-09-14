import React from "react";
import Header from "../layouts/Header";
import { useDispatch } from "react-redux";
import { getUser } from "../actions/user.actions";

const Home = () => {
  const userData = JSON.parse(window.localStorage.getItem("User"));
  const dispatch = useDispatch();

  if (userData) {
    dispatch(getUser(userData.userId));
  }

  return (
    <div className="main">
      {userData ? (
        <>
          <Header className="primaryHeader" navBar="true"/>
        </>
      ) : (
        (window.location.href = "/login")
      )}
    </div>
  );
};

export default Home;
