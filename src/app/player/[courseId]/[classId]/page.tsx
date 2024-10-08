'use client';
import { PlayerClassDetails, PlayerHeader, PlayerPlaylist, PlayerVideoPlayer } from '@/components/player';
import React from 'react';

interface Props {
    params: {
        courseId: string;
        classId: string;
    }
}

export default function PagePlayer({ params: { classId, courseId } }: Props) {

    const classGroupsData = [
        {
            title: 'NextJS, TailwindCSS e Typescript',
            classes: [
                {
                    classId: 'aula-01',
                    title: 'NextJS, TailwindCSS e Typescript: #00 - Apresentação do projeto',
                    done: true,
                },
                {
                    classId: 'aula-02',
                    title: 'NextJS, TailwindCSS e Typescript: #01 - Configurando o ambiente',
                    done: false,
                },
                {
                    classId: 'aula-03',
                    title: 'NextJS, TailwindCSS e Typescript: #02 - Criando a página inicial',
                    done: false,
                }
            ]
        },
        {
            title: 'NextJS, TailwindCSS e Typescript',
            classes: [
                {
                    classId: 'aula-04',
                    title: 'NextJS, TailwindCSS e Typescript: #00 - Apresentação do projeto',
                    done: true,
                },
                {
                    classId: 'aula-05',
                    title: 'NextJS, TailwindCSS e Typescript: #01 - Configurando o ambiente',
                    done: false,
                },
                {
                    classId: 'aula-06',
                    title: 'NextJS, TailwindCSS e Typescript: #02 - Criando a página inicial',
                    done: false,
                }
            ]
        },
        {
            title: 'NextJS, TailwindCSS e Typescript',
            classes: [
                {
                    classId: 'aula-04',
                    title: 'NextJS, TailwindCSS e Typescript: #00 - Apresentação do projeto',
                    done: true,
                },
                {
                    classId: 'aula-05',
                    title: 'NextJS, TailwindCSS e Typescript: #01 - Configurando o ambiente',
                    done: false,
                },
                {
                    classId: 'aula-06',
                    title: 'NextJS, TailwindCSS e Typescript: #02 - Criando a página inicial',
                    done: false,
                }
            ]
        },
        {
            title: 'NextJS, TailwindCSS e Typescript',
            classes: [
                {
                    classId: 'aula-04',
                    title: 'NextJS, TailwindCSS e Typescript: #00 - Apresentação do projeto',
                    done: true,
                },
                {
                    classId: 'aula-05',
                    title: 'NextJS, TailwindCSS e Typescript: #01 - Configurando o ambiente',
                    done: false,
                },
                {
                    classId: 'aula-06',
                    title: 'NextJS, TailwindCSS e Typescript: #02 - Criando a página inicial',
                    done: false,
                }
            ]
        },
        {
            title: 'NextJS, TailwindCSS e Typescript',
            classes: [
                {
                    classId: 'aula-04',
                    title: 'NextJS, TailwindCSS e Typescript: #00 - Apresentação do projeto',
                    done: true,
                },
                {
                    classId: 'aula-05',
                    title: 'NextJS, TailwindCSS e Typescript: #01 - Configurando o ambiente',
                    done: false,
                },
                {
                    classId: 'aula-06',
                    title: 'NextJS, TailwindCSS e Typescript: #02 - Criando a página inicial',
                    done: false,
                }
            ]
        },
        {
            title: 'NextJS, TailwindCSS e Typescript',
            classes: [
                {
                    classId: 'aula-04',
                    title: 'NextJS, TailwindCSS e Typescript: #00 - Apresentação do projeto',
                    done: true,
                },
                {
                    classId: 'aula-05',
                    title: 'NextJS, TailwindCSS e Typescript: #01 - Configurando o ambiente',
                    done: false,
                },
                {
                    classId: 'aula-06',
                    title: 'NextJS, TailwindCSS e Typescript: #02 - Criando a página inicial',
                    done: false,
                }
            ]
        },
        {
            title: 'NextJS, TailwindCSS e Typescript',
            classes: [
                {
                    classId: 'aula-04',
                    title: 'NextJS, TailwindCSS e Typescript: #00 - Apresentação do projeto',
                    done: true,
                },
                {
                    classId: 'aula-05',
                    title: 'NextJS, TailwindCSS e Typescript: #01 - Configurando o ambiente',
                    done: false,
                },
                {
                    classId: 'aula-06',
                    title: 'NextJS, TailwindCSS e Typescript: #02 - Criando a página inicial',
                    done: false,
                }
            ]
        }
    ];

    return (
        <main className='flex flex-col gap-2 h-screen'>

            <PlayerHeader
                title='NextJS, TailwindCSS e Typescript: #00 - Apresentação do projeto'
                subtitle='🔔 NextJS, TailwindCSS e Typescript'
            />

            <div className='flex gap-2 h-[calc(100vh-72px)]'>

                <PlayerPlaylist
                    playingClassId={classId}
                    playingCourseId={courseId}
                    classGroups={classGroupsData}
                />

                <PlayerClassDetails
                    playingClassId={classId}
                    playingCourseId={courseId}
                    classGroups={classGroupsData}
                />

            </div>

        </main>
    );
};
