import { StaticImageData } from "next/image";

export type gamesCardProps = {
    gamesData: games;
}

export type PlatformCardImagesProps = {
    platforms: parentPlatforms[];
}

export type platformsProps = {
    slug: string;
    imgSrc: StaticImageData;
}

export interface games {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: parentPlatforms[];
    short_screenshots: screenshots[]
}

export type sliderImagesProps = {
    images: screenshots[]
}

export type parentPlatforms = {
    platform: {
        slug: string;
    };
}

interface screenshots {
    id: number,
    image: string
}