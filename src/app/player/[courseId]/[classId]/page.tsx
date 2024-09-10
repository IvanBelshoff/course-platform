'use client';

import { PlayerClassGroup, PlayerHeader } from '@/components/player';
import React, { useState } from 'react';
interface Props {
    params: {
        courseId: string;
        classId: string;
    }
}

export default function pagePlayer({ params: { classId, courseId } }: Props) {

    const [open, setOpen] = useState<boolean>(false);

    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <main className='flex flex-col gap-3'>
            <PlayerHeader
                title='NextJS, TailwindCSS e Typescript: #00 - Apresentação do projeto'
                subtitle='🔔 NextJS, TailwindCSS e Typescript'
            />
            <PlayerClassGroup
                title='NextJS, TailwindCSS e Typescript'
                position={1}
                open={open}
                onToggle={handleToggle}
                classes={[
                    {
                        title: 'NextJS, TailwindCSS e Typescript: #00 - Apresentação do projeto',
                        plyaing: false,
                        done: true,
                    },
                    {
                        title: 'NextJS, TailwindCSS e Typescript: #01 - Configurando o ambiente',
                        plyaing: true,
                        done: false,
                    },
                    {
                        title: 'NextJS, TailwindCSS e Typescript: #02 - Criando a página inicial',
                        plyaing: false,
                        done: false,
                    },
                ]}
            />
        </main>
    );
};
