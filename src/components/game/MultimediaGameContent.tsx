'use client'
import { multimediaGameContent } from '@/types'
import React from 'react'
import SliderImages from '../card/SliderImages'

const MultimediaGameContent = ({ id, images }: multimediaGameContent) => {
  console.log(images)//create carrusel
    return (
    <div>
         <SliderImages images={images}/> 
    </div>
  )
}

export default MultimediaGameContent