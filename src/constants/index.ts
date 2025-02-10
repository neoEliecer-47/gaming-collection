import windowsSrc from '../assets/platforms/windows.avif'
import linuxSrc from '../assets/platforms/linux.avif'
import appleSrc from '../assets/platforms/apple.avif'
import androidSrc from '../assets/platforms/android.avif'
import playstationSrc from '../assets/platforms/ps.avif'
import xboxSrc from '../assets/platforms/xbox.avif'
import nintendoSrc from '../assets/platforms/nintendo.avif'
import { platformsProps } from '@/types'

import platinumSrc from '../assets/trophies/platinum.avif'
import goldSrc from '../assets/trophies/gold.avif'
import silverSrc from '../assets/trophies/silver.avif'
import bronceSrc from '../assets/trophies/bronce.avif'


export const platformsImages: platformsProps[] = [
    {slug: 'pc', imgSrc: windowsSrc},
    {slug: 'ios', imgSrc: appleSrc},
    {slug: 'linux', imgSrc: linuxSrc},
    {slug: 'playstation', imgSrc: playstationSrc},
    {slug: 'xbox', imgSrc: xboxSrc},
    {slug: 'nintendo', imgSrc: nintendoSrc},
    {slug: 'android', imgSrc: androidSrc},
]


export const trophiesImages = [
    {image: platinumSrc},
    {image: goldSrc},
    {image: silverSrc},
    {image: bronceSrc},
]


export const mainPlatformsFilters = [
    {name: 'PC', id: 4, platforms: []},
    {name: 'play station', id: 0, platforms: [{ name: 'play station 4', id: 18 }, { name: 'play station 5', id: 187 }]},
    {name: 'xbox', id: 0, platforms: [{ name: 'xbox one', id: 1 }, { name: 'xbox series s/x', id: 186 }]},
    {name: 'nintendo', id: 0, platforms: [{ name: 'nintendo switch', id: 7 }, { name: 'nintendo 3ds', id: 8 }]},
    {name: 'iOS', id: 3, platforms: []},
    {name: 'android', id: 21, platforms: []},
    {name: 'apple macintosh', id: 1, platforms: []},
    {name: 'linux', id: 6, platforms: []},
   
    
]