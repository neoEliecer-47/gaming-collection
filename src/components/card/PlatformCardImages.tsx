'use client'

import { platformsImages } from "../../constants/index";
import { PlatformCardImagesProps } from "@/types";
import Image, { StaticImageData } from "next/image";

const PlatformCardImages = ({ platforms }: PlatformCardImagesProps) => {
  function buildImgSrc(slug: string): StaticImageData {
    if (slug === "mac") return platformsImages[1].imgSrc as StaticImageData;
    return platformsImages.find((p) => p.slug === slug)
      ?.imgSrc as StaticImageData;
  }

  return (
    <div className="my-1 h-auto flex justify-start items-center gap-[0.4rem] bg-white/50 rounded-lg px-2 py-[0.15rem] w-fit">
      {platforms?.map(({ platform }) => (
        <Image
          src={buildImgSrc(platform.slug)}
          alt={platform.slug}
          width={18}
          height={18}
          className="rounded-md"
          loading="eager"
          priority
        />
      ))}
    </div>
  );
};

export default PlatformCardImages;
