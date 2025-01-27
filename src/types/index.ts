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
}

export type parentPlatforms = {
    platform: {
        slug: string;
    };
}