export const GET_ALL_USER = "GET_ALL_USER";

export const getAllUser = () => {
    return (dispatch) => {
      return fetch(`http://localhost:3000/api/user/`)
        .then((res) => res.json())
        .then((res) => {
          dispatch({ type: GET_ALL_USER, payload: res });
        })
        .catch((err) => console.log(err));
    };
  };