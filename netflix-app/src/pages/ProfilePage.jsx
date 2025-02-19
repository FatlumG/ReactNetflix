import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import "../styles/pages/ProfilePage.css";
import { auth } from "../firebase";

function ProfilePage() {
  const user = useSelector(selectUser);

  return (
    <div className="profilePage h-100 text-white d-flex flex-column align-items-center">
      <Navbar />
      <div className="profile-body w-50 px-3 gap-0 mt-5">
        <h1>Edit Profile</h1>
        <hr />
        <div className="profile-info row">
          <img
            className="profile-photo col-2 align-self-start"
            src="https://e7.pngegg.com/pngimages/980/304/png-clipart-computer-icons-user-profile-avatar-heroes-silhouette-thumbnail.png"
            alt="Profile photo"
          />
          <div className="profile-details col-10">
            <h2 className="fs-6 bg-secondary p-3 w-100 d-block m-0">
              {user.email}
            </h2>
            <div className="profile-plans">
              <h3>Plans (Comming Soon)</h3>
              <Button
                className="sign-out-btn w-100 py-2 text-white border-0"
                onClick={() => auth.signOut()}
              >
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
