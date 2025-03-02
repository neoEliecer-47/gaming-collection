import { multimediaGameContent } from "@/types";

import ImageCarousel from "../interface/ImageCarousel";
import { fetchGameImages, fetchGameVideos } from "@/helpers";
import GameVideoPreview from "../interface/GameVideoPreview";

const MultimediaGameContent = async ({ id }: { id: number }) => {
  const [gameVideos, gameImages] = await Promise.all([
    fetchGameVideos(id),
    fetchGameImages(id),
  ]);
  //const gameVideos = await fetchGameVideos(id);
  //console.log("first", gameVideos);
  return (
    <div
      className={`p-0 m-0 relative z-[2] w-full h-[10rem] mb-[9rem] ${
        gameVideos?.length === 0 ? "mb-[7rem]" : "mb-[4.5rem]"
      }`}
    >
      {gameVideos?.length > 0 ? (
        <GameVideoPreview videoData={gameVideos} />
      ) : (
        <ImageCarousel images={gameImages} />
      )}
    </div>
  );
};

export default MultimediaGameContent;

export const dynamic = "force static";
