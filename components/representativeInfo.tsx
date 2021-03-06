import classNames from "classnames";
import React from "react";
import Modal from "react-modal";
import Data, { Representative } from "../utils/data";
import RepUtils from "../utils/repUtils";
import { LinkButton } from "./buttons";

const MODAL_STYLES = {
  overlay: {
    background: "#00000088",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "",
    padding: 0,
  },
};

export default function RepresentativeInfo({
  rep,
  onClose,
}: {
  rep: Representative;
  onClose: () => void;
}) {
  const highlightElectionYear = rep.election_year === Data.NEXT_ELECTION_YEAR;

  return (
    <Modal
      isOpen={true}
      style={MODAL_STYLES}
      onRequestClose={onClose}
      contentLabel={`Representaive ${rep.name}`}
    >
      <div className="shadow-lg border p-4">
        <div className="grid justify-items-end">
          <img
            className="w-5 cursor-pointer"
            src="/close-button.png"
            onClick={onClose}
          />
        </div>
        <div className="flex flex-col items-center space-y-8 p-4 pl-8 pr-8">
          <img className="w-40 rounded-full shadow-md border" src={rep.image} />

          <div className="text-center">
            <h1 className="text-4xl font-bold">{rep.name}</h1>
            <p className="text-gray-500">
              <i>
                {RepUtils.roleDescription(rep)} for {rep.state_name}{" "}
                {rep.type === "House" ? `(${rep.seat})` : null}
              </i>
            </p>
          </div>
          <div className="w-full text-center">
            Up for re-election in{" "}
            <span
              className={classNames({
                "text-red-600": highlightElectionYear,
                "font-bold": highlightElectionYear,
              })}
            >
              {rep.election_year}
            </span>
            . Previous win margin {RepUtils.getWinMargin(rep)}.
          </div>
          <div className="w-full text-left font-bold text-xl space-y-2">
            <div>Take Action</div>
            <div>
              <LinkButton text="Donate via Act Blue" href={rep.act_blue_url} />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
