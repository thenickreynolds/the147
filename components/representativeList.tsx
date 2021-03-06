import React from "react";
import { Representative } from "../utils/data";
import RepresentativeCard from "./representativeCard";

export default function RepresentativeList({
  reps,
  title,
  onSelect,
}: {
  reps: Representative[];
  title?: string | null;
  onSelect: (rep: Representative) => void;
}) {
  return (
    <>
      {title ? (
        <h2 className="lg:text-2xl md:text-xl text-xl lg:mx-auto font-serif font-bold">
          {title}
        </h2>
      ) : null}
      {reps.length === 0 ? (
        <div className="grid justify-items-center text-xl font-bold">
          No results
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {reps.map((rep) => (
            <RepresentativeCard
              rep={rep}
              key={rep.name}
              onClick={() => onSelect(rep)}
            />
          ))}
        </div>
      )}
    </>
  );
}
