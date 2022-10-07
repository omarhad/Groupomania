import React from "react";
import { useSelector } from "react-redux";
import MemberAvatar from "./MemberAvatar";
import MemberInfo from "./MemberInfo";

const Member = () => {

  const usersData = useSelector((state) => state.usersReducer);

  return (
    <>
      {usersData.map((user) => {
        for (let i = 0; i < usersData.length; i++) {
          return (
            <li key={user._id}>
              <div className="member">
                <MemberAvatar user={user} />
                <MemberInfo user={user} />
              </div>
            </li>
          );
        }
      })}
    </>
  );
};

export default Member;
