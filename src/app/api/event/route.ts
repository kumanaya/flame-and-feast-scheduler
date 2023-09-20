import { NextResponse } from "next/server";

const initialEvents = [
  {
    emoji: "1f37b",
    title: "Happy Hour",
    date: "21/09",
    participants: 10,
    totalRaised: 20,
  },
];

export async function GET(request: Request) {
  return NextResponse.json(initialEvents);
}
