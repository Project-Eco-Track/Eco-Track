"use client";
import React, { useState } from "react";
import Button, { IconButton } from "@components/Button";
import "./NavBar.scss";

const NavBar: React.FC = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-left">
          <div
            className="nav-icon"
            onClick={() => (window.location.href = "/")}
          >
            <i
              className="fa-solid fa-earth-oceania fa-xl"
              style={{ color: "#2e2e2e" }}
            />
          </div>

          <div className="nav-links">
            <Button open="/about">Our&nbsp;Team</Button>
            <Button open="#">Services</Button>
            <Button open="#">Get&nbsp;Badge</Button>
            <Button open="/blogs">Blog</Button>
          </div>
        </div>

        <div className="nav-menu">Menu</div>

        <div className="nav-right">
          <IconButton open="https://github.com/Project-Eco-Track" target="_blank">
            <i
              className="fa-brands fa-github fa-xl"
              style={{ color: "#2e2e2e" }}
            />
          </IconButton>

          <IconButton open="/">
            <i
              className="fa-brands fa-instagram fa-xl"
              style={{ color: "#2e2e2e" }}
            />
          </IconButton>
          <Button open="#">Login</Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
