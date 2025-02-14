import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const query = req.nextUrl.searchParams; //params to get the filterType
  const collectionType = query.get("collectionType");
  const page = query.get("page");
//   console.log('HEREEE')
//   console.log('filters route', filterType)
  try {
    const collectionsData = await fetch(
      `https://api.rawg.io/api/${collectionType}?key=${process.env.NEXT_PUBLIC_API_KEY}&page=${page}`,
      {
        cache: "force-cache",
      }
    );
    if (!collectionsData.ok)
      throw new Error("Failed to fetch collection data from external API");
const data = await collectionsData.json()
   

    return NextResponse.json(data.results, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong trying to fetch all collections data" },
      { status: 500 }
    );
  }
}