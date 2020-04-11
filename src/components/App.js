import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ChangePassword from "./pages/ChangePassword";
import Feed from "./pages/Feed";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/change-password" component={ChangePassword} />
        <Route exact path="/">
          <Feed />
        </Route>
        <Redirect to="/login" />
      </Switch>
    </div>
  );
}

export default App;
