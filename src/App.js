import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import UserList from "./component/UserList"
import UserInput from "./component/UserInput"
function App() {
  return (
    <>
      <Switch>
        <Route path="/delete" exact component={UserList}></Route>
      </Switch>
      <div className="container-lg">
        <Header />
        <div className="row mx-lg-n5">
          <UserInput />
        </div>
      </div>
    </>
  );
}

export default App;
