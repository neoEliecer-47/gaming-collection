import { trophiesImages } from "@/constants";
import { achievementsProps } from "@/types";
import Image, { StaticImageData } from "next/image";

const GameAchievements = ({ trophies }: achievementsProps) => {
  function buildTrophieImg(index: number, percent: string) {
    if (index === 0) {
      return trophiesImages[index].image as StaticImageData;
    }
    const percentNum = Math.round(Number.parseFloat(percent));
    const imageIndex =
      percentNum < 6.5
        ? 1
        : percentNum >= 6 && percentNum <= 10
        ? 2
        : percentNum > 10
        ? 3
        : 3;
    return trophiesImages[imageIndex].image as StaticImageData;
  }

  return (
    <>
      <h1 className="text-center text-white text-lg">Achievements</h1>
      <div className={`flex flex-col w-full h-[25rem] overflow-x-scroll gap-4 border-4 border-yellow-600 p-2 ${trophies.length === 0 && 'h-[6rem]'}`}>
        {trophies.length === 0 && (<p className="text-white w-full text-center my-auto">No Achievements to show</p>)}
        {trophies.map(({ description, id, image, name, percent }, index) => (
          <div
            key={id}
            className="flex gap-2 border-y-gray-200 border bg-white/10"
          >
            <figure className="flex m-auto p-0 h-[5rem] w-[5rem]">
              <Image
                src={image}
                alt="achievement"
                width={100}
                height={100}
                className="w-full h-full"
                objectFit="contain"
              />
            </figure>
            <div className="flex-1 text-white  mx-1">
              <h1 className="text-center">{name}</h1>
              <h4 className="text-xs">{description}</h4>
              <div className="flex items-center justify-end gap-1">
                <Image
                  src={buildTrophieImg(index, percent)}
                  alt="trophie"
                  width={20}
                  height={20}
                />
                <p className="p-0 text-white">{percent}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GameAchievements;
