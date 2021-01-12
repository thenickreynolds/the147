import classNames from "classnames";
import { Representative } from "../utils/data";

const HIGHLIGHT_YEAR = 2022;

export default function RepresentativeCard({
  rep,
  onClick,
}: {
  rep: Representative;
  onClick: () => void;
}) {
  return (
    <a
      onClick={onClick}
      className="bg-white rounded shadow-md border border-gray-300 flex bg-clip-border space-x-3 hover:shadow-lg transform hover:scale-105 transition cursor-pointer"
    >
      <div className="flex-shrink-0">
        <img className="h-20 w-20" src={rep.image} alt={rep.name} />
      </div>
      <div className="flex flex-col justify-center truncate ...">
        <div className="text-xl font-medium text-black overflow-ellipsis">
          {rep.name}{" "}
          <span className="text-gray-400 ">
            ({rep.alignment.charAt(0)}, {rep.seat ? rep.seat : rep.state_xx})
          </span>
        </div>
        <p
          className={classNames({
            "text-gray-500": true,
            "text-red-600": rep.election_year === HIGHLIGHT_YEAR,
          })}
        >
          {rep.type}, up in {rep.election_year}
        </p>
      </div>
    </a>
  );
}
