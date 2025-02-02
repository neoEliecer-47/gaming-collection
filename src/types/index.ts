import { StaticImageData } from "next/image";

export type gamesCardProps = {
  gamesData: games;
};

export type PlatformCardImagesProps = {
  platforms: parentPlatforms[];
};

export type platformsProps = {
  slug: string;
  imgSrc: StaticImageData;
};

export interface games {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  parent_platforms: parentPlatforms[];
  short_screenshots: screenshots[];
  released: string;
  description: string;
}

export type sliderImagesProps = {
  images: screenshots[];
};

export type parentPlatforms = {
  platform: {
    slug: string;
  };
};

export interface screenshots {
  id: number;
  image: string;
}

export type imageCarousel = {
  images: screenshots[];
};

export type videoPreviewProps = {
  videoData: videos[];
};

interface videos {
  id: number;
  data: {
    "480": string;
    max: string;
  };
}

export type gameDetailsProps = {
  gameDetailsData: games;
};

interface gameDetails {
  name: string;
  description: string;
  background_image: string;
}

export type multimediaGameContent = {
  id: number;
  images: screenshots[];
};
