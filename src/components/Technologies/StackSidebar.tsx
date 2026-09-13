import { use } from "react";
import type { ITech, TechPromise } from "../../types/types";
import Stack from "./Stack";

interface StackSidebarProps {
  techPromise: TechPromise;
  stack: ITech[];
  handleRemoveStack: (id: string) => void;
  handleRemoveAllStack: () => void;
}

export default function StackSidebar({
  techPromise,
  stack,
  handleRemoveStack,
  handleRemoveAllStack,
}: StackSidebarProps) {
  const techs = use<ITech[]>(techPromise);
  console.log(techs);

  return (
    <div className="rounded-xl border border-[#F1F5F9] bg-white p-6 sticky top-[90px]">
      <h3 className="text-[#0F172A] font-bold text-base leading-1.5">
        Your Stack
      </h3>
      <p className="my-4 text-[#94A3B8] font-normal text-xs leading-[1.33]">
        {stack.length
          ? `${stack.length} Technology Selected.`
          : `No technologies selected yet.`}
      </p>
      {stack.length ? (
        <>
          <div>
            {stack.map((tech: ITech) => {
              return (
                <Stack
                  key={tech.id}
                  tech={tech}
                  onRemove={() => handleRemoveStack(tech.id)}
                ></Stack>
              );
            })}
          </div>
          <button
            className="cursor-pointer rounded-lg text-[#D82C20] border border-[#ED8C85] p-2 w-full mt-12 font-heading font-semibold text-sm leading-[1.14] hover:bg-[#D82C20] hover:text-white transition"
            onClick={handleRemoveAllStack}
          >
            Remove All
          </button>
        </>
      ) : (
        <div className="border-2 border-dashed border-[#E2E8F0] rounded-xl p-6">
          <p className="text-center font-normal text-xs leading-[1.33] text-[#94A3B8]">
            Your stack is empty.
          </p>
        </div>
      )}
    </div>
  );
}
