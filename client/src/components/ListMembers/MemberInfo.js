import React, { useState } from "react";
import { birthdayParser, upperCase } from "../../Utils";

const MemberInfo = (props) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="member__info" onClick={handleShow}>
      <h3>{upperCase(props.user.firstName)} {upperCase(props.user.lastName)}</h3>
      <p>Post : {props.user.job}</p>
      {!show && <span>Click to show more</span>}
      {/* info hidden */}
      {show && (
        <>
          <p>Email : {props.user.email}</p>
          <p>Bio : {props.user.bio}</p>
          <p>Birthday : {birthdayParser(props.user.birthday)}</p>
          <p>Registered since  : {birthdayParser(props.user.createdAt)}</p>
        </>
      )}
    </div>
  );
};

export default MemberInfo;
