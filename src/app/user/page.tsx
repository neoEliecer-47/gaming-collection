"use client";

import Header from "@/components/Header";
import User from "@/components/icons/User";
import Navbar from "@/components/user/Navbar";
import { useState } from "react";

const page = () => {
  const [activeOptionIndex, setactiveOptionIndex] = useState<number>(-1);
  return (
    <>
      <Header />
      <div className="px-2 bg-gray-500 w-full min-h-screen">
        <section className="w-full h-[10rem] flex items-center justify-center bg-green-500">
          <User size={"20"} className="w-[9.5rem]" />
        </section>
        <div className="w-full h-full bg-orange-200">
          <Navbar
            activeOptionIndex={activeOptionIndex}
            updateOptionIndex={setactiveOptionIndex}
            titles={["Favorites", "Wishlist", "PLaylists"]}
          />
        </div>
      </div>
    </>
  );
};

export default page;
