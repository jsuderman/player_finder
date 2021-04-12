import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginScreen from "./components/LoginScreen/LoginScreen";
import { auth } from "./firebase";


function App() {
  const user = null;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        console.log(userAuth);
      } else {

      }
    });

    return unsubscribe;
  }, []);
  return (
    <div className="app">
      
      <Router>
        {!user ? (
          <LoginScreen />
        ): (
          <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>
          </Switch>
        )}
        
        
      </Router>
    </div>
  );
}

export default App;
