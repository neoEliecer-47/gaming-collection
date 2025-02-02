import { videoPreviewProps } from "@/types";

const GameVideoPreview = ({ videoData }: videoPreviewProps) => {
  return (
    <div className="flex flex-row gap-2 overflow-scroll relative w-full h-[12rem] mt-4">
      {videoData.map(({ data: { "480": min, max }, id }) => (
        <video
          key={id}
          src={min}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
      ))}
    </div>
  );
};

export default GameVideoPreview;
