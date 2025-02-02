
import { multimediaGameContent } from '@/types'


import ImageCarousel from '../interface/ImageCarousel'
import { fetchGameVideos } from '@/helpers'
import GameVideoPreview from '../interface/GameVideoPreview'

const MultimediaGameContent = async({ id, images }: multimediaGameContent) => {
  const gameVideos = await fetchGameVideos(id)
  console.log('first',gameVideos)
    return (
    
         <>
          {gameVideos.results?.length > 0 ? (
            <GameVideoPreview videoData={gameVideos.results}/>
          ): (
            <ImageCarousel images={images}/> 
          )}
         </>
    
  )
}

export default MultimediaGameContent