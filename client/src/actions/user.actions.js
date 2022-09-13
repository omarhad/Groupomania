export const GET_USER = "GET_USER";
export const UPLOAD_PICTURE = "UPLOAD_PICTURE";

export const getUser = (uid) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/user/${uid}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        dispatch({ type: GET_USER, payload: res });
      })
      .catch((err) => console.log(err));
  };
};

export const uploadPicture = (data, id) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/user/upload`, {
      method: "POST",
      body: data,
    })
      .then((res) => {
        return fetch(`http://localhost:3000/api/user/${id}`)
          .then((res) => res.json())
          .then((res) => {
            console.log(res);
            dispatch({ type: UPLOAD_PICTURE, payload: res.image });
          });
      })
      .catch((err) => console.log(err));
  };
};
