'use client'

import { sliderImagesProps } from "@/types"
import Image from "next/image"
import { useState } from "react"


const SliderImages = ({ images }: sliderImagesProps) => {

const [currentIndex, setCurrentIndex] = useState<number>(0)

function handlePrevImage(){
    setCurrentIndex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
}

function handleNextImage(){
    setCurrentIndex((prevIndex) => prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
}


  return (
    <div className="relative overflow-hidden h-full w-full">
        <button className="absolute text-purple-600 top-[50%]" onClick={handlePrevImage}>pre</button>
        <div className="flex transition-all">
        {images.map(({ image, id }, index)=>(
            <>{/*  shows the current (index === currentIndex) image only */}
                {index === currentIndex && (
                <Image key={id} src={image} alt="image" width={300} height={350} className="h-full w-full"/>
            )}
            </>
        ))}
        </div>
        <button className="absolute text-purple-600 right-0 top-[50%]" onClick={handleNextImage}>nxt</button>
    </div>
  )
}

export default SliderImages