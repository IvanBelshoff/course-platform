'use client';
import React from 'react';

import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

interface IPlayerVideoPlayerProps {
    videoId: string;
}

export const PlayerVideoPlayer: React.FC<IPlayerVideoPlayerProps> = ({ videoId }) => {
    return (
        <div>
            <ReactPlayer
                url={`https://www.youtube.com/watch?v=${videoId}`}
            />
        </div>
    );
};
