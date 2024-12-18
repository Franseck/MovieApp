import React from "react";
import AppRouter from "./router/AppRouter";
import AuthProvider from "./context/AuthProvider";
import { ToastContainer } from "react-toastify";
import MovieProvider from "./context/MovieProvider";


const App = () => {
  return (
<div className="bg-fifth dark:bg-gray-dark-main min-h-screen">
      <AuthProvider>
<MovieProvider>
        <AppRouter />
</MovieProvider>
      </AuthProvider>
      <ToastContainer/>
      </div>
   
  );
};

export default App;
