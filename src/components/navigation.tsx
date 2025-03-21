import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
  //  UserButton
} from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

export const Navigation = () => {
  return (
    <nav className="bg-[var(--background)] border-b-2 border-[var(--foreground)]/50  ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between h-16 items-center ">
          <div className="flex-shrink-0 ">
            <h1 className="text-xl font-semibold text-[var(--foreground)] ">
              Next App
            </h1>
          </div>
          <div className="flex items-center gap-4 ">
            {/* Sign in button goes here */}
            <SignedOut>
              <SignInButton />
              <SignUpButton mode="modal" />
            </SignedOut>
            {/* Sign out button goes here */}
            <SignedIn>
              {/* <UserButton /> */}
              <Link href="/user-profile">Profile</Link>
              <SignOutButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
};
