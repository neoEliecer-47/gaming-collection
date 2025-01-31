import { gameDetailsProps } from "@/types";
import Image from "next/image";
import Header from "../Header";
import styles from './GameDetails.module.css'
import classNames from "classnames";

const GameDetails = ({ gameDetailsData }: gameDetailsProps) => {
  return (
    <div className="relative z-[2]">
      <Header />
      <Image
        src={gameDetailsData.background_image}
        alt="bg"
        width={500}
        height={700}
        className={classNames('top-[-16rem] md:top-[-5.5rem] lg:top-[-1rem] left-0 z-0 brightness-[0.3] md:brightness-[0.25] object-contain md:object-cover', styles.image)}
        
      />
      <div className={styles.overlay}/>
      <h1 className="relative text-white text-lg font-bold">{gameDetailsData.name}</h1>
    </div>
  );
};

export default GameDetails;
