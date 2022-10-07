import React, { useState, useEffect, useRef} from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateFirstName } from "../../actions/user.actions";

const UploadFirstName = () => {
  const userData = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState(userData.firstName);
  const [updateFormName, setUpdateFormName] = useState(false);

  const handelUpdateName = (e) => {
    e.preventDefault();
    dispatch(updateFirstName(userData._id, firstName));
    setUpdateFormName(false);
  };

  useEffect (() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);

  const refOne = useRef(null);
  const refTwo = useRef(null);

  const handleClickOutside = (event) => {
    if (refOne.current && !refOne.current.contains(event.target)) {
      if (refTwo.current && !refTwo.current.contains(event.target)) {
        setUpdateFormName(false);
      }
    }
  };

  return (
    <>
      <form onSubmit={handelUpdateName} className="uploadInfo__name">
        {updateFormName === false && (
          <div>
            <span>First name : </span>
            <p
              className="beforeInput"
              onClick={() => setUpdateFormName(!updateFormName)}
            >
              {userData.firstName}
            </p>
          </div>
        )}
        {updateFormName && (
          <>
            <div>
              <span>First name : </span>
              <input
                className="input"
                type="text"
                defaultValue={userData.firstName}
                onChange={(e) => setFirstName(e.target.value)}
                ref={refOne}
              />
            </div>
          </>
        )}
      </form>
      {updateFormName && (
        <button ref={refTwo} className="button buttonUpload" onClick={handelUpdateName}>
          Validate
        </button>
      )}
    </>
  );
};

export default UploadFirstName;
