import React, { useState } from "react";
import Button from "../components/Button";
import SignUpPage from "./SignUpPage";
import "../styles/pages/LoginPage.css";

function LoginPage() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginPage">
      <div className={`navigation`}>
        <div className="nav-contents">
          <img
            className="nav-logo"
            src="https://loodibee.com/wp-content/uploads/Netflix-logo.png"
            alt="Netflix"
          />
          <Button className="btn-signin bttn" onClick={() => setSignIn(true)}>
            Sign In
          </Button>
        </div>
      </div>
      {signIn ? (
        <SignUpPage />
      ) : (
        <div className="get-started text-white">
          <h2 className="fs-1 fw-bold">Ulimited films, TV prorams and more.</h2>
          <h4>Watch anywhere. Cancel anytime.</h4>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div>
            <input
              type="email"
              placeholder="Email address"
              className="w-75 px-2 gets-input"
            />
            <Button
              className="bttn get-started-btn text-uppercase fw-bold"
              onClick={() => setSignIn(true)}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
      <div className="login-gradient" />
    </div>
  );
}

export default LoginPage;
