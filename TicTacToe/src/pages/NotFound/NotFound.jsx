import React from "react"
import './NotFound.css'
import NavBar from "../../components/NavBar/NavBar";

function NotFound () {
  return (
    <>
    <NavBar></NavBar>
    <div className="not-found" >
      
      <h2>Page Not Found</h2>
      <p>Error 404</p>
    </div>
    </>
  )
};

export default NotFound;
