// components/VideoPlayer.tsx
import React, { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { FaPlay, FaPause } from 'react-icons/fa';

interface VideoPlayerProps {
    url: string;
    isPlaying: boolean;
    shouldPause: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url, isPlaying, shouldPause }) => {
    const playerRef = useRef<ReactPlayer>(null);
    const [isReady, setIsReady] = useState(false);
    const [isPaused, setIsPaused] = useState(!isPlaying);

    useEffect(() => {
        setIsReady(true);
    }, []);

    useEffect(() => {
        if (shouldPause && playerRef.current) {
            playerRef.current.seekTo(0); // Reset the video to the beginning
            setIsPaused(true);
        }
    }, [shouldPause]);

    const handleTogglePlayPause = () => {
        setIsPaused(!isPaused);
    };

    return (
        <div className="relative w-full h-full">
            {isReady ? (
                <>
                    <ReactPlayer
                        ref={playerRef}
                        url={url}
                        width="100%"
                        height="100%"
                        playing={!isPaused}
                        loop={true}
                        controls={true}  // We are using custom controls
                        playsinline
                        config={{
                            file: {
                                attributes: {
                                    controlsList: 'nodownload',
                                    disablePictureInPicture: true,
                                }
                            }
                        }}
                    />
                    <button
                        onClick={handleTogglePlayPause}
                        className="hidden md:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                                   p-2 text-white text-3xl bg-black bg-opacity-50 rounded-full focus:outline-none"
                        aria-label={isPaused ? 'Play' : 'Pause'}
                    >
                        {isPaused ? <FaPlay /> : <FaPause />}
                    </button>
                </>
            ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <div className="w-8 h-8 border-2 rounded-full border-blue-400 animate-spin" />  {/* Simple spinner */}
                    <span className="text-gray-700 ml-4">Loading...</span>  {/* Optional: Add loading text */}
                </div>
            )}
        </div>
    );
};

export default VideoPlayer;
