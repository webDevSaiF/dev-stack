export default function Nav() {
  return (
    <nav>
      <ul className="flex items-center justify-between gap-7">
        <li>
          <a
            className="font-medium text-sm leading-[1.43] text-[#475569] hover:text-brand"
            href="#"
          >
            Home
          </a>
        </li>
        <li>
          <a
            className="font-medium text-sm leading-[1.43] text-[#475569] hover:text-brand"
            href="#"
          >
            Technologies
          </a>
        </li>
        <li>
          <a
            className="font-medium text-sm leading-[1.43] text-[#475569] hover:text-brand"
            href="#"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            className="font-medium text-sm leading-[1.43] text-[#475569] hover:text-brand"
            href="#"
          >
            About
          </a>
        </li>
        <li>
          <a
            className="font-medium text-sm leading-[1.43] text-[#475569] hover:text-brand"
            href="#"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
