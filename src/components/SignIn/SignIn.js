import React, { useRef } from "react";
import { auth } from "../../firebase";
import "./SignIn.css";

function SignIn() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value,
    ).then((authUser) => {
      console.log(authUser);
    }).catch((error) => {
      alert(error.message);
    });
  }

  const signIn = (e) => {
    e.preventDefualt();

    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value,
    )
    .then((authUser) => {
      console.log(authUser);
    })
    .catch((error) => alert(error.message));
  };
 
  return (
    <div className="signIn">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button type="submit" onClick={signIn}>Sign In</button>

        <h4>
          <span className="signIn__grey">New to NBA GM?</span> 
          <span className="signIn__link" onClick={register}> Sign up now</span>
        </h4>
      </form>
    </div>
  );
}

export default SignIn;
