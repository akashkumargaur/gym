"use client"
// pages/videos.tsx
import React, { useState, useEffect } from 'react';
import VideoPlayer from '../../components/videoplayer';
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import '@/app/firebase/config'; // Make sure this path points to where you initialize Firebase

const VideosPage: React.FC = () => {
  const [videos, setVideos] = useState<string[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const storage = getStorage();
    const listRef = ref(storage, 'fitgym'); // Assuming 'fitgym' is your folder in Firebase Storage

    listAll(listRef)
      .then((res) => {
        const urls: string[] = [];
        res.items.forEach((itemRef) => {
          getDownloadURL(itemRef).then((url) => {
            urls.push(url);
            setVideos(prevUrls => [...prevUrls, url]); // Avoid overwriting during state updates
          }).catch((error) => {
            console.error('Error getting download URL:', error);
          });
        });
      })
      .catch((error) => {
        console.error('Error listing items:', error);
      });
  }, []);

  const handleChangeIndex = (index: number) => {
    setActiveIndex(index);
    console.log('Active Index:', index);
  };

  return (
    <div className="text-black rounded-lg h-fit w-full overflow-hidden sm:mt-[250px] overflow-y-auto">
      <div className="flex justify-center container ml-auto py-4 h-fit">
        <div className="md:grid md:grid-cols-3 md:gap-3">
          {videos.map((url, index) => (
            <div key={index} className="p-2 md:w-[40vh]">
              <VideoPlayer
                key={index}
                url={url}
                isPlaying={activeIndex === index}
                shouldPause={activeIndex !== index}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideosPage;
