import { Representative } from "../utils/data";

export default function RepresentativeCard({ rep }: { rep: Representative }) {
  return (
    <div className="bg-white rounded shadow-md border border-gray-300 flex bg-clip-border space-x-3 w-80 flex-grow m-2">
      <div className="flex-shrink-0">
        <img className="h-20 w-20" src={rep.image} alt={rep.name} />
      </div>
      <div className="flex flex-col justify-center">
        <div className="text-xl font-medium text-black">
          {rep.name}{" "}
          <span className="text-gray-400">
            ({rep.alignment.charAt(0)}, {rep.location})
          </span>
        </div>
        <p className="text-gray-500">
          {rep.type}, up in {rep.election_year}
        </p>
      </div>
    </div>
  );
}
