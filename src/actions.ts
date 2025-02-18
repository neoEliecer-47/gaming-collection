'use server'

export async function fetchCollections(page: number, collectionType: string) {
    const res = await fetch(`https://api.rawg.io/api/${collectionType}?key=${process.env.NEXT_PUBLIC_API_KEY}&page=${page}`, {
        next: { revalidate: 60 }
    })
    if(!res.ok) throw new Error (`failed to fetch collection ${collectionType}`)
    const collectionData = await res.json()
    return collectionData.results
}