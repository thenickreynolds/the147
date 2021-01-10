import { useState } from "react";
import { useEffect } from "react";
import Loader from "./loader";
import RepresentativeList from "./representativeList";
import Data from "../utils/data";

export default function RepresentativeContent() {
  const [isLoading, setIsLoading] = useState(true);
  const [locationStateXX, setLocationStateXX] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/location")
      .then((res) => res.json())
      .then((location) => {
        setLocationStateXX(location.region);
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

  const stateReps = !locationStateXX
    ? []
    : Data.MEMBERS_OF_CONGRESS.filter(
        (rep) => rep.state_xx.toUpperCase() === locationStateXX.toUpperCase()
      );

  return (
    <>
      {locationStateXX ? (
        <RepresentativeList
          reps={stateReps}
          title={`Representatives in ${locationStateXX}`}
        />
      ) : null}
      <RepresentativeList
        reps={Data.MEMBERS_OF_CONGRESS}
        title="All Representatives"
      />
    </>
  );
}
