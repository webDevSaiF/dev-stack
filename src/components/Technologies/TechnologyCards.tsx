import { use } from "react";
import type { ITech, TechPromise } from "../../types/types";
import TechnologyCard from "./TechnologyCard";

interface TechCardsProps {
  techPromise: TechPromise;
  stack: ITech[];
  handleAddStack: (tech: ITech) => void;
}
export default function TechnologyCards({
  techPromise,
  stack,
  handleAddStack,
}: TechCardsProps) {
  const techs = use<ITech[]>(techPromise);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {techs.map((tech: ITech) => {
        return (
          <TechnologyCard
            key={tech.id}
            tech={tech}
            stack={stack}
            handleAddStack={handleAddStack}
          ></TechnologyCard>
        );
      })}
    </div>
  );
}
