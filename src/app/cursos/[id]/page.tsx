import React from 'react';
import { Metadata } from 'next';

import { CourseHeader } from '@/components/couser-header/CourseHeader';

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
            <div className='w-full min-[880px]:max-w-[880px]'>
                <CourseHeader />
            </div>

        </main>
    );
};
