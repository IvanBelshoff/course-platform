import { PlayerHeader } from '@/components/player';
import React from 'react';

interface Props {
    params: {
        courseId: string;
        classId: string;
    }
}

export default function pagePlayer({ params: { classId, courseId } }: Props) {

    return (
        <div>
            <PlayerHeader
                title='NextJS, TailwindCSS e Typescript: #00 - Apresentação do projeto'
                subtitle='🔔 NextJS, TailwindCSS e Typescript'
            />
            Player {courseId} {classId}
        </div>
    );
};
