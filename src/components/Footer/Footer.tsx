import Logo from "../Logo/Logo";

export default function Footer() {
  return (
    <footer className="px-5 md:px-10 border-t border-[#F1F5F9]">
      <div className="pt-8 md:pt-16 pb-4 md:pb-12 container mx-auto">
        {/* Row 01 */}
        <div className="grid grid-cols-12 gap-8 md:gap-0">
          <div className="col-span-12 md:col-span-6">
            <Logo></Logo>
            <p className="mt-3 font-normal text-xs leading-[1.625] text-[#64748B]">
              Curated tools, technologies, and resources for developers building{" "}
              <br className="hidden md:block" /> modern software.
            </p>
            <div className="mt-3 md:mt-6 flex items-center w-fit gap-4">
              <a
                className="text-[#475569] hover:text-brand font-semibold text-xs leading-[1.33]"
                href="#"
              >
                GitHub
              </a>
              <a
                className="text-[#475569] hover:text-brand font-semibold text-xs leading-[1.33]"
                href="#"
              >
                Twitter
              </a>
              <a
                className="text-[#475569] hover:text-brand font-semibold text-xs leading-[1.33]"
                href="#"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div className="col-span-4 md:col-span-2">
            <h4 className="text-[#0F172A] font-bold text-xs leading-[1.33] tracking-[0.6px]">
              PRODUCT
            </h4>
            <div className="mt-4 flex items-center w-fit gap-2 md:gap-4 flex-col">
              <a
                className="text-[#64748B] hover:text-brand font-normal text-xs leading-[1.33] text-start w-full"
                href="#"
              >
                Home
              </a>
              <a
                className="text-[#64748B] hover:text-brand font-normal text-xs leading-[1.33] text-start w-full"
                href="#"
              >
                Technologies
              </a>
              <a
                className="text-[#64748B] hover:text-brand font-normal text-xs leading-[1.33] text-start w-full"
                href="#"
              >
                Projects
              </a>
            </div>
          </div>
          <div className="col-span-4 md:col-span-2">
            <h4 className="text-[#0F172A] font-bold text-xs leading-[1.33] tracking-[0.6px]">
              COMPANY
            </h4>
            <div className="mt-4 flex items-center w-fit gap-2 md:gap-4 flex-col">
              <a
                className="text-[#64748B] hover:text-brand font-normal text-xs leading-[1.33] text-start w-full"
                href="#"
              >
                About
              </a>
              <a
                className="text-[#64748B] hover:text-brand font-normal text-xs leading-[1.33] text-start w-full"
                href="#"
              >
                Contact
              </a>
              <a
                className="text-[#64748B] hover:text-brand font-normal text-xs leading-[1.33] text-start w-full"
                href="#"
              >
                Careers
              </a>
            </div>
          </div>
          <div className="col-span-4 md:col-span-2">
            <h4 className="text-[#0F172A] font-bold text-xs leading-[1.33] tracking-[0.6px]">
              LEGAL
            </h4>
            <div className="mt-4 flex items-center w-fit gap-2 md:gap-4 flex-col">
              <a
                className="text-[#64748B] hover:text-brand font-normal text-xs leading-[1.33] text-start w-full"
                href="#"
              >
                Privacy Policy
              </a>
              <a
                className="text-[#64748B] hover:text-brand font-normal text-xs leading-[1.33] text-start w-full"
                href="#"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
        {/* Row 02 */}
        <div className="mt-6 md:mt-14 border-t border-[#F1F5F9] pt-5 md:pt-8 flex flex-col md:flex-row items-center justify-between gap-y-6 md:gap-0">
          <p className="text-[#94A3B8] font-normal text-xs leading-[1.33]">
            © 2026 Dev Stack. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              className="text-[#94A3B8] hover:text-brand font-normal text-xs leading-[1.33]"
              href="#"
            >
              Privacy
            </a>
            <a
              className="text-[#94A3B8] hover:text-brand text-xs leading-[1.33] font-normal"
              href="#"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
