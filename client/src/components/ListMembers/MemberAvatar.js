import React from "react";

const MemberAvatar = (props) => {
  return (
    <div className="member__avatar">
      <img src={props.user.image} alt="avatar" />
    </div>
  );
};

export default MemberAvatar;
