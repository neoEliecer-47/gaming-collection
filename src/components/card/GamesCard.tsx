

import { gamesCardProps } from "@/types"
import Image from "next/image"
import { Suspense } from "react"

const GamesCard = ({ gamesData }: gamesCardProps) => {
    console.log('GAMES DATA',gamesData)
  return (
    <section>
        <Suspense fallback={<p>Loading...</p>}>
        <h4>{gamesData.name}</h4>
      
        <figure className="w-full h-[12rem]">
          <Image src={gamesData.background_image} alt={gamesData.name} width={300} height={350} objectFit='cover' />
        </figure>
        </Suspense>
    </section>
  )
}

export default GamesCard