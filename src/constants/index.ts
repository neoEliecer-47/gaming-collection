import windowsSrc from '../assets/platforms/windows.avif'
import linuxSrc from '../assets/platforms/linux.avif'
import appleSrc from '../assets/platforms/apple.avif'
import androidSrc from '../assets/platforms/android.avif'
import playstationSrc from '../assets/platforms/ps.avif'
import xboxSrc from '../assets/platforms/xbox.avif'
import nintendoSrc from '../assets/platforms/nintendo.avif'
import segaSrc from '../assets/platforms/sega-2.avif'
import webSrc from '../assets/platforms/web.avif'
import commodoreSrc from '../assets/platforms/commodore-amiga.avif'
import atariSrc from '../assets/platforms/atari.avif'
import doSrc from '../assets/platforms/3DO_Logo.svg.avif'
import { platformsProps } from '@/types'

import platinumSrc from '../assets/trophies/platinum.avif'
import goldSrc from '../assets/trophies/gold.avif'
import silverSrc from '../assets/trophies/silver.avif'
import bronceSrc from '../assets/trophies/bronce.avif'

import devSrc from '../assets/collections/developers.avif'
import genresSrc from '../assets/collections/genres.avif'
import platSrc from '../assets/collections/platforms.avif'
import storesSrc from '../assets/collections/stores.avif'
import tagsSrc from '../assets/collections/tags.avif'
import publiSrc from '../assets/collections/publishers.avif'


export const platformsImages: platformsProps[] = [
    {slug: 'pc', imgSrc: windowsSrc},
    {slug: 'ios', imgSrc: appleSrc},
    {slug: 'linux', imgSrc: linuxSrc},
    {slug: 'playstation', imgSrc: playstationSrc},
    {slug: 'xbox', imgSrc: xboxSrc},
    {slug: 'nintendo', imgSrc: nintendoSrc},
    {slug: 'android', imgSrc: androidSrc},
    {slug: 'sega', imgSrc: segaSrc},
    {slug: 'web', imgSrc: webSrc},
    {slug: 'commodore-amiga', imgSrc: commodoreSrc},
    {slug: 'atari', imgSrc: atariSrc},
    {slug: '3do', imgSrc: doSrc},
]


export const trophiesImages = [
    {image: platinumSrc},
    {image: goldSrc},
    {image: silverSrc},
    {image: bronceSrc},
]


export const mainPlatformsFilters = [
    {name: 'PC', id: 4, platforms: []},
    {name: 'playStation', id: 0, platforms: [{ name: 'playStation 4', id: 18 }, { name: 'playStation 5', id: 187 }]},
    {name: 'xbox', id: 0, platforms: [{ name: 'xbox one', id: 1 }, { name: 'xbox series s/x', id: 186 }]},
    {name: 'nintendo', id: 0, platforms: [{ name: 'nintendo switch', id: 7 }, { name: 'nintendo 3ds', id: 8 }]},
    {name: 'iOS', id: 3, platforms: []},
    {name: 'android', id: 21, platforms: []},
    {name: 'apple macintosh', id: 5, platforms: []},
    {name: 'linux', id: 6, platforms: []},
   
    
]


export const mainOrderingFilters = [
    {name: 'name', id: 'name', platforms: []},
    {name: 'released', id:'-released', platforms: []},
    {name: 'rating', id: '-rating', platforms: []},
    {name: 'metacritic', id: '-metacritic', platforms: []},
    {name: 'created', id: '-created', platforms: []},
    {name: 'updated', id: '-updated', platforms: []},
   
   
    
]


export const mainCollectionsFilters = [
    { name: 'developers', id: 1, imgSrc: devSrc },
    { name: 'genres', id: 2, imgSrc: genresSrc},
    { name: 'platforms', id: 3, imgSrc: platSrc},
    { name: 'stores', id: 4, imgSrc: storesSrc},
    { name: 'tags', id: 5, imgSrc: tagsSrc},
    { name: 'publishers', id: 6, imgSrc: publiSrc},
]


export const storesData = [
    { id: 1, name: 'steam' },
    { id: 3, name: 'PlayStation Store' },
    { id: 2, name: 'Xbox Store' },
    { id: 4, name: 'App Store' },
    { id: 5, name: 'GOG' },
    { id: 6, name: 'Nintendo Store' },
    { id: 7, name: 'Xbox 360 Store' },
    { id: 8, name: 'Google Play' },
    { id: 9, name: 'itch.io' },
    { id: 11, name: 'Epic Games' },
   
]


export const platformsData = [
    { id: 4, name: 'PC' },
    { id: 187, name: 'PlayStation 5' },
    { id: 2, name: 'Xbox Store' },
    { id: 4, name: 'App Store' },
    { id: 5, name: 'GOG' },
    { id: 6, name: 'Nintendo Store' },
    { id: 7, name: 'Xbox 360 Store' },
    { id: 8, name: 'Google Play' },
    { id: 9, name: 'itch.io' },
    { id: 11, name: 'Epic Games' },
   
]