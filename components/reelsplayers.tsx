import React, { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { FaPlay, FaPause } from 'react-icons/fa';

interface ReelsPlayerProps {
    url: string;
    isPlaying: boolean;
    shouldPause: boolean;
}

const ReelsPlayer: React.FC<ReelsPlayerProps> = ({ url, isPlaying, shouldPause }) => {
    const playerRef = useRef<ReactPlayer>(null);
    const [isReady, setIsReady] = useState(false);
    const [isPaused, setIsPaused] = useState(!isPlaying);

    useEffect(() => {
        setIsReady(false); // Reset isReady when the URL changes
        if (playerRef.current && shouldPause) {
            playerRef.current.seekTo(0); // Reset the video to the beginning
            setIsPaused(true);
        }
    }, [url, shouldPause]);

    const handleTogglePlayPause = () => {
        setIsPaused(!isPaused);
    };

    const handleReady = () => {
        setIsReady(true);
        console.log('Video is ready to play');
    };

    return (
        <div className="relative w-full h-[80dvh] md:h-[60vh]">
            {!isReady && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                    <div className="w-8 h-8 border-4 border-blue-500 border-top-transparent rounded-full animate-spin"></div>
                    <span className="text-gray-700 ml-4">Loading...</span>
                </div>
            )}
            <ReactPlayer
                ref={playerRef}
                url={url}
                width="100%"
                height="100%"
                playing={!isPaused}
                loop={true}
                controls={false}
                onReady={handleReady}
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
            {isReady && (
                <button
                    onClick={handleTogglePlayPause}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                                p-2 text-white text-3xl bg-black bg-opacity-50 rounded-full focus:outline-none"
                    aria-label={isPaused ? 'Play' : 'Pause'}
                >
                    {isPaused ? <FaPlay /> : <FaPause />}
                </button>
            )}
        </div>
    );
};

export default ReelsPlayer;
