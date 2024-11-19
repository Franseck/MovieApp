import React, { useContext, useState } from "react";
import GoogleIcon from "../assets/icons/GoogleIcon";
import { useAuthContext } from "../context/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
  const{signIn, googleProvider} = useAuthContext();
const [info, setInfo] = useState({
  
  email:"",
  password:""
})

const handleChange =(e)=> setInfo({...info,[e.target.name]:e.target.value});


const {email, password} = info

  const handleSubmit = (e)=>{
    e.preventDefault()
  signIn(email,password)
  }
  return (
    <div className="flex justify-center font-second">
      <div className="overflow-hidden flex-1 h-screen justify-center items-center dark:bg-gray-dark-main">
        <div className={`form-container mt-[5vh] w-[380px] h-[480px] `}>
          <form onSubmit={handleSubmit}>
            <h2 className="text-primaryDark text-2xl font-extrabold text-center tracking-[0.1em] mb-3">
              Sign In
            </h2>
          
              
              
            <div className="relative z-0 mt-9 w-full mb-6 group">
              <input
                name="email"
                className="peer"
                type="email"
                placeholder=" "
                required
                onChange={handleChange}
              />
              <label htmlFor="floating_email">Email : test@test.com</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                name="password"
                className="peer"
                type="password"
                placeholder=" "
                required
                onChange={handleChange}
              />
              <label htmlFor="floating_password">Password : 123456</label>
            </div>
            <button className="btn-danger" type="submit">
              Login
            </button>
            <button
            onClick={googleProvider}
              className="flex justify-between text-center items-center btn-danger"
              type="button"
            >
              Continue with Google
              <GoogleIcon color="currentColor" />
            </button>

            <div className="flex justify-center items-center flex-wrap text-gray-600 mt-3 text-[0.8rem]">
       <span>Forget your Password?</span>
          <Link className="text-teal-900 underline ml-3" to="/register"> Create a New Account </Link>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
