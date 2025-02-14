import { fetchGamesCollection } from "@/helpers"


const page = async() => {
  const gamesDevelopersData = await fetchGamesCollection('developers')
  
    return (
    <div>page</div>
  )
}

export default page