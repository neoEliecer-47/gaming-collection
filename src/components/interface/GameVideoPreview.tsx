"use client";

import { videoPreviewProps } from "@/types";
import Link from "next/link";
import Play from "../icons/Play";
import { useEffect, useRef, useState } from "react";

const GameVideoPreview = ({ videoData }: videoPreviewProps) => {
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const videoContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = videoContainer.current;
    if (!container) return;

    const handleMouseDown = (event: MouseEvent) => {
      isDragging.current = true;
      startX.current = event.pageX - container.offsetLeft;
      scrollLeft.current = container.scrollLeft
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!isDragging.current) return;
      event.preventDefault();
      const x = event.pageX - container.offsetLeft;
      const walk = (x - startX.current) * 2; // Adjust scroll speed
      container.scrollLeft = scrollLeft.current - walk;
    };

    const handleMouseUp = () => isDragging.current = false

    container.addEventListener("mousedown", handleMouseDown);
    container.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      container.removeEventListener("mousedown", handleMouseDown);
      container.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div
      ref={videoContainer}
      className="overflow-x-auto lg:overflow-y-hidden w-full lg:mx-auto min-h-[12rem] mt-4 cursor-grab"
      style={{ scrollBehavior: "smooth", scrollbarWidth: "none" }}
    >
      <div className="flex flex-row gap-2 p-2">
        {videoData?.map(({ data: { "480": min, max }, id }) => (
          <div key={id} className="min-w-[250px] lg:min-w-[500px] relative">
            <video
              src={min}
              className="w-full h-[12rem] lg:h-[14rem] object-cover"
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
