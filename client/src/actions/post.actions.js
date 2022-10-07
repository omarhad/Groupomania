export const GET_POSTS = "GET_POSTS";

export const getPosts = () => {
    return (dispatch) => {
        return fetch(`http://localhost:3000/api/post/`)
          .then((res) => res.json())
          .then((res) => {
            dispatch({ type: GET_POSTS, payload: res });
          })
          .catch((err) => console.log(err));
      };
    };