import { MdArrowRightAlt } from "react-icons/md";

export default function NavMobile() {
  return (
    <nav className="md:hidden bg-gray-950 absolute w-[100%] h-auto top-[72px] left-0 p-6 animate-slide-down">
      <ul className="flex flex-col items-center justify-between gap-1">
        <li className="w-full">
          <a
            className="font-medium text-sm text-white hover:text-brand p-2 w-full block"
            href="#"
          >
            Home
          </a>
        </li>
        <li className="w-full">
          <a
            className="font-medium text-sm  text-white hover:text-brand p-2 w-full block"
            href="#"
          >
            Technologies
          </a>
        </li>
        <li className="w-full">
          <a
            className="font-medium text-sm  text-white hover:text-brand p-2 w-full block"
            href="#"
          >
            Projects
          </a>
        </li>
        <li className="w-full">
          <a
            className="font-medium text-sm  text-white hover:text-brand p-2 w-full block"
            href="#"
          >
            About
          </a>
        </li>
        <li className="w-full">
          <a
            className="font-medium text-sm  text-white hover:text-brand p-2 w-full block"
            href="#"
          >
            Contact
          </a>
        </li>
        <li className="w-full">
          <a
            className="font-medium text-sm  text-brand p-2 w-full flex justify-start items-center gap-2"
            href="#"
          >
            Sign In{" "}
            <span className="text-xl">
              <MdArrowRightAlt />
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
