import "./App.css";

import Header from "./component/header/Header";
import Content from "./component/content/Content";
import { Route, Switch } from "react-router";
import Login from "./component/login/Login";
import ContentState from "./context/content/ContentState";
import PostPage from "./component/postpage/PostPage";

function App() {
  return (
    <ContentState>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header />
            <Content />
          </Route>
          {/*<Route path="/login">*/}
          {/*  <Login />*/}
          {/*</Route>*/}
          <Route path="/post">
            <PostPage />
          </Route>
        </Switch>
      </div>
    </ContentState>
  );
}

export default App;
