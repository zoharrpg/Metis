import { GET_POST, CREATE_POST } from "../types";
export default (state, actions) => {
  switch (actions.type) {
    case GET_POST:
      return {
        ...state,
        posts: actions.payload,
      };
    case CREATE_POST:
    default:
      return state;
  }
};
