import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./view/Main/Dashboard";
import ElWatch from "./view/Main/ElWatch";

const Router = (props) => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={(props) => <Dashboard {...props} />}
      />
      <Route
        path="/el-watch"
        render={(props) => <ElWatch {...props} />}
      />
    </Switch>
  );
};

export default Router;
