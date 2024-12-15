import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import "../styles/pages/SignUpPage.css";

function SignUpPage() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => alert(error.message));
  };
  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="signInPage row flex-column gap-4">
      <h1>Sign In</h1>
      <form className="d-flex flex-column justify-content-center gap-3">
        <input
          ref={emailRef}
          type="email"
          placeholder="Email Addres"
          className=" border-0 rounded-2"
        />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          className="border-0 rounded-2"
        />
        <Button
          type="submit"
          className="fw-bold text-white border-0 rounded-2 mt-2"
          onClick={signIn}
        >
          Sign In
        </Button>
        <h4 className=" text-secondary">
          New to Netflix?{" "}
          <Link className="text-white" onClick={register}>
            Sign Up now.
          </Link>
        </h4>
      </form>
    </div>
  );
}

export default SignUpPage;
