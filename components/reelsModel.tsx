"use client";

import React, { useState, useEffect } from 'react';
import useUploadModal from "@/hooks/useReelsModel";
import Modal from "./Modal";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import '@/app/firebase/config'; // Ensure Firebase is initialized
import ReelsPlayer from './reelsplayers';

const UploadModal = () => {
  const uploadModal = useUploadModal();
  const [isLoading, setIsLoading] = useState(false);
  const [videos, setVideos] = useState<string[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const storage = getStorage();
    const listRef = ref(storage, 'fitgym'); // adjust path as necessary

    listAll(listRef)
      .then((res) => {
        const promises = res.items.map((itemRef) => getDownloadURL(itemRef));
        Promise.all(promises).then((urls) => {
          setVideos(urls);
        });
      })
      .catch((error) => {
        console.error('Error listing items:', error);
      });
  }, []);

  const handleNextVideo = () => {
    setActiveIndex(prevIndex => (prevIndex + 1) % videos.length); // cycle through videos
  };

  const handlePreviousVideo = () => {
    setActiveIndex(prevIndex => (prevIndex - 1 + videos.length) % videos.length); // cycle backwards through videos
  };

  return (
    <Modal
      title="Todays Update"
      description="Get Connect To The Best "
      isOpen={uploadModal.isOpen}
      onChange={(open) => {
        if (!open) uploadModal.onClose();
      }}
    >
      <div className='relative'>
        {videos.length > 0 && (
          <div>
            <ReelsPlayer
              key={activeIndex}
              url={videos[activeIndex]}
              isPlaying={true}
              shouldPause={false}
            />
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2"
              onClick={handlePreviousVideo}
              disabled={activeIndex === 0}
            >
              <div className='bg-black border rounded-full p-1'>
                <FaArrowLeft color='white' size={20} />
              </div>
              {/* <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 19L7 12L16 5V19Z" fill="currentColor"/>
              </svg> */}
            </button>
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2"
              onClick={handleNextVideo}
              disabled={activeIndex === videos.length - 1}
            >
              <div className='bg-black border rounded-full p-1'>
                <FaArrowRight color='white' size={20} />
              </div>
              {/* <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
              </svg> */}
            </button>
          </div>
        )}
      </div>
    </Modal>
  )
}

export default UploadModal;