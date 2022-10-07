import React from "react";
import ListMembers from "../components/ListMembers";
import Header from "../layouts/Header";

const Members = () => {
  return (
    <div className="members">
      <Header className="primaryHeader" navBar="true" />
      <div className="members__container">
        <ListMembers />
      </div>
    </div>
  );
};

export default Members;
