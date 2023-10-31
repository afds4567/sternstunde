import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen((prev) => !prev);
  return (
    <>
      <div className="navBar">
        <Link className="navBar__logo" href="/">
          STERNSTUNDE
        </Link>
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
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
      </div>
      {isOpen && (
        <div className="navBar__mobile">
          <div className="navBar__menu__mobile">
            <Link
              className="navBar__item__mobile"
              href="/places"
              onClick={toggleOpen}
            >
              List
            </Link>
            <Link
              className="navBar__item__mobile"
              href="/places/new"
              onClick={toggleOpen}
            >
              Register
            </Link>
            <Link
              className="navBar__item__mobile"
              href="/users/login"
              onClick={toggleOpen}
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
