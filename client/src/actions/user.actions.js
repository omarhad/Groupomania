export const GET_USER = "GET_USER";
export const UPLOAD_PICTURE = "UPLOAD_PICTURE";
export const UPDATE_BIO = "UPDATE_BIO";
export const UPDATE_LAST_NAME = "UPDATE_LAST_NAME";
export const UPDATE_FIRST_NAME = "UPDATE_FIRST_NAME";

export const getUser = (uid) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/user/${uid}`)
      .then((res) => res.json())
      .then((res) => {
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
            dispatch({ type: UPLOAD_PICTURE, payload: res.image });
          });
      })
      .catch((err) => console.log(err));
  };
};

export const updateBio = (id, bio) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/user/${id}`, {
      method: "PUT",
      body: { bio },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        dispatch({ type: UPDATE_BIO, payload: bio });
      })
      .catch((err) => console.log(err));
  };
};

export const updateLastName = (id, lastName) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/user/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: { lastName } ,
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch({ type: UPDATE_LAST_NAME, payload: lastName });
      })
      .catch((err) => console.log(err));
  };
}

export const updateFirstName = (id, firstName) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/user/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: { firstName } ,
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch({ type: UPDATE_FIRST_NAME, payload: firstName });
      })
      .catch((err) => console.log(err));
  };
}
