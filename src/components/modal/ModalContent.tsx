"use client";
import Link from "next/link";
import React, { SetStateAction, useEffect, useRef, useState } from "react";

const ModalContent = ({
  isOpenModal,
  setIsOpenModal,
}: {
  isOpenModal: boolean;
  setIsOpenModal: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const [translateX, setTranslateX] = useState<number>(
    isOpenModal ? 200 : 1600
  );
  const [isDragging, setIsDragging] = useState(false);
  const touchStartX = useRef<number>(0);
  //const touchEndX = useRef<number>(0);
  //console.log(images)
  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
    setIsDragging(true);
  }

  function handleTouchMove(e: React.TouchEvent) {
    const touchCurrentX = e.touches[0].clientX;
    const swipeDistance = touchCurrentX - touchStartX.current;

    setTranslateX((prev) => Math.min(480, Math.max(64, 64 + swipeDistance)));
  }

  function handleTouchEnd() {
    setIsDragging(false);
    if (translateX > 300) {
      setIsOpenModal(false);
    } else {
      setTranslateX(48);
    }
  }

  useEffect(() => {
    if (isOpenModal) {
      document.body.classList.add("overflow-hidden", "h-screen");
    } else {
      document.body.classList.remove("overflow-hidden", "h-screen");
    }

    return () => document.body.classList.remove("overflow-hidden", "h-screen"); //clean up
  }, [isOpenModal]);

  useEffect(() => {
    setTranslateX(isOpenModal ? 64 : 480);
  }, [isOpenModal]);
  return (
    <>
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
        className={`fixed overflow-hidden z-[2000] w-full bg-black/30 inset-0 min-h-[50vh] backdrop-blur-[30px] bg-red-300 ${
          isDragging ? "" : "transition-transform duration-300"
        }`}
        style={{ transform: `translateX(${translateX}px)` }}
      >
        <h1>TITLE</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          corrupti in tenetur excepturi! Repudiandae, in quod. Saepe omnis
          commodi dignissimos hic corporis nesciunt veniam aut cumque, nulla,
          quas vel praesentium!
        </p>
        <Link href="/developers" className="bg-green-200 p-2">
          Developers
        </Link>
        <button onClick={() => setIsOpenModal(false)}>close</button>
      </div>
      {isOpenModal && (
        <div className="fixed inset-0 z-[900] backdrop-invert-[70%] transition-all duration-500 h-screen overflow-hidden" />
      )}
    </>
  );
};

export default ModalContent;
