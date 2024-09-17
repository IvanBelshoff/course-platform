'use client';
import React from 'react';

import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

interface IPlayerVideoPlayerProps {
    videoId: string;
}

export const PlayerVideoPlayer: React.FC<IPlayerVideoPlayerProps> = ({ videoId }) => {
    return (
        <>
            <ReactPlayer
                height='100%'
                width='100%'
                playing={true}
                controls={true}
                url={`https://www.youtube.com/watch?v=${videoId}`}
            />
        </>
    );
};
