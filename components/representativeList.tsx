import React from "react";
import { Representative } from "../utils/data";
import RepresentativeCard from "./representativeCard";

export default function RepresentativeList({
  reps,
  title,
}: {
  reps: Representative[];
  title?: string | null;
}) {
  return (
    <>
      {title ? (
        <h2 className="lg:text-2xl md:text-xl text-xl lg:mx-auto font-serif font-bold">
          {title}
        </h2>
      ) : null}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {reps.map((rep) => (
          <RepresentativeCard rep={rep} key={rep.name} />
        ))}
      </div>
    </>
  );
}
