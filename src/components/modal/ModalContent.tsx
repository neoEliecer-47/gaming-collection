import { Dispatch } from "@reduxjs/toolkit";
import Link from "next/link";
import React, { SetStateAction } from "react";

const ModalContent = ({ isOpenModal, setIsOpenModal }: { isOpenModal: boolean, setIsOpenModal: React.Dispatch<SetStateAction<boolean>> }) => {
  return (
    <div className={`fixed overflow-hidden z-[9999] w-full inset-0 min-h-[50vh] bg-red-300 transition-all duration-300 ${isOpenModal ? 'translate-x-[3rem]' : ' translate-x-[25rem]'}`}>
      <h1>TITLE</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        corrupti in tenetur excepturi! Repudiandae, in quod. Saepe omnis commodi
        dignissimos hic corporis nesciunt veniam aut cumque, nulla, quas vel
        praesentium!
      </p>
      <Link href='/developers' className="bg-green-200 p-2">
        Developers
      </Link>
      <button onClick={()=>setIsOpenModal(false)}>close</button>
    </div>
  );
};

export default ModalContent;
