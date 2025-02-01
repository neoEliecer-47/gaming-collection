'use client'

import { imageCarousel, screenshots } from "@/types"
import Image from "next/image"
import { useEffect, useState } from "react"

const ImageCarousel = ({ images }: imageCarousel) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0)
console.log('first', images)
    useEffect(()=>{
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, 5000);

        return ()=> clearInterval(interval)
    },[images.length])
  
  
  return (
    <div className="relative w-full h-[300px] overflow-hidden">
        <div style={{ transform: `translateX(-${currentIndex * 100}%)` }} className="flex transition-all duration-500">
            {images.map(({ id, image }, index)=> (
                <div key={id} className="min-w-full relative">
                    <Image src={image} alt='asas' width={300} height={350} priority={index === 0} className="object-cover w-full h-auto"/>
                </div>
            ))}
        </div>


        <section>dots here...</section>
    </div>
  )
}

export default ImageCarousel