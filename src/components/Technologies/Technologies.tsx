import { Suspense, useState } from "react";
import { toast } from "react-toastify";
import type { ITech, TechPromise } from "../../types/types";
import Spinner from "../Spinner/Spinner";
import StackSidebar from "./StackSidebar";
import TechnologyCards from "./TechnologyCards";

export default function Technologies() {
  const fetchTechnologies = async (): TechPromise => {
    const response = await fetch("./data.json");
    const data = await response.json();
    return data;
  };
  const [techPromise] = useState<TechPromise>(() => fetchTechnologies());
  const [stack, setStack] = useState<ITech[]>([]);

  const handleAddStack = (tech: ITech) => {
    if (stack.some((s) => s.id === tech.id)) {
      return;
    }
    setStack([...stack, tech]);
    toast.success(`${tech.name} added to your stack!`);
  };

  const handleRemoveStack = (id: string) => {
    const removed = stack.find((s) => s.id === id);
    const updatedStack = stack.filter((s) => s.id !== id);
    setStack([...updatedStack]);
    toast.info(`${removed?.name} removed from your stack.`);
  };
  const handleRemoveAllStack = () => {
    setStack([]);
    toast.info("All technologies removed from your stack.");
  };

  return (
    <section className="px-5 md:px-10">
      <div className="container mx-auto py-10 md:pt-18 md:pb-22">
        {/* Row 01 */}
        <div>
          <h2 className="text-center md:text-left text-2xl text-[#0F172A] font-extrabold tracking-[-0.9px] md:text-4xl leading-[1.1]">
            Explore the
            <span className="bg-[image:var(--sub-headline-gradient)] bg-clip-text text-transparent">
              {" "}
              Technologies
            </span>
          </h2>
          <p className="text-center md:text-left mt-3.5 md:mt-5 text-[#64748B] text-xs md:text-base leading-1.5">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>
        {/* Row 02 */}
        <Suspense fallback={<Spinner></Spinner>}>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-9">
              <TechnologyCards
                techPromise={techPromise}
                stack={stack}
                handleAddStack={handleAddStack}
              ></TechnologyCards>
            </div>
            <div className="col-span-12 lg:col-span-3">
              <StackSidebar
                techPromise={techPromise}
                stack={stack}
                handleRemoveStack={handleRemoveStack}
                handleRemoveAllStack={handleRemoveAllStack}
              ></StackSidebar>
            </div>
          </div>
        </Suspense>
      </div>
    </section>
  );
}
