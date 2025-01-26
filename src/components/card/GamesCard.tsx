import { gamesCardProps } from "@/types";
import Image from "next/image";


const GamesCard = ({ gamesData }: gamesCardProps) => {
  console.log("GAMES DATA", gamesData);
  return (
    <section className="bg-gray-700 rounded-md mb-6 overflow-hidden">
      
        <figure className="w-full h-[12.5rem]">
          <Image
            src={gamesData.background_image}
            alt={gamesData.name}
            className="w-full h-full"
            width={300}
            height={350}
            objectFit="contain"
          />
        </figure>
        <h4 className="text-white">{gamesData.name}</h4>

      
    </section>
  );
};

export default GamesCard;
