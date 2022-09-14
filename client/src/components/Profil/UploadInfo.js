import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateBio, updateLastName,  updateFirstName} from "../../actions/user.actions";

const UploadInfo = () => {
  const userData = useSelector((state) => state.userReducer);
  const [bio, setBio] = useState(userData.bio);
  const [firstName, setFirstName] = useState(userData.firstName);
  const [lastName, setLastName] = useState(userData.lastName);
  const [updateFormBio, setUpdateFormBio] = useState(false);
  const [updateFormName, setUpdateFormName] = useState(false);
  const dispatch = useDispatch();

  const handelUpdateBio = () => {
    dispatch(updateBio(userData._id, bio));
    setUpdateFormBio(false);
  };
  const handelUpdateName = () => {
    dispatch(updateLastName(userData._id, lastName));
    dispatch(updateFirstName(userData._id, firstName));
    setUpdateFormName(false);
  };

  const handelInfo = (e) => {
    e.preventDefault();
  };

  return (
    <form action="" onSubmit={handelInfo} className="uploadInfo">
      <div className="uploadInfo__name">
        {updateFormName === false && (
          <>
            <span onClick={() => setUpdateFormName(!updateFormName)}>
              {userData.firstName}
            </span>
            {" "}
            <span onClick={() => setUpdateFormName(!updateFormName)}>
              {userData.lastName}
            </span>
          </>
        )}
        {updateFormName && (
          <>
            <input
              type="text"
              defaultValue={userData.firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              defaultValue={userData.lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <button onClick={handelUpdateName}>Valider</button>
          </>
        )}
      </div>
      <div className="uploadInfo__bio">
        <h3>Bio</h3>
        {updateFormBio === false && (
          <>
            <p onClick={() => setUpdateFormBio(!updateFormBio)}>{userData.bio}</p>
            <button onClick={() => setUpdateFormBio(!updateFormBio)}>
              Modifier la bio
            </button>
          </>
        )}
        {updateFormBio && (
          <>
            <textarea
              type="text"
              defaultValue={userData.bio}
              onChange={(e) => setBio(e.target.value)}
            ></textarea>
            <button onClick={handelUpdateBio}>Valider la modification</button>
          </>
        )}
      </div>
    </form>
  );
};

export default UploadInfo;
