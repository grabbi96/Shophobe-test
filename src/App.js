import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, } from "react-router-dom";
import Home from "./components/home/Home"
import Login from "./components/auth/Login"
import SignUp from "./components/auth/SignUp"
import Header from "./components/common/Header"
import Profile from "./components/user/Profile"
import { UserPrivateRoute, UserRoute } from "./components/PrivateRoute/UserRoute"
import Sitting from "./components/user/Sitting"
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <UserRoute exact path="/" component={Home} />
          <UserRoute exact path="/login" component={Login} />
          <UserRoute exact path="/SignUp" component={SignUp} />
          <UserPrivateRoute exact path="/profile" component={Profile} />
          <UserPrivateRoute exact path="/sitting" component={Sitting} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
