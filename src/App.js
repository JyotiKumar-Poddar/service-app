import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Header from "./component/Header";
import UserList from "./component/UserList"
import UserInput from "./component/UserInput"
function App() {
  return (
    <>
      <div className="container-lg">
        <Header />
        <div className="row mx-lg-n5">
          <UserInput />
          <div className="col py4 px-lg-6 border bg-light">
            <div className="card-body">
              <UserList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
