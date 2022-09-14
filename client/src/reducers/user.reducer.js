import { GET_USER, UPLOAD_PICTURE, UPDATE_BIO, UPDATE_FIRST_NAME, UPDATE_LAST_NAME } from "../actions/user.actions";

const initialState = {};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return action.payload;
    case UPLOAD_PICTURE:
      return {
        ...state,
        image: action.payload,
      };
    case UPDATE_BIO:
      return {
        ...state,
        bio: action.payload,
      };
      case UPDATE_LAST_NAME:
      return {
        ...state,
        lastName: action.payload,
      };
      case UPDATE_FIRST_NAME:
      return {
        ...state,
        firstName: action.payload,
      };
    default:
      return state;
  }
}
