"use client";
import Button, { IconButton } from "@components/Button";
import { motion } from "framer-motion";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import React, { useState } from "react";

import { iconAnim } from "./Animation";
import { UserPlus } from "lucide-react";
import MobileNav from "./MobileNav";
import "./NavBar.scss";

const NavBar: React.FC = () => {
  const [menuDrop, setMenuDrop] = useState(false);

  return (
    <nav>
      <div className="nav-container">
        <div className="nav-left">
          <motion.div
            animate={menuDrop ? "closed" : "open"}
            variants={iconAnim}
          >
            <div
              className={"nav-icon"}
              onClick={() => (window.location.href = "/")}
            >
              <i
                className="fa-solid fa-earth-oceania fa-xl"
                style={{ color: "#2e2e2e" }}
              />
            </div>
          </motion.div>
          <div className="nav-links">
            <Button open="/about">Our&nbsp;Team</Button>
            <Button open="#">Track</Button>
            <Button open="/badges">Get&nbsp;Badge</Button>
            <Button open="/blogs">Blog</Button>
          </div>
        </div>

        <div
          className={menuDrop ? "nav-menu open " : "nav-menu"}
          onClick={() => setMenuDrop(!menuDrop)}
        >
          {!menuDrop && "Menu"}
          <div className={menuDrop ? "nav-menu-content" : "hidden"}>
            <MobileNav />
          </div>
        </div>

        <div className="nav-right">
          <IconButton
            open="https://github.com/Project-Eco-Track"
            target="_blank"
          >
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
          <SignedOut>
            <Button open="#">
              <SignInButton mode="modal" redirectUrl={"/"}>
                Sign In
              </SignInButton>
            </Button>
          </SignedOut>
          <SignedIn>
            <IconButton open="#">
              <UserButton />
            </IconButton>
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
