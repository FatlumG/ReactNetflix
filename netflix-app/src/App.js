// import React, { useEffect } from "react";
// import HomePage from "./pages/HomePage";
// import LoginPage from "./pages/LoginPage";
// import {
//   BrowserRouter as Router,
//   Routes as Switch,
//   Route,
// } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.css";
// import "./styles/App.css";
// import auth from "./firebase";
// import { onAuthStateChanged } from "firebase/auth";
// import { useDispatch } from "react-redux";
// import { login, logout } from "./features/userSlice";

// function App() {
//   const user = null;
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const unsubcribe = onAuthStateChanged(auth, (userAuth) => {
//       if (userAuth) {
//         //Logged in
//         console.log(userAuth);
//         dispatch(
//           login({
//             uid: userAuth.uid,
//             email: userAuth.email,
//           })
//         );
//       } else {
//         //Logged out
//         dispatch(logout);
//       }
//     });

//     return () => unsubcribe();
//   }, []);

//   return (
//     <div className="app">
//       <Router>
//         {!user ? (
//           <LoginPage />
//         ) : (
//           <Switch>
//             <Route path="/" element={<HomePage />} />
//           </Switch>
//         )}
//       </Router>
//     </div>
//   );
// }

// export default App;

import React, { useEffect } from "react";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/App.css";
import { auth } from "./firebase"; // Ensure auth is a named export
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser ); // Select user from Redux store
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // User is logged in
        console.log("User logged in:", userAuth);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        // User is logged out
        console.log("User logged out");
        dispatch(logout());
      }
    });

    return () => unsubscribe(); // Clean up listener on component unmount
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginPage />
        ) : (
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
