import { useState } from "react";
import RepresentativeList from "./representativeList";
import Data, { Representative, RepresentativeType } from "../utils/data";
import RepresentativeInfo from "./representativeInfo";

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
  const [stateXX, setStateXX] = useState("");
  const [selectedRep, setSelectedRep] = useState<Representative | null>(null);

  const validStates = new Set(
    Data.MEMBERS_OF_CONGRESS.map((rep) => rep.state_xx)
  );
  const reps = Data.MEMBERS_OF_CONGRESS.filter((rep) =>
    typeFilter.has(rep.type)
  ).filter(
    (r) => stateXX === "" || r.state_xx.toUpperCase() === stateXX?.toUpperCase()
  );

  return (
    <>
      {selectedRep ? (
        <RepresentativeInfo
          rep={selectedRep}
          onClose={() => setSelectedRep(null)}
        />
      ) : null}
      <div className="text-l grid justify-items-center">
        <div className="flex space-x-8">
          <label className="flex items-center font-bold">
            State
            <select
              className="ml-2 block w-full p-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none"
              onChange={(e) => setStateXX(e.target.value)}
            >
              <option value="">All States</option>
              {Data.ALL_STATES.map((state) => (
                <option
                  value={state}
                  key={state}
                  disabled={!validStates.has(state)}
                >
                  {state}
                </option>
              ))}
            </select>
          </label>
          <label className="flex items-center font-bold">
            Filter
            <select
              className="ml-2 block w-full p-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none"
              onChange={(e) => setTypeFilter(filterToSet(e.target.value))}
            >
              <option value={undefined}>Both</option>
              <option value={"House"}>Only House</option>
              <option value={"Senate"}>Only Senate</option>
            </select>
          </label>
        </div>
      </div>
      <RepresentativeList reps={reps} onSelect={(rep) => setSelectedRep(rep)} />
    </>
  );
}
