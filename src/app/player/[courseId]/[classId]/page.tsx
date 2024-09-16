import { PlayerHeader, PlayerPlaylist } from '@/components/player';
import React from 'react';

interface Props {
    params: {
        courseId: string;
        classId: string;
    }
}

export default function PagePlayer({ params: { classId, courseId } }: Props) {

    return (
        <main className='flex flex-col gap-2 h-screen'>
            <PlayerHeader
                title='NextJS, TailwindCSS e Typescript: #00 - Apresentação do projeto'
                subtitle='🔔 NextJS, TailwindCSS e Typescript'
            />

            <div className='flex gap-2 h-[calc(100vh-72px)]'>

                <div className='max-w-96'>
                    <PlayerPlaylist
                        playingClassId={classId}
                        playingCourseId={courseId}
                        classGroups={[
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
                        ]}                     />
                </div>

                <div className='flex-1'>
                    Player
                </div>

            </div>

        </main>
    );
};
