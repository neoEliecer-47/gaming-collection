import { NextResponse } from "next/server";

export async function GET() {
  console.log('IT ACCESSED THE API')
  try {
    const gamesData = await fetch(
      `https://api.rawg.io/api/games?key=${process.env.NEXT_PUBLIC_API_KEY}`,
      {
        cache: "no-store",
      }
    );
    if (!gamesData.ok)
      throw new Error("Failed to fetch games data from external API");
const data = await gamesData.json()
   

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong trying to fetch all games data" },
      { status: 500 }
    );
  }
}