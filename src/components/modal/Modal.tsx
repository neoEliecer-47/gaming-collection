"use client";

import { useState } from "react";
import Menu from "../icons/Menu";
import ModalContent from "./ModalContent";

const Modal = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  return (
    <div className="h-[4rem] flex px-2 text-center outline-none border-black/50 overflow-hidden md:hidden bg-black/50 border-none">
     
        <button className="" onClick={() => setIsOpenModal(!isOpenModal)}>
          <Menu />
        </button>
     

      <ModalContent isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
    </div>
  );
};

export default Modal;
