import { gameDetailsProps } from "@/types";
import Image from "next/image";
import Header from "../Header";
import styles from "./GameDetails.module.css";
import classNames from "classnames";
import Link from "next/link";
import PlatformCardImages from "../card/PlatformCardImages";
import { buildDate } from "@/utils";

const GameDetails = ({ gameDetailsData }: gameDetailsProps) => {
  return (
    <div className="relative w-full h-[100vh] bg-black">
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
        className="absolute top-0 left-0 w-full h-full z-[1]"
        style={{
          background:
            "linear-gradient(rgba(15, 15, 15, 0.5), rgb(21, 21, 21)), linear-gradient(rgba(21, 21, 21, 0.3), rgba(21, 21, 21, 0.9))",
        }}
      ></div>

      <h1 className="relative text-white text-lg font-bold z-[2]">
        {gameDetailsData.name}
      </h1>
    </div>
  );
};

export default GameDetails;
