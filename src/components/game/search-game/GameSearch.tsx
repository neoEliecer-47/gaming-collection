

import { gamesSearchProps } from "@/types"
import { useState } from "react"
import Search from "./Search"

const GameSearch = () => {
    // const [query, setQuery] = useState<string>('')
    // const [games, setGames] = useState<gamesSearchProps | []>([])
  return (
    <div className="p-0 m-0">
         <Search />
    </div>
  )
}

export default GameSearch