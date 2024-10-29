'use client';
import { useMemo } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { useRouter } from 'next/navigation';

import { IPlayerClassGroupProps, PlayerVideoPlayer } from '..';
import { CourseHeader } from '@/components/couser-header/CourseHeader';

interface IPlayerClassDetailsProps {
    course: {
        title: string;
        description: string;
        numberOfClasses: number;
    };
    playingCourseId: string;
    playingClassId: string;
    classGroups: Pick<IPlayerClassGroupProps, 'title' | 'classes'>[]
}

export const PlayerClassDetails: React.FC<IPlayerClassDetailsProps> = ({ playingCourseId, classGroups, playingClassId, course }) => {

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
        <div className='flex-1 overflow-auto pb-10'>

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
                    <CourseHeader
                        title={course.title}
                        description={course.description}
                        numberOfclasses={course.numberOfClasses}
                    />
                </Tabs.Content>
            </Tabs.Root>

        </div>
    );
};
