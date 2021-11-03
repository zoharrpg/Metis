import React, { useReducer } from "react";
import ContentReducer from "./ContentReducer";
import ContentContext from "./contentContext";
import axios from "axios";

import { CREATE_POST, GET_POST } from "../types";

const ContentState = (props) => {
  const initialState = {
    posts: null,
  };
  const [state, dispatch] = useReducer(ContentReducer, initialState);

  const getPosts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/get-all-posts");
      dispatch({ type: GET_POST, payload: res.data.data });
    } catch (e) {
      //TODO add error handling for this part
      console.log("error");
    }
  };

  const createPost = async (post) => {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        "http://localhost:5000/create-post",
        post,
        config
      );
      dispatch({ type: CREATE_POST });
    } catch (e) {
      //TODO add error handling for this part
      console.log("error");
    }
  };

  return (
    <ContentContext.Provider
      value={{ posts: state.posts, getPosts, createPost }}
    >
      {props.children}
    </ContentContext.Provider>
  );
};

export default ContentState;
