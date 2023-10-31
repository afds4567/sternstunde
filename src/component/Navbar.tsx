import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="navBar">
        <div className="navBar__logo">STERNSTUNDE</div>
        <div className="navBar__menu">
          <Link className="navBar__item" href="/places">
            List
          </Link>
          <Link className="navBar__item" href="/places/new">
            Register
          </Link>
          <Link className="navBar__item" href="/users/login">
            Login
          </Link>
        </div>

        <div
          role="presentation"
          className="navBar__button__mobile"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <IoCloseOutline /> : <AiOutlineMenu />}
        </div>
      </div>
      {isOpen && (
        <div className="navBar__mobile">
          <div className="navBar__menu__mobile">
            <Link href="/places">List</Link>
            <Link href="/places/new">Register</Link>
            <Link href="/users/login">Login</Link>
          </div>
        </div>
      )}
    </>
  );
}
