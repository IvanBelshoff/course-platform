'use client';
import Link from 'next/link';
import { title } from 'process';
import React from 'react';
import { MdPlayCircleOutline } from 'react-icons/md';
import { useInView } from 'react-intersection-observer';

interface IStartCourseProps {
    idCouser: string;
    idClass: string;
    imageUri: string;
    title: string;
}
export const StartCourse: React.FC<IStartCourseProps> = ({ idClass, idCouser, imageUri, title }) => {

    const [ref, inView] = useInView({
        threshold: 0.2,
        initialInView: true
    });

    return (
        <>
            <div ref={ref} className='p-3 bg-paper rounded-md flex flex-col gap-4 md:sticky md:top-[104px]'>
                <Link
                    href={`/player/${idCouser}/${idClass}`}
                    style={{ backgroundImage: `url(${imageUri})` }}
                    className='w-full bg-cover bg-no-repeat aspect-video bg-center rounded'
                >
                    <div className='w-full h-full flex items-center justify-center bg-background rounded opacity-0 hover:opacity-70 transition-opacity'>
                        <MdPlayCircleOutline size={58} />
                    </div>
                </Link>
                <Link
                    href={`/player/${idCouser}/${idClass}`}
                    className='bg-primary p-2 px-3 rounded text-center hover:no-underline'
                >
                    Começar curso
                </Link>
            </div>

            {!inView && (
                <div className='p-3 px-2 bg-paper flex flex-col gap-4 absolute left-0 right-0 top-14'>
                    <h1 className='font-extrabold text-xl'>
                        {title}
                    </h1>
                    <Link
                        href={`/player/${idCouser}/${idClass}`}
                        className='bg-primary p-2 px-3 rounded text-center hover:no-underline'
                    >
                        Começar curso
                    </Link>
                </div>
            )}
        </>

    );
};
