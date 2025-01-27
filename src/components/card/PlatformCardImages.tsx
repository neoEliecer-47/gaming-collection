import { platformsImages } from "@/constants"
import { PlatformCardImagesProps } from "@/types"
import Image, { StaticImageData } from "next/image"


const PlatformCardImages = ({ platforms }: PlatformCardImagesProps) => {


     function buildImgSrc(slug: string): StaticImageData{
        if(slug === 'mac') return platformsImages[1].imgSrc as StaticImageData
         return platformsImages.find((p) => p.slug === slug)?.imgSrc as StaticImageData
     }

  return (
    <div className="flex justify-start items-center gap-[0.4rem]">
       {platforms.map(({ platform }) => (
        <Image src={buildImgSrc(platform.slug)} alt={platform.slug} width={20} height={20} className="rounded-md"/>
      ))} 
      </div>   
  )
}

export default PlatformCardImages