import React,{ useContext}from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login"
import Register from "../pages/Register";
import MovieDetail from "../pages/MovieDetail"
import Navbar from "../components/Navbar";
import PrivateRouter from "./PrivateRoute";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../auth/firebase";
import { AuthContext } from "../context/AuthProvider";

const AppRouter = () => {
  const { currentUser, setCurrenUser } = useContext(AuthContext);
  onAuthStateChanged(auth, (currentUser) => setCurrenUser(currentUser?.email));

  return (
    <>
      <Navbar />
      <Routes>
      <Route path="/login" element={<Login />} />  
      <Route path="/register" element={<Register />}/>    

      <Route path="" element={<PrivateRouter />}>
        <Route path="/" element={<Main />} />
          <Route path="/details/:movieId" element={<MovieDetail />} />
      

        </Route>
      </Routes>
    </>
  );
};

export default AppRouter;
