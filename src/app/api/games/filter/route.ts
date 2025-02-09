import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const query = req.nextUrl.searchParams; //params to get the filterType
  const filterType = query.get("type");
  console.log('HEREEE')
  console.log('filters route', filterType)
  try {
    const filterData = await fetch(
      `https://api.rawg.io/api/${filterType}?key=${process.env.NEXT_PUBLIC_API_KEY}`,
      {
        cache: "force-cache",
      }
    );
    if (!filterData.ok)
      throw new Error("Failed to fetch games data from external API");
const data = await filterData.json()
   

    return NextResponse.json(data.results, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong trying to fetch all games data" },
      { status: 500 }
    );
  }
}