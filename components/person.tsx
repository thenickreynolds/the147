import { Representative } from "../utils/data";

export default function ({ rep }: { rep: Representative }) {
  return (
    <div>
      <img src={rep.image} />
      <span>{rep.name}</span>
    </div>
  );
}
