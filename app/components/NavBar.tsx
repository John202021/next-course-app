"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

const NavBar = () => {
  const { status, data: session } = useSession();

  return (
    <div className="navbar bg-blue-400 shadow-md mb-5">
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/users">Users</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/admin">Admin</Link>
          </li>
          <li>
            <Link href="/upload">Upload</Link>
          </li>
          {status === "authenticated" && (
            <li>
              <Link href="/api/auth/signout">Sign out</Link>
            </li>
          )}
          {status === "unauthenticated" && (
            <li>
              <Link href="/api/auth/signin">Login</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
