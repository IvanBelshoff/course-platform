'use client';

import { PlayerClass, PlayerHeader } from '@/components/player';
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
            <PlayerClass
                title='NextJS, TailwindCSS e Typescript: #00 - Apresentação do projeto'
                plyaing={true}
                done={false}
                onCheck={() => console.log('check')}
                onPlay={() => console.log('play')}
            />
        </div>
    );
};
