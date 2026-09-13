import heroImageMobile from "../../assets/hero-image-mobile.png";
import heroImage from "../../assets/hero-image.png";

export default function Hero() {
  return (
    <section className="px-5 md:px-10">
      <div className="container mx-auto py-10  md:pt-32.75 md:pb-18 grid items-center grid-cols-12 gap-5.5">
        <div className="col-span-12 md:col-span-7">
          <h1 className="text-3xl text-center md:text-left md:text-6xl text-[#0F172A] font-extrabold leading-[1] tracking-[-1.5px]">
            Build Your Ideal
            <br className="hidden md:block" />{" "}
            <span className="bg-[image:var(--headline-gradient)] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>
          <p className="mt-3 md:mt-6 text-[#475569] text-sm md:text-lg leading-[1.63] text-center md:text-left">
            Explore frontend, backend, database, and tooling options,
            <br className="hidden md:block" /> compare them side by side, and
            put together the stack that fits your
            <br className="hidden md:block" /> next project.
          </p>
          <div className="mt-6 md:mt-13 flex items-center gap-3 justify-center md:justify-start">
            <button className="bg-[image:var(--button-gradient)] cursor-pointer rounded-lg py-3 px-4 font-heading font-semibold text-[12px] md:text-sm leading-[1.14] text-white transition-transform duration-200 hover:-translate-y-2.5">
              Explore Technologies
            </button>
            <button className="cursor-pointer border border-[#E5E7EB] rounded-lg py-3 px-4 font-heading font-normal text-[12px] md:text-sm leading-[1.14] hover:border-brand transition hover:text-brand">
              Learn More
            </button>
          </div>
        </div>
        <div className="col-span-12 md:col-span-5 flex justify-center items-center">
          <img className="hidden md:block" src={heroImage} alt="Hero image" />
          <img
            className="md:hidden"
            src={heroImageMobile}
            alt="Hero image mobile"
          />
        </div>
      </div>
    </section>
  );
}
