'use client'
import { multimediaGameContent } from '@/types'
import React from 'react'

import ImageCarousel from '../interface/ImageCarousel'

const MultimediaGameContent = ({ id, images }: multimediaGameContent) => {
  //console.log(images)//create carrusel
    return (
    
         <ImageCarousel images={images}/> 
    
  )
}

export default MultimediaGameContent