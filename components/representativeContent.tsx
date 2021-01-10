import { useState } from "react";
import { useEffect } from "react";
import Loader from "./loader";
import RepresentativeList from "./representativeList";
import Data, { RepresentativeType } from "../utils/data";

function filterToSet(filter: string): Set<RepresentativeType> {
  switch (filter) {
    case "House":
      return new Set<RepresentativeType>(["House"]);
    case "Senate":
      return new Set<RepresentativeType>(["Senate"]);
    default:
      return new Set<RepresentativeType>(["House", "Senate"]);
  }
}

export default function RepresentativeContent() {
  const [typeFilter, setTypeFilter] = useState(
    new Set<RepresentativeType>(filterToSet(""))
  );
  const [isLoading, setIsLoading] = useState(true);
  const [stateXX, setStateXX] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/location")
      .then((res) => res.json())
      .then((location) => {
        setStateXX(location.region);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return (
      <div className="grid justify-items-center">
        <Loader />
      </div>
    );
  }

  const allReps = Data.MEMBERS_OF_CONGRESS.filter((rep) =>
    typeFilter.has(rep.type)
  );
  const stateReps = !stateXX
    ? []
    : allReps.filter((r) => r.state_xx.toUpperCase() === stateXX.toUpperCase());

  return (
    <>
      <div className="text-l grid justify-items-center">
        <div>
          <label className="flex items-center font-bold">
            Filter
            <select
              className="ml-2 block w-full p-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none"
              onChange={(e) => setTypeFilter(filterToSet(e.target.value))}
            >
              <option value={undefined}>Both</option>
              <option value={"House"}>House</option>
              <option value={"Senate"}>Senate</option>
            </select>
          </label>
        </div>
      </div>
      {stateXX && stateReps.length > 0 ? (
        <RepresentativeList
          reps={stateReps}
          title={`Representatives in ${stateXX}`}
        />
      ) : null}
      <RepresentativeList reps={allReps} title="All Representatives" />
    </>
  );
}
