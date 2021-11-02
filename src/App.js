import "./App.css";

import Header from "./component/header/Header";
import Content from "./component/content/Content";
import { Route, Switch } from "react-router";
import Login from "./component/login/Login";

function App() {
  return (
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
  );
}

export default App;
