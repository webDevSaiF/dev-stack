import { LiaTimesSolid } from "react-icons/lia";
import type { ITech } from "../../types/types";

interface StackProps {
  tech: ITech;
  onRemove: () => void;
}
export default function Stack({ tech, onRemove }: StackProps) {
  return (
    <div className="p-3 border border-[#E2E8F0] rounded-lg flex items-center justify-between mt-1">
      <div className="flex items-center gap-2.5">
        <img src={tech.icon} alt={`${tech.name} icon`} className="w-7 h-7" />
        <div>
          <p className="text-[#0F172A] font-bold text-xs leading-[1.3]">
            {tech.name}
          </p>
          <p className="text-[10px] text-[#94A3B8] font-bold">
            {tech.category}
          </p>
        </div>
      </div>
      <button
        className="cursor-pointer text-[#94A3B8] hover:text-red-400 text-2xl"
        onClick={onRemove}
      >
        <LiaTimesSolid />
      </button>
    </div>
  );
}
