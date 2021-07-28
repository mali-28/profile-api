import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { loginContext } from "../context";
import Avatar from 'react-avatar';
const TopBar = () => {
  const {login,setLogin} = useContext(loginContext);
  
  const logIn = () => {
    localStorage.setItem('Islogin' , true)
    setLogin(localStorage.getItem('Islogin'));
    
  }
  const logOut = () => {
    
    setLogin(localStorage.clear());

  }

  return (
    
    <header style={styles.header}>
      <div style={styles.logo}>
        <Link to="/">
          <img
            alt={"logo"}
            src="/favicon-196x196.png"
            style={{ maxHeight: 40, flex: 1 }}
          />
        </Link>
      </div>
      <div style={{ color: "#795548", fontSize: 16 }}>
        {"Geeks of Kolachi"}
      </div>
      <div style={{ float: "left", color: "white", flex: 1 }} />
      <div style={{ float: "right", paddingRight: 20 }}>
        {login ? <Button style={{ padding: "0", borderRadius: "100%", overflow: "hidden" }}><Avatar name="
       F" size="40" color="#337ab7" /></Button> : <Button click={logIn} style={{ backgroundColor: "#337ab7", color: "white" }}>
          Login
        </Button>}

        {login ? <Button click={logOut} style={{ backgroundColor: "#f44336", color: "white" }}>
          LogOut
        </Button> : <Button style={{ backgroundColor: "#f44336", color: "white" }}>
          Sign Up
        </Button>}
      </div>
      
    </header>
  );
}

const styles = {
  logo: {
    margin: 8,
    float: "left",
  },
  header: {
    height: 48,
    width: "100%",
    color: "white",
    display: "flex",
    padding: "6px 10px",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e6d4a0",
  },
};


export default TopBar;