import { mainCollectionsFilters } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import { SetStateAction } from "react"


const GamesCollection = ({ onClose }: { onClose: ()=>void }) => {
  return (
    <div>
        {mainCollectionsFilters.map(({ id, imgSrc, name })=>(
            <Link href={`/collections/${name}`} onClick={onClose} key={id} className="flex gap-4 border-white/10 border-[1px] p-2" passHref>
            <Image src={imgSrc} alt={name} width={50} height={50} className="h-auto w-auto"/>
            <p className="p-0 m-0 flex items-center  text-white text-xl capitalize">{name}</p>
            </Link>
        ))}
    </div>
  )
}

export default GamesCollection