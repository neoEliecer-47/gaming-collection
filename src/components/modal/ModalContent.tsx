'use client'
import Link from "next/link";
import React, { SetStateAction, useEffect } from "react";

const ModalContent = ({ isOpenModal, setIsOpenModal }: { isOpenModal: boolean, setIsOpenModal: React.Dispatch<SetStateAction<boolean>> }) => {
  
  useEffect(()=>{
    if(isOpenModal){
      document.body.classList.add('overflow-hidden', 'h-screen')
    }else{
      document.body.classList.remove('overflow-hidden', 'h-screen')
    }

    return () => document.body.classList.remove('overflow-hidden', 'h-screen')//clean up
  }, [isOpenModal])
  return (
    <>
    <div className={`fixed overflow-hidden z-[2000] w-full inset-0 min-h-[50vh] backdrop-blur-2xl bg-red-300 transition-all duration-300 ${isOpenModal ? 'translate-x-[4rem] opacity-100' : ' translate-x-[30rem] opacity-0'}`}>
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
    {isOpenModal && <div className="fixed inset-0 z-[900] backdrop-blur-md h-screen overflow-hidden"/>}
    </>
  );
};

export default ModalContent;
