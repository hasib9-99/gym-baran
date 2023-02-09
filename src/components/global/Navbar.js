import Link from "next/link"
import { useState } from "react";
import {HiMenu} from "react-icons/hi"
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <nav className="container-c">
      <div className="relative flex items-center justify-between py-5">
        <div className="logo">
          <img src="./images/logo.png" alt="#" />
        </div>
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="block md:hidden"
        >
          {isVisible ? <RxCross2 size="30px" /> : <HiMenu size="30px" />}
        </button>
        <ul
          className={`${
            isVisible ? "block" : "hidden"
          } absolute md:relative top-14 md:top-0 right-0 bg-purple-100 md:bg-white border-fuchsia-500 md:border-none rounded-md py-3 md:flex items-center justify-center`}
        >
          <li className="px-5">
            <a href="#">Home</a>
          </li>
          <li className="px-5">
            <a href="#">Program</a>
          </li>
          <li className="px-5">
            <a href="#">Blog</a>
          </li>
          <li className="px-5">
            <a href="#">About us</a>
          </li>

          <Link href="/" className="mx-5 btn-primary">
            log in
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar