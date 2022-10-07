import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "../../Utils";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";

const Card = ({ post }) => {
  const [isLoading, setIsLoading] = useState(true);
  const usersData = useSelector((state) => state.usersReducer);

  useEffect(() => {
    !isEmpty(usersData[0]) && setIsLoading(false);
  }, [usersData]);

  return (
    <>
      <li className="posts__card" key={post._id}>
        {isLoading ? (
          <i className="fa fa-spinner fa-spin"></i>
        ) : (
          <>
            <CardHeader post={post} usersData={usersData} />
            <CardBody post={post} />
            <CardFooter post={post} usersData={usersData} />
          </>
        )}
      </li>
      <div className="posts__separator"></div>
    </>
  );
};

export default Card;
