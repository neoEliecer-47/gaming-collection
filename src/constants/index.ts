import windowsSrc from '../assets/platforms/windows.avif'
import linuxSrc from '../assets/platforms/linux.avif'
import appleSrc from '../assets/platforms/apple.avif'
import androidSrc from '../assets/platforms/android.avif'
import playstationSrc from '../assets/platforms/ps.avif'
import xboxSrc from '../assets/platforms/xbox.avif'
import nintendoSrc from '../assets/platforms/nintendo.avif'
import { platformsProps } from '@/types'


export const platformsImages: platformsProps[] = [
    {slug: 'pc', imgSrc: windowsSrc},
    {slug: 'ios', imgSrc: appleSrc},
    {slug: 'linux', imgSrc: linuxSrc},
    {slug: 'playstation', imgSrc: playstationSrc},
    {slug: 'xbox', imgSrc: xboxSrc},
    {slug: 'nintendo', imgSrc: nintendoSrc},
    {slug: 'android', imgSrc: androidSrc},
]