import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  return NextResponse.json({
    message: "Formulário enviado com sucesso",
  });
}

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const initialPeoples = {
    emoji: "1f43c",
    title: "Daniel K.",
    date: "20/09",
    description: "Evento para celebrar a mais nova contratação",
    priceWithDrink: 50.0,
    priceWithoutDrink: 25.0,
    rows: [],
  };

  return NextResponse.json(initialPeoples);
}

export async function PUT(req: NextApiRequest, res: NextApiResponse) {
  const updatedData = {
    message: "Dados atualizados com sucesso",
  };

  return NextResponse.json(updatedData);
}
