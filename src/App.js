import "./App.css";

import Header from "./component/header/Header";
import Content from "./component/content/Content";
import { Route, Switch } from "react-router";
import Login from "./component/login/Login";
import ContentState from "./context/content/ContentState";

function App() {
  return (
    <ContentState>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header />
            <Content />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </ContentState>
  );
}

export default App;
