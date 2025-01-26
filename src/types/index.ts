import { StaticImageData } from "next/image";

export type gamesCardProps = {
    gamesData: games;
}

export interface games {
    id: number;
    name: string;
    background_image: string;
}