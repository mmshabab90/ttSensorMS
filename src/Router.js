import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./view/Main/Dashboard";
import ElWatch from "./view/Main/ElWatch";

const Router = (props) => {
  const data = props.data;
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={(props) => <Dashboard {...props} data={data} />}
      />
      <Route
        path="/el-watch"
        render={(props) => <ElWatch {...props} data={data} />}
      />
    </Switch>
  );
};

export default Router;
