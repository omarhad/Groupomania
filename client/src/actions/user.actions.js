export const GET_USER = "GET_USER";
export const UPLOAD_PICTURE = "UPLOAD_PICTURE";
export const UPDATE_BIO = "UPDATE_BIO";
export const UPDATE_LAST_NAME = "UPDATE_LAST_NAME";
export const UPDATE_FIRST_NAME = "UPDATE_FIRST_NAME";
export const UPDATE_BIRTHDAY = "UPDATE_BIRTHDAY";
export const UPDATE_EMAIL = "UPDATE_EMAIL";
export const UPDATE_JOB = "UPDATE_JOB";
export const UPDATE_PASSWORD = "UPDATE_PASSWORD";

export const getUser = (id) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/user/${id}`)
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
  const data = { "bio": bio };
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/user/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
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
  const data = { "lastName": lastName };
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/user/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch({ type: UPDATE_LAST_NAME, payload: lastName });
      })
      .catch((err) => console.log(err));
  };
}

export const updateFirstName = (id, firstName) => {
  const data = { "firstName": firstName };
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/user/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch({ type: UPDATE_FIRST_NAME, payload: firstName });
      })
      .catch((err) => console.log(err));
  };
}

export const updateBirthday = (id, birthday) => {
  const data = { "birthday": birthday };
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/user/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch({ type: UPDATE_BIRTHDAY, payload: birthday });
      })
      .catch((err) => console.log(err));
  };
}

export const updateEmail = (id, email) => {
  const data = { "email": email };
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/user/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch({ type: UPDATE_EMAIL, payload: email });
      })
      .catch((err) => console.log(err));
  };
}

export const updateJob = (id, job) => {
  const data = { "job": job };
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/user/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch({ type: UPDATE_JOB, payload: job });
      })
      .catch((err) => console.log(err));
  };
}

export const updatePassword = (id, password) => {
  const data = { "password": password };
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/user/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch({ type: UPDATE_PASSWORD, payload: password });
      })
      .catch((err) => console.log(err));
  };
}