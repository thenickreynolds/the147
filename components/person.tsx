import { Representative } from "../utils/data";

export default function ({ rep }: { rep: Representative }) {
  return (
    <div>
      <img src={rep.image} />
      <div>
        <span>{rep.name}</span>
        {/* <span>{rep.location}</span> */}
      </div>
    </div>
  );
}
