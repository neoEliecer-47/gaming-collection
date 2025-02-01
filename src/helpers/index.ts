//import { NextRequest } from "next/server";

// export function getBaseUrl(req: Request | NextRequest): string{
   
//     const host = req?.headers.get('host')
//     const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
//     const baseUrl = `${protocol}://${host}`
//     return  baseUrl

// }


export async function fetchGames(page: number) {

    try {
        const gamesData = await fetch(
            `https://api.rawg.io/api/games?key=${process.env.NEXT_PUBLIC_API_KEY}&page=${page}`,
            {
              cache: "force-cache",
              
            }
          );
          if (!gamesData.ok)
            throw new Error("Failed to fetch games data from external API");
      const data = await gamesData.json()
      return data
    } catch (error) {
        console.log(error)
    }
}


export async function fetchGameDetails(slug: string) {
  try {
    const gameDetailData = await fetch(`https://api.rawg.io/api/games/${slug}?key=${process.env.NEXT_PUBLIC_API_KEY}`, {
      cache: 'no-store'
    })

    const data = await gameDetailData.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export async function fetchGameImages(gameId: number) {
  try {
    const gameDetailData = await fetch(`https://api.rawg.io/api/games/${gameId}/screenshots?key=${process.env.NEXT_PUBLIC_API_KEY}`, {
      cache: 'force-cache'
    })

    const data = await gameDetailData.json()
    return data
  } catch (error) {
    console.log(error)
  }
}