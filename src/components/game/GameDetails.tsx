import { gameDetailsProps } from "@/types"
import Image from "next/image"
import Header from "../Header"


const GameDetails = ({ gameDetailsData }: gameDetailsProps) => {
  return (
    <div className="relative z-[2]">
      <Header />
      <Image src={gameDetailsData.background_image} alt="bg" width={500} height={700} className="fixed w-full h-full top-0 left-0 z-0 brightness-[0.3]"/>
    </div>
  )
}

export default GameDetails