import React, { useReducer } from "react";
import ContentReducer from "./ContentReducer";
import ContentContext from "./ContentContext";
import axios from "axios";

import { GET_POST } from "../types";

const ContentState = (props) => {
  const initialState = {
    posts: null,
  };
  const [state, dispatch] = useReducer(ContentReducer, initialState);

  return (
    <ContentContext.Provider value={{ posts: state.posts }}>
      {props.children}
    </ContentContext.Provider>
  );
};

export default ContentState;
