import React, { useEffect, useRef, useState  } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateBio } from "../../actions/user.actions";

const UploadBio = () => {
  const userData = useSelector((state) => state.userReducer);
  const [bio, setBio] = useState(userData.bio);
  const [updateFormBio, setUpdateFormBio] = useState(false);
  const dispatch = useDispatch();

  const handelUpdateBio = (e) => {
    e.preventDefault();
    dispatch(updateBio(userData._id, bio));
    setUpdateFormBio(false);
  };

  useEffect (() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);

  const refOne = useRef(null);
  const refTwo = useRef(null);

  const handleClickOutside = (event) => {
    if (refOne.current && !refOne.current.contains(event.target)) {
      if (refTwo.current && !refTwo.current.contains(event.target)) {
        setUpdateFormBio(false);
      }
    }
  };

  return (
    <>
      <from className="uploadInfo__bio">
        {updateFormBio === false && (
          <>
            <div>
              <span>Bio : </span>
              <p
                className="beforeInput"
                onClick={() => setUpdateFormBio(!updateFormBio)}
              >
                {userData.bio}
              </p>
            </div>
          </>
        )}
        {updateFormBio && (
          <>
            <div>
              <span>Bio : </span>
              <textarea
                className="input"
                type="text"
                defaultValue={userData.bio}
                onChange={(e) => setBio(e.target.value)}
                ref={refOne}
              ></textarea>
            </div>
          </>
        )}
      </from>
      {updateFormBio && (
        <button ref={refTwo} className="button buttonUpload" onClick={handelUpdateBio}>
          Validate
        </button>
      )}
    </>
  );
};

export default UploadBio;
