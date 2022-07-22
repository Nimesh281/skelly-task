import React from "react";
import { useAuth } from "./firebase";

function Getuser() {
  var currentUser = useAuth();
  return (
    <>
    {currentUser &&  <p id="account">{currentUser?.email}</p> }
     
    </>
  );
}

export default Getuser;
