import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateJob } from "../../actions/user.actions";

const UploadJob = () => {
  const userData = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const [job, setJob] = useState(userData.email);
  const [updateFormJob, setUpdateFormJob] = useState(false);

  const handelUpdateJob = (e) => {
    e.preventDefault();
    dispatch(updateJob(userData._id, job));
    setUpdateFormJob(false);
  };

  useEffect (() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);

  const refOne = useRef(null);
  const refTwo = useRef(null);

  const handleClickOutside = (event) => {
    if (refOne.current && !refOne.current.contains(event.target)) {
      if (refTwo.current && !refTwo.current.contains(event.target)) {
        setUpdateFormJob(false);
      }
    }
  };
  return (
    <>
      <form onSubmit={handelUpdateJob} className="uploadInfo__job">
        {updateFormJob === false && (
          <div>
            <span>job : </span>
            <p
              className="beforeInput"
              onClick={() => setUpdateFormJob(!updateFormJob)}
            >
              {userData.job}
            </p>
          </div>
        )}
        {updateFormJob && (
          <>
            <div>
              <span>job : </span>
              <input
                className="input"
                type="text"
                defaultValue={userData.job}
                onChange={(e) => setJob(e.target.value)}
                ref={refOne}
              />
            </div>
          </>
        )}
      </form>
      {updateFormJob && (
      <button ref={refTwo} className="button buttonUpload" onClick={handelUpdateJob}>
        Validate
      </button>
      )}
    </>
  );
};

export default UploadJob;
