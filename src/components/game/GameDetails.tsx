import { gameDetailsProps } from "@/types";
import Image from "next/image";
import Header from "../Header";
import styles from "./GameDetails.module.css";
import classNames from "classnames";

const GameDetails = ({ gameDetailsData }: gameDetailsProps) => {
  return (
    <div className="relative z-[2] overflow-y-hidden">
      <Header />

      <div
        style={{
          backgroundImage: `linear-gradient(rgba(15, 15, 15, 0), rgb(21, 21, 21)), linear-gradient(rgba(21, 21, 21, 0.3), rgba(21, 21, 21, 0.9)), url(${gameDetailsData.background_image})`,
        }}
        className="fixed bg-transparent w-full h-[15rem] top-0 md:h-full  left-0 object-cover bg-contain bg-no-repeat z-[2] md:object-cover md:bg-cover border-none"
      />

      <div className="fixed h-full w-full bg-[rgba(21,21,21)]"></div>

      <h1 className="relative text-white text-lg font-bold z-[2]">
        {gameDetailsData.name}
      </h1>
      
    </div>
  );
};

export default GameDetails;
