import React from "react";
import AppRouter from "./router/AppRouter";
import AuthProvider from "./context/AuthProvider";
import { ToastContainer } from "react-toastify";


const App = () => {
  return (
<div>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
      <ToastContainer/>
      </div>
   
  );
};

export default App;
