import { trophiesImages } from '@/constants'
import { achievementsProps } from '@/types'
import Image, { StaticImageData } from 'next/image'


const GameAchievements = ({ trophies }: achievementsProps) => {

    function buildTrophieImg(index: number, percent: string){
        if(index === 0){
            return trophiesImages[index].image as StaticImageData
        }
        return trophiesImages[1].image as StaticImageData
    }

  return (
    <>
    <h1>Achievements</h1>
    <div className='flex flex-col w-full h-full gap-4 '>
        {trophies.map(({ description, id, image, name, percent }, index)=>(
            <div key={id} className='flex gap-2 border-y-gray-200 border bg-white/10'>
                <figure className='flex m-auto p-0 h-[5rem] w-[5rem]'>
                    <Image src={image} alt='achievement' width={100} height={100} className='w-full h-full' objectFit='contain'/>
                </figure>
                <div className='flex-1 text-white  mx-1'>
                    <h1>{name}</h1>
                    <h4 className='text-xs'>{description}</h4>
                    <div className='flex gap-1'>
                        <Image src={buildTrophieImg(index, percent)} alt='trophie' width={20} height={20}/>
                        <p className='p-0 text-white'>{percent}</p>
                    </div>
                </div>
            </div>
        ))}
    </div>
    </>
  )
}

export default GameAchievements