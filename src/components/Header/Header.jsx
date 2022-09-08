import React from "react";
import "./header.css";

const Header = () => {
  let state = false;

  return (
    <nav className="header">
      <div className="logo">
        <h1 className="name">React</h1>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
          alt="react-logo"
          width={30}
        />
      </div>
      <div className="Home">Home</div>
      <div className="About">About</div>
      <div className="Contact">Contact</div>
      <div className="Products">Products</div>
    </nav>
  );
};

export default Header;
