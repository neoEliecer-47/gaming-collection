import { gameDetailsProps } from "@/types";
import Image from "next/image";
import Header from "../Header";
import styles from "./GameDetails.module.css";
import classNames from "classnames";
import Link from "next/link";
import PlatformCardImages from "../card/PlatformCardImages";
import { buildDate } from "@/utils";
import MultimediaGameContent from "./MultimediaGameContent";
import { fetchGameImages } from "@/helpers";
import GameAbout from "./GameAbout";

const GameDetails =async ({ gameDetailsData }: gameDetailsProps) => {
 const imagesData = await fetchGameImages(gameDetailsData?.id)
  return (
    <div className="relative w-full min-h-[100vh] bg-black px-2">
      <Header />
      <section className="relative text-white p-2 flex justify-center items-center z-[2] gap-2">
        <Link href='/'>home</Link>
        <span>/</span>
        <Link href='/'>games</Link>
      </section>

      <section className="relative z-[2] flex justify-center gap-4 items-center m-auto ">
        <span className="text-white">{buildDate(gameDetailsData.released)}</span>
        
        <PlatformCardImages platforms={gameDetailsData.parent_platforms}/>
      </section>

      <Image
        src={gameDetailsData.background_image}
        alt="image"
        quality={40}
        fill
        priority
        className="object-cover"
        loading="eager"
      />

      {/* <div className="fixed h-full w-full bg-[rgba(21,21,21)]"></div> */}
      <div
        className="absolute top-0 left-0 w-full h-full z-[1]"//change to 1
        style={{
          background:
            "linear-gradient(rgba(15, 15, 15, 0.5), rgb(21, 21, 21)), linear-gradient(rgba(21, 21, 21, 0.3), rgba(21, 21, 21, 0.9))",
        }}
      ></div>

      <div className="relative w-full flex justify-center items-start mt-4 z-[2]">
        <h1 className="break-words w-[13rem] text-white text-3xl font-bold text-center">
          {gameDetailsData.name}
        </h1>
      </div>

      <section className="relative z-[2] w-full h-[10rem]">
        <MultimediaGameContent id={gameDetailsData.id} images={imagesData.results}/>
      </section>

      <div className="relative z-[2] w-full h-auto mt-[6rem]"> 
        <GameAbout description={gameDetailsData.description}/>
      </div>
    </div>
  );
};

export default GameDetails;
