import React from 'react';
import { dateParser, isEmpty } from '../../Utils';

const CardHeader = ({usersData, post}) => {
    return (
        <div className="posts__card__header">
              <div className="posts__card__header__user">
                <img
                  src={
                    !isEmpty(usersData[0])
                      ? usersData
                          .map((user) => {
                            if (user._id === post.posterId) return user.image;
                          })
                          .join("")
                      : undefined
                  }
                  alt="user-pic"
                />
                <h3>
                  {!isEmpty(usersData[0])
                    ? usersData
                        .map((user) => {
                          if (user._id === post.posterId)
                            return user.lastName + " " + user.firstName;
                        })
                        .join("")
                    : undefined}
                </h3>
              </div>
              <div className="posts__card__header__date">
                <span>{dateParser(post.createdAt)}</span>
              </div>
            </div>
    );
};

export default CardHeader;