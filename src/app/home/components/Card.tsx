import React from "react";
import Link from "next/link";
import { Emoji } from "emoji-picker-react";

interface CardProps {
  id: string;
  emoji: string;
  title: string;
  date: string;
  description?: string;
  participants: number;
  totalRaised: number;
}

const Card: React.FC<CardProps> = ({
  id,
  emoji,
  title,
  date,
  description,
  participants,
  totalRaised,
}) => {
  return (
    <Link href={`/schedule/${id}`}>
      <div

        className="card bg-white rounded-lg p-4 shadow-md text-black shadow-sm"
        style={{ border: "1px solid #ccc", height: 240, width: 200 }}
      >
        <div className="pt-3 pb-2">
          <Emoji unified={emoji} size={35} />
        </div>
        <div className="flex flex-col" style={{ height: "60%" }}>
          <h2 className="text-xl font-bold">{title}</h2>
          <p>{date}</p>
          {description && <p>{description}</p>}
        </div>
        <div className="h-1/4 flex items-center justify-between">
          <p>{participants}</p>
          <p>R${totalRaised.toFixed(2)}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
