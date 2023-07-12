import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Button, { IconButton } from "@components/Button";
import Link from "next/link";
import "./NavBar.scss";

const MobileNav = () => {
  return (
    <>
      <Link href='/about' className="mx-10 h-20 text-center font-bold text-2xl text-white -translate-y-20">
        Our Team
      </Link>
      <Link  href='/badges' className="mx-10 h-20 text-center font-bold text-2xl text-white -translate-y-20">
        Badge
      </Link>
      <Link href='/blogs' className="mx-10 h-20 text-center font-bold text-2xl text-white -translate-y-20">
        Blogs
      </Link>
      <Link href='/track' className="mx-10 h-20 text-center font-bold text-2xl text-white -translate-y-20">
        Carbon Track
      </Link>

      <div className="flex justify-evenly -translate-y-20 w-80">
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
    </>
  );
};

export default MobileNav;
