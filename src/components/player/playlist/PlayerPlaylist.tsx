'use client';
import React, { useState } from 'react';
import { IPlayerClassGroupProps, PlayerClassGroup } from './components/PlayerClassGroup';
import { useRouter } from 'next/navigation';

interface IPlayerPlaylistProps {
    playingClassId: string;
    playingCourseId: string;
    classGroups: Pick<IPlayerClassGroupProps, 'title' | 'classes'>[]
}

export const PlayerPlaylist: React.FC<IPlayerPlaylistProps> = ({ classGroups, playingClassId, playingCourseId }) => {

    const [openedIndex, setOpenedIndex] = useState<number | undefined>(
        classGroups.findIndex((classGroup) => classGroup.classes.some((classItem) => classItem.classId === playingClassId))
    );

    const handleToggle = (index: number) => {
        setOpenedIndex((prevIndex) => (prevIndex === index ? undefined : index));
    };

    const router = useRouter();

    return (
        <div className='flex flex-col gap-2 h-full'>

            <div className='flex flex-col p-4 bg-paper'>
                <h3 className='text-lg font-bold'>
                    Conteúdo do Curso
                </h3>
            </div>

            <ol className='overflow-auto overflow-primary'>
                {classGroups.map((classGroupItem, index) => (
                    <li key={classGroupItem.title}>
                        <PlayerClassGroup
                            {...classGroupItem}
                            playingClassId={playingClassId}
                            open={openedIndex === index}
                            position={index + 1}
                            onToggle={() => handleToggle(index)}
                            onPlay={(classId) => router.push(`/player/${playingCourseId}/${classId}`)}
                            onCheck={(classId) => console.log(classId)}
                        />
                    </li>

                ))}
            </ol>


        </div>
    );
};
