"use client";

import { useState } from "react";
import Menu from "../icons/Menu";
import dynamic from "next/dynamic";

const ModalContent = dynamic(() => import('./ModalContent'), {
  ssr: false
});

const Modal = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  return (
    <div className="h-[4rem] w-full flex justify-center items-center  text-center outline-none bg-black/70 overflow-hidden md:hidden border-none">
     
        <button className="" onClick={() => setIsOpenModal(!isOpenModal)}>
          <Menu />
        </button>
     

      { isOpenModal && <ModalContent isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} /> }
    </div>
  );
};

export default Modal;
