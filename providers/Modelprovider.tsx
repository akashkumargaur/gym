"use client";

import { useState,useEffect } from "react";

import UploadModal from "@/components/reelsModel";


interface ModalProviderProps {
    
  }

const ModalProvider: React.FC<ModalProviderProps>=({
    
})=>{
    const [isMounted,setIsMounted]=useState(false);
    useEffect(()=>{
        setIsMounted(true);
    },[])

    if(!isMounted){
        return null;
    }

    return(
        <>
            <UploadModal/>
        </>
    )
}
export default ModalProvider;