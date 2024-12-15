import React, { useState, useEffect } from "react";
import "../styles/components/Navbar.css";

function Nav({ showPfp }) {
  const [show, handleShow] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);

    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <div className={`navigation ${show ? "nav-black" : ""}`}>
      <div className="nav-contents">
        <img
          className="nav-logo"
          src="https://loodibee.com/wp-content/uploads/Netflix-logo.png"
          alt="Netflix"
        />
        <img
          className="nav-avatar"
          src="https://e7.pngegg.com/pngimages/980/304/png-clipart-computer-icons-user-profile-avatar-heroes-silhouette-thumbnail.png"
          alt="Profile photo"
        />
      </div>
    </div>
  );
}

export default Nav;
