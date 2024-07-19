import { SignedIn, SignedOut, UserButton, UserProfile } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <Link
          href="/"
          className="w-fit focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md ring-offset-4"
        >
          <Image
            src="/assets/images/logo.svg"
            alt="Evently Logo"
            width={128}
            height={38}
          />
        </Link>

        <SignedIn>
          <nav className="md:block hidden w-full max-w-sm">
            <NavItems />
          </nav>
        </SignedIn>

        <div className="flex w-fit gap-3">
          <SignedIn>
            <UserButton />
            <HamburgerMenu />
          </SignedIn>

          <SignedOut>
            <Button
              asChild
              className="rounded-full px-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary-500 text-white"
              size="sm"
            >
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;