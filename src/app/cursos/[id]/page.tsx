import React from 'react';
import { Metadata } from 'next';

import { CourseHeader } from '@/components/couser-header/CourseHeader';
import { StartCourse } from '@/components/StartCourse';
import { ClassGroup } from '@/components/course-content/components/ClassGroup';
import { CourseContent } from '@/components/course-content/CourseContent';

interface Props {
    params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    return {
        title: params.id,
        description: params.id
    };
};

export default function pageCourseDetail({ params }: Props) {
    return (
        <main className='mt-8 flex justify-center'>
            <div className='w-full min-[880px]:max-w-[880px] px-2 lg:px-0 flex flex-col md:flex-row-reverse gap-4'>
                <div className='flex-1'>
                    <StartCourse
                        title='Curso de Figma para Devs'
                        idClass='1'
                        idCouser='1'
                        imageUri='https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg' />
                </div>
                <div className='flex-[2] flex flex-col gap-12'>

                    <CourseHeader />

                    <CourseContent classGroups={[
                        {
                            title: 'Introdução e apresentação do projeto',
                            courseId: '123',
                            classes: [
                                { id: '1', title: 'Figma para DEVs: #00 - Apresentação do curso' },
                                { id: '2', title: 'Figma para DEVs: #01 - Apresentação do curso' },
                                { id: '3', title: 'Figma para DEVs: #02 - Apresentação do curso' },
                            ],
                        },
                        {
                            title: 'Introdução e apresentação do projeto',
                            courseId: '1232',
                            classes: [
                                { id: '1', title: 'Figma para DEVs: #00 - Apresentação do curso' },
                                { id: '2', title: 'Figma para DEVs: #01 - Apresentação do curso' },
                                { id: '3', title: 'Figma para DEVs: #02 - Apresentação do curso' },
                            ],
                        }
                    ]} />

                </div>
            </div>
        </main>
    );
};
