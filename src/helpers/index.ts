import { collectionType } from "@/types";

function buildInitialFetch(){

}

export async function fetchGames(searchParams: Record<string, string>) {

  if(searchParams?.query) delete searchParams.query

  //convert search params into query string
  const query = new URLSearchParams()
  
  //loop throught searchParams and append to query
  Object?.entries(searchParams).forEach(([key, value])=>{
    if(value) query.append(key, value)
  })
  //console.log('fetchGamesQuery', query.toString())
    try {
        const gamesData = await fetch(
            `https://api.rawg.io/api/games?key=${process.env.NEXT_PUBLIC_API_KEY}&${query.toString()}`,
         
          );
          if (!gamesData.ok)
            throw new Error("Failed to fetch games data from external API");
      const data = await gamesData.json()
      return data
    } catch (error) {
        console.log(error)
    }
}


export async function fetchTopGames(searchParams: Record<string, string>) {
 //best games in 2024 --->  //https://rawg.io/api/games/lists/greatest?year=2024&discover=true&ordering=-added&page_size=20&page=1&key=c542e67aec3a4340908f9de9e86038af
 //best of the year --- >  https://rawg.io/api/games/lists/greatest?discover=true&ordering=-added&page_size=20&page=1&key=c542e67aec3a4340908f9de9e86038af 
  const currentPage = searchParams.page || 1
  console.log('hereeeeeeeeeeeeeeeee')
  try {
    const gamesData = await fetch(
      `https://rawg.io/api/games/lists/${searchParams.top_games ? 'popular' : 'greatest'}?discover=true&&page_size=20&page=${currentPage}&key=${process.env.NEXT_PUBLIC_API_KEY}`,
    );

    if (!gamesData.ok)
      throw new Error("Failed to fetch Top games");

    const data = await gamesData.json();
    console.log('data top games', data)
    return data;
  } catch (error) {
    console.log(error);
  }
}


export async function fetchGameDetails(slug: string) {
  try {
    const gameDetailData = await fetch(`https://api.rawg.io/api/games/${slug}?key=${process.env.NEXT_PUBLIC_API_KEY}`, {
      //cache: 'no-store' //<-- for SSR --> without it is SSG (static side generation)
      //next: { revalidate: 60 }
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
    return data.results
  } catch (error) {
    console.log(error)
  }
}


export async function fetchGameVideos(gameId: number) {
  try {
    const gameVideosData = await fetch(`https://api.rawg.io/api/games/${gameId}/movies?key=${process.env.NEXT_PUBLIC_API_KEY}`, {
      cache: 'no-store'
    })

    const data = await gameVideosData.json()
    return data.results
  } catch (error) {
    
  }
}

export async function fetchGameAchievements(gameId: number) {
  try {
    const gameAchievementsData = await fetch(`https://api.rawg.io/api/games/${gameId}/achievements?key=${process.env.NEXT_PUBLIC_API_KEY}`, {
      cache: 'no-store'
    })

    const data = await gameAchievementsData.json()
    return data
  } catch (error) {
    
  }
}

export async function fetchGamesSearchedByQuery(query: string) {
  try {
    const gamesSearched = await fetch(`https://api.rawg.io/api/games?key=${process.env.NEXT_PUBLIC_API_KEY}&search=${query}`, {
      //SSG instead of SSR
    })

    const data = await gamesSearched.json()
    return data
  } catch (error) {
    
  }
}

export async function fetchGamesCollection(type: collectionType) {
  try {
    const gamesCollection = await fetch(`https://api.rawg.io/api/${type}?key=${process.env.NEXT_PUBLIC_API_KEY}`, {
      //SSG instead of SSR
      cache: 'no-store'
    })

    const data = await gamesCollection.json()
    return data
  } catch (error) {
    
  }
}


export async function fetchPlatforms(id: string){
  try {
    const platforms = await fetch(`https://api.rawg.io/api/platforms/${id}?key=${process.env.NEXT_PUBLIC_API_KEY}`, {
      
    })

    const data = await platforms.json()
    return data
  } catch (error) {
    
  }
}