'use client';
import React, { forwardRef, useImperativeHandle, useMemo, useRef, useState } from 'react';

import dynamic from 'next/dynamic';
import { MdPlayCircle } from 'react-icons/md';
import type TReactPlayer from 'react-player';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });
interface IPlayerVideoPlayerProps {
    videoId: string;
    onPlayNext: () => void;
}

export interface IPlayerVideoPlayerRef {
    setProgress: (seconds: number) => void;
}

// eslint-disable-next-line react/display-name
export const PlayerVideoPlayer = forwardRef<IPlayerVideoPlayerRef, IPlayerVideoPlayerProps>(({ videoId, onPlayNext }, playerRefToForward) => {

    const playerRef = useRef<TReactPlayer>();
    const wrapperRef = useRef<HTMLDivElement>(null);

    const [progress, setProgress] = useState<number | undefined>(undefined);
    const [totalDuration, setTotalDuration] = useState<number | undefined>(undefined);

    const secondsUntilEnd = useMemo(() => {

        if (!totalDuration) return undefined;
        if (!progress) return undefined;

        return Number((totalDuration - progress).toFixed(0));

    }, [progress, totalDuration]);

    const showNextButton = useMemo(() => {

        return !!secondsUntilEnd && Number(secondsUntilEnd) <= 30;

    }, [secondsUntilEnd]);

    useImperativeHandle(playerRefToForward, () => {
        return {
            setProgress: (seconds) => {
                playerRef.current?.seekTo(seconds, 'seconds');
                wrapperRef.current?.scrollIntoView({ behavior: 'smooth' });
            }
        };
    }, []);

    return (
        <div ref={wrapperRef} className='h-full'>
            
            {showNextButton && (
                <button
                    className='bg-primary p-3 px-4 rounded-lg font-bold flex items-center gap-2 absolute right-4 top-36'
                    onClick={onPlayNext}>
                    <MdPlayCircle size={24} />
                    Próxima aula em {secondsUntilEnd}
                </button>
            )}

            <ReactPlayer
                onReady={(ref) => playerRef.current = ref}
                height='100%'
                width='100%'
                playing={true}
                controls={true}
                onProgress={({ playedSeconds }) => setProgress(playedSeconds)}
                onDuration={(duration) => setTotalDuration(duration)}
                onEnded={onPlayNext}
                url={`https://www.youtube.com/watch?v=${videoId}`}
            />
        </div>
    );
});
