import { createUserWithEmailAndPassword } from 'firebase/auth';
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
     let response = await createUserWithEmailAndPassword(auth, email, password)
        navigate("/login")
        toastSuccessNotify("Registered Succesfully")
    } catch (error) {
        toastErrorNotify(error.message);
    }
}

    const values ={currentUser, createUser};
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
  
}

export default AuthProvider