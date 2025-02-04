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

const GameDetails = async ({ gameDetailsData }: gameDetailsProps) => {
  const imagesData = await fetchGameImages(gameDetailsData?.id);
  return (
    <div className="relative w-full min-h-screen px-2 overflow-y-hidden">

      <div className="absolute inset-0 w-full h-[500px] z-[-1]">
        <Image
          src={gameDetailsData.background_image}
          alt="image"
          quality={40}
          layout="fill"
          priority
          objectFit="cover"
          className=" bg-cover"
          loading="eager"
        />
      </div>
      <Header />
      <section className="relative text-white p-2 flex justify-center items-center z-[2] gap-2">
        <Link href="/">home</Link>
        <span>/</span>
        <Link href="/">games</Link>
      </section>

      <section className="relative z-[2] flex justify-center gap-4 items-center m-auto ">
        <span className="text-white">
          {buildDate(gameDetailsData.released)}
        </span>

        <PlatformCardImages platforms={gameDetailsData.parent_platforms} />
      </section>

      {/* <div className="fixed h-full w-full bg-[rgba(21,21,21)]"></div> */}
      <div
        className="absolute top-0 left-0 w-full h-full z-[-1]" //change to 1
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

      <MultimediaGameContent
        id={gameDetailsData.id}
        images={imagesData.results}
      />

      <div className="relative z-[2] w-full">
        <GameAbout description={gameDetailsData.description} />
      </div>


      <div className="relative z-[2] w-full p-16 mt-[2rem] bg-white/40">
        <h3>more content here</h3>
      </div>
    </div>
  );
};

export default GameDetails;
