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
    <div>
        <button onClick={handlePrevImage}>prev</button>
        <div className="flex transition-all">
        {images.map(({ image, id }, index)=>(
            <figure>{/*  shows the current (index === currentIndex) image only */}
                {index === currentIndex && (
                <Image key={id} src={image} alt="image" width={300} height={350} style={{ objectFit: 'contain' }}/>
            )}
            </figure>
        ))}
        </div>
        <button onClick={handleNextImage}>next</button>
    </div>
  )
}

export default SliderImages