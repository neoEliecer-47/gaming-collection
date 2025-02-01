import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const gameId =''
  try {
    const gamesData = await fetch(
      `https://api.rawg.io/api/games/${gameId}/movies?key=${process.env.NEXT_PUBLIC_API_KEY}`,
      {
        cache: "force-cache",
      }
    );
    if (!gamesData.ok)
      throw new Error("Failed to fetch game movies from external API");
const data = await gamesData.json()
   

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong trying to fetch game movies" },
      { status: 500 }
    );
  }
}