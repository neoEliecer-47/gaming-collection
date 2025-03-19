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
  metacritic: number;
  genres: genres[]
  developers: developers[];
  publishers: publishers[];
  esrb_rating: rating[]
}

export type sliderImagesProps = {
  images: screenshots[];
};

export type parentPlatforms = {
  platform: {
    slug: string;
    name: string;
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
  //images: screenshots[];
};

export type gameAttributesProps = {
  platforms: parentPlatforms[]
  released: string;
  metacritic: number;
  genres: genres[]
  developers: developers[];
  publishers: publishers[];
  esrb_rating: rating[]

}

interface genres {
  id: number;
  name: string
}

interface developers {
  id: number;
  name: string;
}

interface publishers {
  id: number;
  name: string;
}

interface rating {
  id: number;
  name: string;
}


export type achievementsProps = {
  trophies: achievements[]
}

interface achievements {
  id: number;
  name: string;
  description: string;
  image: string;
  percent: string;
}

export type navbarProps = {
  titles: string[];
  activeOptionIndex: number;
  updateOptionIndex: React.Dispatch<React.SetStateAction<number>>;
};

export type FavoriteGameSlice = {
  id: number;
  name: string;
  parent_platforms: parentPlatforms[];
  short_screenshots: screenshots[];
}


export type gamesSearchedList = {
  name: string;
  parent_platforms: parentPlatforms[]
  background_image: string;
  slug: string;
}

export type searchParamsProps = {
  searchParams: Promise<params>;
};


interface params {
  query: string;
}

// export type collectionProps = {
//   collection: collection
// }

export interface collectionProps {
  id: number;
  name: string;
  slug: string;
  image_background: string;
  games_count?: number;
  games: Array<{
    id: number;
    name: string;
    slug: string;
    added: number;
  }>
}


export type collectionType = 'developers' | 'genres' | 'platforms' | 'tags' | 'publishers' | 'stores'
