import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import NavMobile from "../Nav/NavMobile";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const handleIsMenuOpen = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="px-5 md:px-10 sticky top-0 bg-white z-10 border-b border-[#F1F5F9]">
      <div className="container mx-auto py-4 md:py-6 flex items-center justify-between gap-5">
        <Logo></Logo>
        <div className="hidden md:block">
          <Nav></Nav>
        </div>
        <div className="md:hidden flex-auto flex justify-end">
          <button onClick={handleIsMenuOpen} className="text-2xl text-brand">
            {isMenuOpen ? <IoClose /> : <GiHamburgerMenu />}
          </button>
        </div>
        <div className="flex items-center gap-5">
          <a
            href="#"
            className="text-sm font-semibold leading-[1.43] text-[#334155] hover:text-brand hidden md:block"
          >
            Sign In
          </a>
          <button className="text-sm font-semibold leading-[1.43] text-white py-2.5 px-5 bg-brand hover:bg-[#D91B7E] cursor-pointer rounded-4xl text-center">
            Sign Up
          </button>
        </div>
        {isMenuOpen && <NavMobile></NavMobile>}
      </div>
    </header>
  );
}
