import { GET_POST } from "../types";
export default (state, actions) => {
  switch (actions.type) {
    case GET_POST:
      return {};
    default:
      return state;
  }
};
