import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,   onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useContext, useState } from 'react'
import { auth } from '../auth/firebase';
import { useNavigate } from 'react-router-dom';
import { toastErrorNotify, toastSuccessNotify } from '../helpers/Toast';


export const AuthContext = createContext();

//custom hooks
export const useAuthContext =()=>{
    return useContext(AuthContext);
}


const AuthProvider = ({children}) => {
const [currentUser, setCurrentUser]=useState(false)
const navigate = useNavigate("")

const createUser = async (email,password)=> {
      try { 
     let response = await createUserWithEmailAndPassword(auth, email, password);
     updateProfile(auth.currentUser, {
      displayName
    })
        navigate("/")
        toastSuccessNotify("Logged in Succesfully")
    } catch (error) {
        toastErrorNotify(error.message);
    }
 }

const signIn = async (email,password)=> {
      try { 
     let response = await signInWithEmailAndPassword (auth, email, password)
        navigate("/login")
        toastSuccessNotify("Registered Succesfully")
    } catch (error) {
        toastErrorNotify(error.message);
    }
 }

 const logOut = () => {
    signOut(auth)
      .then(() => {
        toastSuccessNotify("Logged out successfully");
      })
      .catch((error) => {
                toastErrorNotify(error.message);
      });
  };

  const userObserver = () => {
    //? Kullanıcının signin olup olmadığını takip eden ve kullanıcı değiştiğinde yeni kullanıcıyı response olarak dönen firebase metodu
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, displayName, photoURL } = user;
        setCurrentUser({ email, displayName, photoURL });
      } else {
        // User is signed out
        setCurrentUser(false);
      }
    });
  };


    const values ={currentUser, createUser, signIn, logOut, userObserver};
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
  
}

export default AuthProvider