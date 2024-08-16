import React from 'react';
import { Metadata } from 'next';

import { CourseHeader } from '@/components/couser-header/CourseHeader';
import { StartCourse } from '@/components/StartCourse';

interface Props {
    params: { id: string }
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    return {
        title: "CodarSe - Curso de API Rest, Node e Typescript",
    };
};

export default function pageCourseDetail({ params }: Props) {
    return (
        <main className='mt-8 flex justify-center'>
            <div className='w-full min-[880px]:max-w-[880px] px-2 lg:px-0 flex flex-col md:flex-row-reverse gap-4'>
                <div className='flex-1'>
                    <StartCourse title='Curso de Figma para Devs' idClass='1' idCouser='1' imageUri='https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg' />

                </div>
                <div className='flex-[2]'>
                    <CourseHeader />
                    <CourseHeader />
                    <CourseHeader />
                    <CourseHeader />
                    <CourseHeader />
                </div>

            </div>
        </main>
    );
};
