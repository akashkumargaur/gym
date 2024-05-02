"use client"
// pages/videos.tsx
import React, { useState } from 'react';
import VideoPlayer from '../../components/videoplayer';

const VideosPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState<number>(0);
  const [prevIndex, setPrevIndex] = useState(0); // Track the previous index
  const videos = [
    // Video URLs as before
    { id: 1, url: 'https://firebasestorage.googleapis.com/v0/b/project-1-9122.appspot.com/o/fitgym%2F1.mp4?alt=media&token=8ae67c3b-b689-4652-92aa-2418f26784a2' },
    { id: 2, url: 'https://firebasestorage.googleapis.com/v0/b/project-1-9122.appspot.com/o/fitgym%2F2.mp4?alt=media&token=9b589384-ddb1-45af-92db-849c0a415f16' },
    { id: 3, url: 'https://firebasestorage.googleapis.com/v0/b/project-1-9122.appspot.com/o/fitgym%2F3.mp4?alt=media&token=9fbf5c99-ae4a-454b-933c-6b0f2ec82cd7' },
    { id: 4, url: 'https://firebasestorage.googleapis.com/v0/b/project-1-9122.appspot.com/o/fitgym%2F4.mp4?alt=media&token=aad5e1a2-f5a4-488c-91e2-f5bbd869e034' },
    { id: 5, url: 'https://firebasestorage.googleapis.com/v0/b/project-1-9122.appspot.com/o/fitgym%2F5.mp4?alt=media&token=81ef2429-1b25-4ba8-a62d-df0545743184' },
    { id: 6, url: 'https://firebasestorage.googleapis.com/v0/b/project-1-9122.appspot.com/o/fitgym%2F6.mp4?alt=media&token=33ebea26-46c0-4ee1-a111-bf5b66fc9a27' },
    { id: 7, url: 'https://firebasestorage.googleapis.com/v0/b/project-1-9122.appspot.com/o/fitgym%2F7.mp4?alt=media&token=f060a16f-11c0-412b-8ea8-7e3139827d15' },
    { id: 8, url: 'https://firebasestorage.googleapis.com/v0/b/project-1-9122.appspot.com/o/fitgym%2F8.mp4?alt=media&token=448d0a34-a45a-4020-adf9-92334397c0c3' },
    { id: 9, url: 'https://firebasestorage.googleapis.com/v0/b/project-1-9122.appspot.com/o/fitgym%2F9.mp4?alt=media&token=e1295ce3-e66f-43a1-bdc2-738db6a72ddb' },
    { id: 10, url: 'https://firebasestorage.googleapis.com/v0/b/project-1-9122.appspot.com/o/fitgym%2F10.mp4?alt=media&token=ebe2ef74-351e-4f21-b531-0ba39ee53fbf' },
    { id: 11, url: 'https://firebasestorage.googleapis.com/v0/b/project-1-9122.appspot.com/o/fitgym%2F11.mp4?alt=media&token=a8c9850c-b9b3-4f6b-bc04-e367d45df847' },
    { id: 12, url: 'https://firebasestorage.googleapis.com/v0/b/project-1-9122.appspot.com/o/fitgym%2F12.mp4?alt=media&token=de21a2fd-7798-4b84-82a7-af391179bf7e' },
    { id: 13, url: 'https://firebasestorage.googleapis.com/v0/b/project-1-9122.appspot.com/o/fitgym%2F13.mp4?alt=media&token=d0cec8d1-5407-421c-99f6-ef6fb74e32ed' },
    { id: 14, url: 'https://firebasestorage.googleapis.com/v0/b/project-1-9122.appspot.com/o/fitgym%2F14.mp4?alt=media&token=90d8f205-380b-436d-b609-8856db4163ce' },
    { id: 15, url: 'https://firebasestorage.googleapis.com/v0/b/project-1-9122.appspot.com/o/fitgym%2F15.mp4?alt=media&token=8f98cea8-076e-4ad7-a67a-393543f4368d' },
    { id: 16, url: 'https://firebasestorage.googleapis.com/v0/b/project-1-9122.appspot.com/o/fitgym%2F16.mp4?alt=media&token=912c513d-53ef-4f7a-9540-8629542d5e59' },
    { id: 17, url: 'https://firebasestorage.googleapis.com/v0/b/project-1-9122.appspot.com/o/fitgym%2F17.mp4?alt=media&token=094a5ea3-031c-41d0-90f9-b8f11fa25ddc' },
    { id: 18, url: 'https://firebasestorage.googleapis.com/v0/b/project-1-9122.appspot.com/o/fitgym%2F18.mp4?alt=media&token=232b99b8-2dad-413b-ab62-189f9f5e63d8' },
    { id: 19, url: 'https://firebasestorage.googleapis.com/v0/b/project-1-9122.appspot.com/o/fitgym%2F19.mp4?alt=media&token=eac1d79c-501f-4e0b-a41a-1fe1f0259ebb'}
    // Add more video URLs as needed
  ];

  const handleChangeIndex = (index: number) => {
    // setPrevIndex(activeIndex); // Set the previous index before updating the active index
    setActiveIndex(index);
    console.log('Active Index:', index);
  };

  return (
    <div className="  text-black
        rounded-lg 
        h-fit 
        w-full 
        overflow-hidden  sm:mt-[250px]
        overflow-y-auto">
      <div className=" flex justify-center container ml-auto py-4 h-fit  ">
        <div className=" md:grid md:grid-cols-3 md:gap-3 ">
          {/* <SwipeableViews
            axis="y"
            index={activeIndex}
            onChangeIndex={handleChangeIndex}
            resistance
            enableMouseEvents
          > */}
            {videos.map((video, index) => (
              <div key={video.id} className=" p-2 md:w-[40vh]">
                <VideoPlayer
                  key={video.id}
                  url={video.url}
                  isPlaying={activeIndex === index}
                  shouldPause={activeIndex !== index && prevIndex === index} // Pause the previous video
                />
              </div>

            ))}
          {/* </SwipeableViews> */}
        </div>
      </div>
    </div>
  );
};

export default VideosPage;
