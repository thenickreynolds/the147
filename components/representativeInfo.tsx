import React from "react";
import Modal from "react-modal";
import { Representative } from "../utils/data";
import RepUtils from "../utils/repUtils";
import { LinkButton } from "./buttons";

const MODAL_STYLES = {
  overlay: {
    background: "#ffffffee",
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
        <div className="flex flex-col items-center space-y-8 ml-10 mr-10">
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
          <div className="w-full text-left font-bold text-xl space-y-2">
            <div>Take Action</div>
            <div>
              <LinkButton text="Donate via Act Blue" href={rep.donate_url} />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
