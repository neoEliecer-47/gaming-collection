import { multimediaGameContent } from "@/types";

import ImageCarousel from "../interface/ImageCarousel";
import { fetchGameVideos } from "@/helpers";
import GameVideoPreview from "../interface/GameVideoPreview";

const MultimediaGameContent = async ({ id, images }: multimediaGameContent) => {
  const gameVideos = await fetchGameVideos(id);
  //console.log("first", gameVideos);
  return (
    <div
      className={`p-0 m-0 relative z-[2] w-full h-[10rem] ${
        gameVideos.results?.length === 0 ? "mb-[7rem]" : "mb-[4.5rem]"
      }`}
    >
      {gameVideos.results?.length > 0 ? (
        <GameVideoPreview videoData={gameVideos.results} />
      ) : (
        <ImageCarousel images={images} />
      )}
    </div>
  );
};

export default MultimediaGameContent;

export const dynamic = "force static";
