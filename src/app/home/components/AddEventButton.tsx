import React from "react";
import Link from "next/link";
import { Emoji } from "emoji-picker-react";

interface AddEventButtonProps {}

const AddEventButton: React.FC<AddEventButtonProps> = ({}) => {
  return (
    <Link href="/schedule/add">
      <div
        id="add-button"
        className="rounded-lg p-4 shadow-md text-black shadow-sm flex flex-col items-center justify-center cursor-pointer text-white shadow-lg"
        style={{ backgroundColor: "#2B2B2B", height: 240, width: 200 }}
      >
        <div className="pb-2">
          <Emoji unified="1f195" size={50} />
        </div>
        <p>Add. Evento</p>
      </div>
    </Link>
  );
};

export default AddEventButton;
