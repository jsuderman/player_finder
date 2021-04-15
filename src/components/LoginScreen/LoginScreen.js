import React, { useState } from "react";
import "./LoginScreen.css";
import SignIn from "../SignIn/SignIn";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="http://www.fromthebenchgames.com/nba-basketball-games/img/logoGrande.png?v=2"
          alt=""
        />
        <button onClick={() => setSignIn(true)} className="loginScreen__button">
          Sign In
        </button>

        <div className="loginScreen__gradient" />
      </div>

      <div className="loginScreen__body">
        {signIn ? (
          <SignIn />
        ) : (
          <>
            <h1>Build Your Ultimate NBA Team!</h1>

            <div className="loginScreen__input">
              <form>
                <button
                  onClick={() => setSignIn(true)}
                  className="loginScreen__getStarted"
                >
                  Get Started
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
