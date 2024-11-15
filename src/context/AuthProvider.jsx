import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useContext, useState } from 'react'
import { auth } from '../auth/firebase';

export const AuthContext = createContext();

//custom hooks
export const useAuthContext =()=>{
    return useContext(AuthContext);
}


const AuthProvider = ({children}) => {
const [currentUser, setCurrentUser]=useState(false)

const createUser = async(email,password)=> {
      try { 
     let response = await createUserWithEmailAndPassword(auth, email, password)
        console.log(response);
    } catch (error) {
        console.log(error.message);
    }
}

    const values ={currentUser, createUser};
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
  
}

export default AuthProvider