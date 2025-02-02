import { videoPreviewProps } from "@/types";
import Link from "next/link";
import Play from "../icons/Play";

const GameVideoPreview = ({ videoData }: videoPreviewProps) => {
  return (
    <div className=" overflow-x-auto w-full h-[12rem] mt-4">
      <div className="flex gap-2 p-2">
        {videoData.map(({ data: { "480": min, max }, id }) => (
          <div key={id} className="min-w-[250px] relative">
            <video
              src={min}
              className="w-full h-40 object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
            <Link
              href={`/game/video/${encodeURIComponent(max)}`}
              className="z-[2]"
            >
              <div className="absolute bg-transparent backdrop-blur-[10px] px-2 py-[0.35rem] rounded-lg bottom-5 right-4 flex items-center justify-center text-white text-xs">
                <Play /> watch full video
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameVideoPreview;
