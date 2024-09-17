'use client';

import { useRouter } from 'next/navigation';
import React, { useMemo } from 'react';
import { IPlayerClassGroupProps, PlayerVideoPlayer } from '..';
import * as Tabs from '@radix-ui/react-tabs';

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

        if (nextClassIndex === classes.length) {
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

            <Tabs.Root defaultValue='class-details'>
                <Tabs.List className='flex gap-4 '>
                    <Tabs.Trigger
                        value='class-details'
                        className='p-2 flex items-center justify-center border-b-4 border-transparent data-[state=active]:border-primary'
                    >Conteúdo do Curso</Tabs.Trigger>
                    <Tabs.Trigger
                        value='class-comments'
                        className='p-2 flex items-center justify-center border-b-4 border-transparent data-[state=active]:border-primary'
                    >Comentários</Tabs.Trigger>
                    <Tabs.Trigger
                        value='course-details'
                        className='p-2 flex items-center justify-center border-b-4 border-transparent data-[state=active]:border-primary'
                    >Visão geral do curso</Tabs.Trigger>
                </Tabs.List>

                <hr className='border-paper' />

                <Tabs.Content value='class-details'>
                    Detalhes da aula
                </Tabs.Content>
                <Tabs.Content value='class-comments'>
                    Comentários da aula
                </Tabs.Content>
                <Tabs.Content value='course-details'>
                    Detalhes do curso
                </Tabs.Content>
            </Tabs.Root>

        </div>
    );
};
