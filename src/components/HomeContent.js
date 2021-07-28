import React, { useContext } from "react";
import Button from "./Button";
import { loginContext } from "../context";
import { NavLink } from "react-router-dom";
const HomeContent = () => {
  const {login,setLogin } = useContext(loginContext);
  const logIn = () => {
    localStorage.setItem('Islogin' , true)
    setLogin(localStorage.getItem('Islogin'));
    
    
  }
  const logOut = () => {
    setLogin(localStorage.clear());
    
    
  }
  return (
    <div>
      {login ? <>
        <Button click={logOut} style={{ backgroundColor: "#337ab7", color: "white" }}>
          {"LogOut"}
        </Button>
        <NavLink to="/users">
          <Button style={{ backgroundColor: "#f44336", color: "white" }}>
            Users
          </Button>
        </NavLink>
      </> : <Button click={logIn} style={{ backgroundColor: "#337ab7", color: "white" }}>
        {"Login"}
      </Button>}

    </div>
  );
}

export default HomeContent;
