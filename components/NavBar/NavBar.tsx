import React from "react";
import Image from "next/image";
import Button, { IconButton } from "@components/Button";
import "./NavBar.scss";

const NavBar: React.FC = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-left">
          <div className="nav-icon">
            <i
              className="fa-solid fa-earth-oceania fa-xl"
              style={{ color: "#2e2e2e" }}
            />
          </div>

          <div className="nav-links">
            <Button>Our&nbsp;Crew</Button>
            <Button>Services</Button>
            <Button>Get&nbsp;Badge</Button>
            <Button>Blog</Button>
          </div>
        </div>

        <div className="nav-right">
        <IconButton>
            <i
              className="fa-brands fa-github fa-xl"
              style={{ color: "#2e2e2e" }}
            />
          </IconButton>

          <IconButton>
            <i
              className="fa-brands fa-instagram fa-xl"
              style={{ color: "#2e2e2e" }}
            />
          </IconButton>
          <Button>Login</Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
