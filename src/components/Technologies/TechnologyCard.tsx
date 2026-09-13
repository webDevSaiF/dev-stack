import type { ITech } from "../../types/types";

interface TechCardProps {
  tech: ITech;
  stack: ITech[];
  handleAddStack: (tech: ITech) => void;
}

export default function TechnologyCard({
  tech,
  stack,
  handleAddStack,
}: TechCardProps) {
  const badgeColors: Record<string, string> = {
    Popular: "bg-blue-50 text-blue-600 border border-blue-200",
    Versatile: "bg-emerald-50 text-emerald-600 border border-emerald-200",
    Fast: "bg-orange-50 text-orange-600 border border-orange-200",
    Standard: "bg-emerald-50 text-emerald-600 border border-emerald-200",
    "Top SQL": "bg-blue-50 text-blue-600 border border-blue-200",
    Cache: "bg-red-50 text-red-600 border border-red-200",
    Ubiquitous: "bg-yellow-50 text-yellow-600 border border-yellow-200",
    Essential: "bg-blue-50 text-blue-600 border border-blue-200",
    Robust: "bg-blue-50 text-blue-600 border border-blue-200",
    Modern: "bg-cyan-50 text-cyan-600 border border-cyan-200",
    Containers: "bg-blue-50 text-blue-600 border border-blue-200",
  };
  const isSelected = stack.some((card: ITech) => card.id === tech.id);

  return (
    <article
      className={`p-5 border-2  rounded-2xl bg-white shadow-[0px_2px_10px_-3px_rgba(0,0,0,0.05)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0px_8px_20px_-4px_rgba(0,0,0,0.1) ${isSelected ? "border-brand" : "border-[#F1F5F9]"}`}
    >
      <div className="flex items-start justify-between">
        <div className="p-3 w-fit">
          <img className="w-7 h-7" src={tech.icon} alt={`${tech.name} icon`} />
        </div>
        {tech.badge && (
          <span
            className={`${badgeColors[tech.badge] ?? "bg-gray-50 text-gray-600"} text-xs leading-[1.5] font-semibold py-0.5 px-2.5 rounded-4xl border`}
          >
            {tech.badge}
          </span>
        )}
      </div>

      <h3 className="font-body mt-3 font-bold text-lg leading-[1.55] text-[#0F172A]">
        {tech.name}
      </h3>
      <p className="min-h-[67.17px] mt-1.5 text-[#64748B] text-sm font-normal leading-[1.6]">
        {tech.description}
      </p>

      <hr className="mt-4 border-[#F8FAFC] mb-2" />

      <div className="grid grid-cols-12 items-center justify-between mb-4 ">
        <span className="bg-[#F1F5F980] rounded-sm py-0.5 px-2 text-[#475569] text-[11px] font-medium leading-[1.5] text-center w-fit col-span-3">
          {tech.category}
        </span>
        <span className="text-[#64748B] text-[11px] font-medium leading-[1.5] text-center col-span-6">
          {tech.difficulty}
        </span>
        <span className="text-[#334155] font-semibold leading-[1.5] text-right col-span-3">
          <span className="text-[#FBBF24]">★</span> {tech.rating}
        </span>
      </div>

      <button
        className={`w-full p-2.5 text-center font-medium text-xs leading-[1.33] text-white rounded-lg bg-[#0A0F1D] cursor-pointer  ${
          isSelected && "pointer-events-none opacity-50"
        }`}
        onClick={() => handleAddStack(tech)}
      >
        {isSelected ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </article>
  );
}
