import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const gameSlug =''
  try {
    const gamesData = await fetch(
      `https://api.rawg.io/api/games/${gameSlug}?key=${process.env.NEXT_PUBLIC_API_KEY}`,
      {
       
      }
    );
    if (!gamesData.ok)
      throw new Error("Failed to fetch game data from external API");
const data = await gamesData.json()
   

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong trying to fetch the game data" },
      { status: 500 }
    );
  }
}