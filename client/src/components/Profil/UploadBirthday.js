import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateBirthday } from "../../actions/user.actions";
import { birthdayParser } from "../../Utils";

const UploadBirthday = () => {
  const userData = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const [birthday, setBirthday] = useState(userData.birthday);
  const [updateFormBirthday, setUpdateFormBirthday] = useState(false);

  const handelUpdateBirthday = (e) => {
    e.preventDefault();
    dispatch(updateBirthday(userData._id, birthday));
    setUpdateFormBirthday(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);

  const refOne = useRef(null);
  const refTwo = useRef(null);

  const handleClickOutside = (event) => {
    if (refOne.current && !refOne.current.contains(event.target)) {
      if (refTwo.current && !refTwo.current.contains(event.target)) {
        setUpdateFormBirthday(false);
      }
    }
  };

  return (
    <>
      <form onSubmit={handelUpdateBirthday} className="uploadInfo__birthday">
        {updateFormBirthday === false && (
          <>
            <div>
              <span>Birthday : </span>
              <p
                className="beforeInput"
                onClick={() => setUpdateFormBirthday(!updateFormBirthday)}
              >
                {birthdayParser(userData.birthday)}
              </p>
            </div>
          </>
        )}
        {updateFormBirthday && (
          <>
            <div>
              <span>Birthday : </span>
              <input
                className="input"
                type="date"
                onChange={(e) => setBirthday(e.target.value)}
                ref={refOne}
              />
            </div>
          </>
        )}
      </form>
      {updateFormBirthday && (
        <button ref={refTwo} className="button buttonUpload" onClick={handelUpdateBirthday}>
          Validate
        </button>
      )}
    </>
  );
};

export default UploadBirthday;
