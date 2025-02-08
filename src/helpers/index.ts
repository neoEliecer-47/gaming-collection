
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


export async function fetchGameVideos(gameId: number) {
  try {
    const gameVideosData = await fetch(`https://api.rawg.io/api/games/${gameId}/movies?key=${process.env.NEXT_PUBLIC_API_KEY}`, {
      cache: 'no-store'
    })

    const data = await gameVideosData.json()
    return data
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
      cache: 'force-cache'
    })

    const data = await gamesSearched.json()
    return data
  } catch (error) {
    
  }
}