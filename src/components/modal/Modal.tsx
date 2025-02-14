'use client'

import { useState } from "react"
import Menu from "../icons/Menu"
import ModalContent from "./ModalContent"

const Modal = () => {
const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  return (
    <div className="overflow-hidden">
    <div className="relative overflow-x-hidden">
    <button className="" onClick={()=>setIsOpenModal(!isOpenModal)}>
            <Menu />
    </button>
    </div>
            
              <ModalContent isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}/>
          
            </div>
  )
}

export default Modal