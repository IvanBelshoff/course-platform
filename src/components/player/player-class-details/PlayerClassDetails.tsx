'use client';

import { useRouter } from 'next/navigation';
import React, { useMemo } from 'react';
import { IPlayerClassGroupProps, PlayerVideoPlayer } from '..';

interface IPlayerClassDetailsProps {
    playingCourseId: string;
    playingClassId: string;
    classGroups: Pick<IPlayerClassGroupProps, 'title' | 'classes'>[]
}

export const PlayerClassDetails: React.FC<IPlayerClassDetailsProps> = ({ playingCourseId, classGroups, playingClassId }) => {

    const router = useRouter();

    const nextClassId = useMemo(() => {

        const classes = classGroups.flatMap((classGroupItem) => classGroupItem.classes);

        const currentClassIndex = classes.findIndex((classItem) => classItem.classId === playingClassId);

        const nextClassIndex = currentClassIndex + 1;

        if(nextClassIndex === classes.length) {
            return undefined;
        }

        return classes[nextClassIndex].classId;

    }, [classGroups, playingClassId]);


    return (
        <div className='flex-1'>
            <div className='aspect-video'>
                <PlayerVideoPlayer
                    videoId={'bP47qRVRqQs'}
                    onPlayNext={() => nextClassId ? router.push(`/player/${playingCourseId}/${nextClassId}`) : undefined}
                />
            </div>
            <div>
                Descrição
            </div>
        </div>
    );
};
