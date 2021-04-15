import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import Profile from "./components/Profile/Profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from "./components/LoginScreen/LoginScreen";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import UserTeam from "./components/UserTeam/UserTeam";


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(
      (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
          uid: userAuth.uid,
          email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);
  return (
    <div className="app">
      
      <Router>
        {!user ? (
          <LoginScreen />
        ): (
          <Switch>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route exact path="/">
            <HomeScreen />
            </Route>
            <Route exact path="/userteam">
            <UserTeam />
            </Route>
          </Switch>
        )}
        
        
      </Router>
    </div>
  );
}

export default App;
